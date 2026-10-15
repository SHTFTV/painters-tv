import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist/public");
const template = readFileSync(path.join(publicDir, "index.html"), "utf-8");

const { render, ROUTES } = await import(
  path.join(root, "dist/server/entry-server.js")
);

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function upsertHead(html, head) {
  let out = html;
  for (const tag of head.tags) {
    if (tag.type === "title" && tag.text != null) {
      out = out.replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>${escapeAttr(tag.text)}</title>`,
      );
    } else if (tag.type === "meta" && tag.attr && tag.key) {
      const sel = new RegExp(
        `<meta ${tag.attr}="${escapeRegExp(tag.key)}"[^>]*>`,
      );
      const el = `<meta ${tag.attr}="${tag.key}" content="${escapeAttr(tag.content)}" />`;
      out = sel.test(out)
        ? out.replace(sel, el)
        : out.replace("</head>", `    ${el}\n  </head>`);
    } else if (tag.type === "link" && tag.key) {
      const sel = new RegExp(`<link rel="${escapeRegExp(tag.key)}"[^>]*>`);
      const el = `<link rel="${tag.key}" href="${escapeAttr(tag.content)}" />`;
      out = sel.test(out)
        ? out.replace(sel, el)
        : out.replace("</head>", `    ${el}\n  </head>`);
    }
  }
  if (head.jsonLd.length > 0) {
    const json = JSON.stringify(
      head.jsonLd.length === 1 ? head.jsonLd[0] : head.jsonLd,
    ).replace(/</g, "\\u003c");
    const script = `<script type="application/ld+json" id="seo-jsonld">${json}</script>`;
    out = out.replace("</head>", `    ${script}\n  </head>`);
  }
  return out;
}

for (const route of ROUTES) {
  const { html, head } = render(route);
  let page = upsertHead(template, head);
  page = page.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );
  const outPath = path.join(publicDir, route.replace(/^\//, ""), "index.html");
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, page);
  console.log("prerendered", route, "->", path.relative(root, outPath));
}
