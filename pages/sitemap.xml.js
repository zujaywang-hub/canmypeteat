const SITE_URL = "https://canmypeteat.app";
const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/can-dogs-eat/chocolate", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/grapes", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/onions", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/garlic", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/chicken-bones", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/cheese", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/rice", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/bananas", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/eggs", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/peanut-butter", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/watermelon", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/apples", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/strawberries", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/avocado", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/carrots", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/blueberries", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/pork", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/popcorn", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/bacon", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/bread", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/pumpkin", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/sweet-potato", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/salmon", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/ham", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/mango", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/cucumber", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/pizza", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/potato", priority: "0.8", changefreq: "monthly" },
  { url: "/can-dogs-eat/tomato", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/tuna", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/chocolate", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/eggs", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/cheese", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/onions", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/chicken", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/rice", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/milk", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/banana", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/salmon", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/watermelon", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/garlic", priority: "0.8", changefreq: "monthly" },
  { url: "/can-cats-eat/pumpkin", priority: "0.8", changefreq: "monthly" },
];
function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
}
export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}
export default function Sitemap() { return null; }
