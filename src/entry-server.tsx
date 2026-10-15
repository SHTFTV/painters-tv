import {cities,journal} from "./pages/network-pages";
import { renderToString } from "react-dom/server";
import App from "./App";
import { HeadCollectorProvider, type HeadData } from "@/components/seo";

export const ROUTES = [
"/", "/cities", "/services", "/listings", "/pricing", "/estimate", "/list-your-business", "/journal", "/market-with-us", "/guest-posts", "/privacy", "/404", ...cities.map(c=>"/city/"+c.slug), ...journal.map(j=>"/journal/"+j.slug),
  "/services/interior-painting",
  "/services/exterior-painting",
  "/services/epoxy-flooring",
  "/services/commercial-painting",
  "/services/cabinet-refinishing",
  "/services/deck-fence-staining",
  "/services/wallpaper-removal",
  "/services/pressure-washing",
  "/about",
];

export function render(url: string): { html: string; head: HeadData } {
  const head: HeadData = { tags: [], jsonLd: [] };
  const html = renderToString(
    <HeadCollectorProvider value={head}>
      <App ssrPath={url} />
    </HeadCollectorProvider>,
  );
  return { html, head };
}
