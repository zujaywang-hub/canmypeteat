import { useState, useEffect } from "react";
import Head from "next/head";
import { BRAND_REVIEWS } from "../../lib/articles-data";

const safetyConfig = {
  safe: { icon: "\u2705", color: "#22c55e", label: "Recommended", labelCn: "\u63a8\u85a6" },
  caution: { icon: "\u26a0\ufe0f", color: "#eab308", label: "Mixed", labelCn: "\u4e2d\u7b49" },
};

export default function BrandReviewIndex() {
  const [isCn, setIsCn] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("canmypeteat_lang");
    if (saved === "cn") setIsCn(true);
  }, []);

  const toggleLang = () => {
    const next = !isCn;
    setIsCn(next);
    localStorage.setItem("canmypeteat_lang", next ? "cn" : "en");
  };

  const siteUrl = "https://canmypeteat.app";
  const title = isCn ? "\u5bf5\u7269\u98df\u54c1\u54c1\u724c\u8a55\u6e2c | CanMyPetEat" : "Pet Food Brand Reviews & Ingredient Analysis | CanMyPetEat";
  const description = isCn
    ? "\u5bf5\u7269\u98df\u54c1\u54c1\u724c\u6210\u5206\u5206\u6790\u8207\u8a55\u6e2c\u3002\u5305\u62ec Royal Canin\u3001Orijen\u3001Blue Buffalo \u7b49\u71b1\u9580\u54c1\u724c\u3002"
    : "In-depth pet food brand reviews with ingredient analysis. Including Royal Canin, Orijen, Blue Buffalo, and more.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pet Food Brand Reviews",
    "description": description,
    "url": `${siteUrl}/brand-review`,
    "publisher": { "@type": "Organization", "name": "CanMyPetEat", "url": siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Brand Reviews", "item": `${siteUrl}/brand-review` },
    ],
  };

  const recommended = BRAND_REVIEWS.filter(b => b.safety === "safe");
  const mixed = BRAND_REVIEWS.filter(b => b.safety === "caution");

  const renderCard = (item) => {
    const s = safetyConfig[item.safety];
    const petIcon = item.petType === "cat" ? "\ud83d\udc31" : "\ud83d\udc36";
    return (
      <a key={item.slug} href={`/brand-review/${item.slug}`} style={{
        display: "flex", alignItems: "center", gap: "14px", padding: "20px",
        borderRadius: "12px", background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none",
        transition: "all 0.15s ease",
      }}>
        <span style={{ fontSize: "22px", flexShrink: 0 }}>{s.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "16px", fontWeight: 600, color: "#f1f5f9" }}>{item.food}</div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "4px" }}>
            <span style={{ fontSize: "12px", color: s.color, fontWeight: 600 }}>
              {isCn ? s.labelCn : s.label}
            </span>
            <span style={{ fontSize: "12px", color: "#64748b" }}>{petIcon} {item.petType === "cat" ? (isCn ? "\u8c93\u7ce7" : "Cat Food") : (isCn ? "\u72d7\u7ce7" : "Dog Food")}</span>
          </div>
        </div>
        <span style={{ fontSize: "14px", color: "#475569" }}>\u203a</span>
      </a>
    );
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}/brand-review`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/brand-review`} />
        <meta name="twitter:card" content="summary" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'DM Sans', sans-serif", color: "#e2e8f0" }}>
        {/* Nav */}
        <nav style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "900px", margin: "0 auto" }}>
          <a href="/" style={{ textDecoration: "none", color: "#f1f5f9", fontFamily: "'Fraunces', serif", fontSize: "20px", fontWeight: 700 }}>
            \ud83d\udee1\ufe0f CanMyPetEat
          </a>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={toggleLang} style={{ fontSize: "12px", color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              {isCn ? "EN" : "\u4e2d\u6587"}
            </button>
            <a href="/" style={{ fontSize: "14px", color: "#38bdf8", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.1)" }}>
              \ud83d\udd0d {isCn ? "\u6aa2\u67e5\u6210\u5206" : "Check Ingredients"}
            </a>
          </div>
        </nav>

        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 20px 80px" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>{isCn ? "\u9996\u9801" : "Home"}</a>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#94a3b8" }}>{isCn ? "\u54c1\u724c\u8a55\u6e2c" : "Brand Reviews"}</span>
          </div>

          {/* Header */}
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 12px 0", color: "#f8fafc" }}>
            \u2b50 {isCn ? "\u5bf5\u7269\u98df\u54c1\u54c1\u724c\u8a55\u6e2c" : "Pet Food Brand Reviews"}
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 40px 0" }}>
            {isCn
              ? `\u6df1\u5165\u5206\u6790 ${BRAND_REVIEWS.length} \u500b\u71b1\u9580\u5bf5\u7269\u98df\u54c1\u54c1\u724c\u7684\u6210\u5206\u3001\u512a\u7f3a\u9ede\u548c\u8a55\u50f9\u3002`
              : `In-depth ingredient analysis and ratings for ${BRAND_REVIEWS.length} popular pet food brands.`}
          </p>

          {/* Recommended */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#22c55e", margin: "0 0 16px 0" }}>
            \u2705 {isCn ? "\u63a8\u85a6\u54c1\u724c" : "Recommended Brands"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px", marginBottom: "36px" }}>
            {recommended.map(renderCard)}
          </div>

          {/* Mixed */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#eab308", margin: "0 0 16px 0" }}>
            \u26a0\ufe0f {isCn ? "\u4e2d\u7b49\u54c1\u724c" : "Mixed Reviews"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px", marginBottom: "40px" }}>
            {mixed.map(renderCard)}
          </div>

          {/* Cross-links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginTop: "32px" }}>
            <a href="/can-dogs-eat" style={{ padding: "24px", borderRadius: "16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udc36</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#38bdf8" }}>{isCn ? "\u72d7\u72d7\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Dogs Eat?"}</div>
            </a>
            <a href="/can-cats-eat" style={{ padding: "24px", borderRadius: "16px", background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udc31</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#c084fc" }}>{isCn ? "\u8c93\u54aa\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Cats Eat?"}</div>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
