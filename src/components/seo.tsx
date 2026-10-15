import { useEffect, createContext, useContext } from "react";

type JsonLd = Record<string, unknown>;

interface SeoProps {
  noindex?: boolean;
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  ogType?: string;
  jsonLd?: JsonLd[];
}

export interface HeadTag {
  type: "title" | "meta" | "link";
  attr?: "name" | "property";
  key?: string;
  content?: string;
  text?: string;
}

export interface HeadData {
  tags: HeadTag[];
  jsonLd: JsonLd[];
}

const SITE_NAME = "Painters.tv";
const SITE_ORIGIN = "https://painters.tv";

const HeadCollectorContext = createContext<HeadData | null>(null);

export function HeadCollectorProvider({
  value,
  children,
}: {
  value: HeadData;
  children: React.ReactNode;
}) {
  return (
    <HeadCollectorContext.Provider value={value}>
      {children}
    </HeadCollectorContext.Provider>
  );
}

function buildHead({
  noindex = false,
  title,
  description,
  path,
  image,
  imageAlt,
  ogType = "website",
  jsonLd = [],
}: SeoProps): HeadData {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const url = `${SITE_ORIGIN}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_ORIGIN}${image}`
    : `${SITE_ORIGIN}/opengraph.jpg`;
  const tags: HeadTag[] = [
    { type: "title", text: fullTitle },
    { type: "meta", attr: "name", key: "description", content: description },
    {
      type: "meta",
      attr: "name",
      key: "robots",
      content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    },
    { type: "link", key: "canonical", content: url },
    { type: "meta", attr: "property", key: "og:site_name", content: SITE_NAME },
    { type: "meta", attr: "property", key: "og:title", content: fullTitle },
    {
      type: "meta",
      attr: "property",
      key: "og:description",
      content: description,
    },
    { type: "meta", attr: "property", key: "og:type", content: ogType },
    { type: "meta", attr: "property", key: "og:url", content: url },
    { type: "meta", attr: "property", key: "og:image", content: imageUrl },
    {
      type: "meta",
      attr: "property",
      key: "og:image:alt",
      content: imageAlt ?? description,
    },
    {
      type: "meta",
      attr: "name",
      key: "twitter:card",
      content: "summary_large_image",
    },
    { type: "meta", attr: "name", key: "twitter:title", content: fullTitle },
    {
      type: "meta",
      attr: "name",
      key: "twitter:description",
      content: description,
    },
    { type: "meta", attr: "name", key: "twitter:image", content: imageUrl },
    {
      type: "meta",
      attr: "name",
      key: "twitter:image:alt",
      content: imageAlt ?? description,
    },
  ];
  return { tags, jsonLd };
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo(props: SeoProps) {
  const collector = useContext(HeadCollectorContext);
  if (collector) {
    const { tags, jsonLd } = buildHead(props);
    collector.tags.push(...tags);
    collector.jsonLd.push(...jsonLd);
  }

  useEffect(() => {
    const { tags, jsonLd } = buildHead(props);
    for (const tag of tags) {
      if (tag.type === "title" && tag.text) {
        document.title = tag.text;
      } else if (tag.type === "meta" && tag.attr && tag.key && tag.content) {
        setMeta(tag.attr, tag.key, tag.content);
      } else if (tag.type === "link" && tag.key && tag.content) {
        setLink(tag.key, tag.content);
      }
    }

    const scriptId = "seo-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.textContent = JSON.stringify(
        jsonLd.length === 1 ? jsonLd[0] : jsonLd,
      );
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.noindex,
    props.title,
    props.description,
    props.path,
    props.image,
    props.imageAlt,
    props.ogType,
    props.jsonLd,
  ]);

  return null;
}
