import { useState, useEffect } from "react";
import Head from "next/head";
import { PET_SAFETY } from "../../lib/articles-data";

export default function PetSafetyIndex() {
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

  const dogArticles = PET_SAFETY.filter(a => a.petType === "dog");
  const catArticles = PET_SAFETY.filter(a => a.petType === "cat");

  const siteUrl = "https://canmypeteat.app";
  const title = isCn ? "\u5bf5\u7269\u98df\u7269\u5b89\u5168\u7dca\u6025\u6307\u5357 | CanMyPetEat" : "Pet Food Safety & Emergency Guides | CanMyPetEat";
  const description = isCn
    ? "\u5bf5\u7269\u98df\u7269\u5b89\u5168\u7dca\u6025\u6307\u5357\u3002\u72d7\u72d7\u6216\u8c93\u54aa\u8aa4\u98df\u6709\u6bd2\u98df\u7269\u6642\u8a72\u600e\u9ebc\u8fa6\uff1f\u6709\u6bd2\u98df\u7269\u6e05\u55ae\u548c\u5b89\u5168\u6c34\u679c\u6307\u5357\u3002"
    : "Pet food safety emergency guides. What to do if your dog or cat ate something toxic. Toxic food lists and safe fruit guides.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pet Food Safety Guides",
    "description": description,
    "url": `${siteUrl}/pet-safety`,
    "publisher": { "@type": "Organization", "name": "CanMyPetEat", "url": siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Pet Safety", "item": `${siteUrl}/pet-safety` },
    ],
  };

  const renderCard = (item) => {
    const isSafe = item.safety === "safe";
    const icon = isSafe ? "\u2705" : "\ud83d\udea8";
    const color = isSafe ? "#22c55e" : "#ef4444";
    return (
      <a key={item.slug} href={`/pet-safety/${item.slug}`} style={{
        display: "flex", alignItems: "center", gap: "14px", padding: "18px",
        borderRadius: "12px", background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none",
        transition: "all 0.15s ease",
      }}>
        <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#f1f5f9" }}>{item.food}</div>
          <div style={{ fontSize: "12px", color, fontWeight: 600, marginTop: "2px" }}>
            {isSafe ? (isCn ? "\u5b89\u5168\u6307\u5357" : "Safety Guide") : (isCn ? "\u7dca\u6025\u6307\u5357" : "Emergency Guide")}
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
        <link rel="canonical" href={`${siteUrl}/pet-safety`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/pet-safety`} />
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
            <span style={{ color: "#94a3b8" }}>{isCn ? "\u5bf5\u7269\u5b89\u5168" : "Pet Safety"}</span>
          </div>

          {/* Header */}
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 12px 0", color: "#f8fafc" }}>
            \ud83d\udea8 {isCn ? "\u5bf5\u7269\u98df\u7269\u5b89\u5168\u6307\u5357" : "Pet Food Safety Guides"}
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 40px 0" }}>
            {isCn
              ? "\u5bf5\u7269\u8aa4\u98df\u6709\u6bd2\u98df\u7269\u6642\u7684\u7dca\u6025\u8655\u7406\u6307\u5357\uff0c\u4ee5\u53ca\u5b89\u5168\u98df\u7269\u6e05\u55ae\u3002"
              : "Emergency guides for when your pet eats something toxic, plus safe food lists to keep your pet healthy."}
          </p>

          {/* Dog Section */}
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f8fafc", margin: "0 0 16px 0" }}>
            \ud83d\udc36 {isCn ? "\u72d7\u72d7\u5b89\u5168\u6307\u5357" : "Dog Safety Guides"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px", marginBottom: "40px" }}>
            {dogArticles.map(renderCard)}
          </div>

          {/* Cat Section */}
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f8fafc", margin: "0 0 16px 0" }}>
            \ud83d\udc31 {isCn ? "\u8c93\u54aa\u5b89\u5168\u6307\u5357" : "Cat Safety Guides"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px", marginBottom: "40px" }}>
            {catArticles.map(renderCard)}
          </div>

          {/* Cross-links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginTop: "32px" }}>
            <a href="/can-dogs-eat" style={{ padding: "24px", borderRadius: "16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udc36</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#38bdf8" }}>{isCn ? "\u72d7\u72d7\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Dogs Eat?"}</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>{isCn ? "84 \u7a2e\u98df\u7269\u5b8c\u6574\u6307\u5357" : "84 foods complete guide"}</div>
            </a>
            <a href="/can-cats-eat" style={{ padding: "24px", borderRadius: "16px", background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udc31</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#c084fc" }}>{isCn ? "\u8c93\u54aa\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Cats Eat?"}</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>{isCn ? "60 \u7a2e\u98df\u7269\u5b8c\u6574\u6307\u5357" : "60 foods complete guide"}</div>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
