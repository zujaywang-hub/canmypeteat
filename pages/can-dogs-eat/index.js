import { useState, useEffect } from "react";
import Head from "next/head";
import { DOG_FOODS } from "../../lib/articles-data";

const safetyConfig = {
  safe: { icon: "\u2705", color: "#22c55e", bg: "#22c55e18", border: "#22c55e33", label: "Safe", labelCn: "\u5b89\u5168" },
  caution: { icon: "\u26a0\ufe0f", color: "#eab308", bg: "#eab30818", border: "#eab30833", label: "Caution", labelCn: "\u6ce8\u610f" },
  toxic: { icon: "\ud83d\udeab", color: "#ef4444", bg: "#ef444418", border: "#ef444433", label: "Dangerous", labelCn: "\u5371\u96aa" },
};

export default function CanDogsEatIndex() {
  const [isCn, setIsCn] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("canmypeteat_lang");
    if (saved === "cn") setIsCn(true);
  }, []);

  const toggleLang = () => {
    const next = !isCn;
    setIsCn(next);
    localStorage.setItem("canmypeteat_lang", next ? "cn" : "en");
  };

  const filtered = filter === "all" ? DOG_FOODS : DOG_FOODS.filter(a => a.safety === filter);
  const safeCount = DOG_FOODS.filter(a => a.safety === "safe").length;
  const cautionCount = DOG_FOODS.filter(a => a.safety === "caution").length;
  const toxicCount = DOG_FOODS.filter(a => a.safety === "toxic").length;

  const siteUrl = "https://canmypeteat.app";
  const title = isCn ? "\u72d7\u72d7\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f\u5b8c\u6574\u98df\u7269\u5b89\u5168\u6307\u5357 | CanMyPetEat" : "What Can Dogs Eat? Complete Food Safety Guide | CanMyPetEat";
  const description = isCn
    ? "\u5b8c\u6574\u7684\u72d7\u72d7\u98df\u7269\u5b89\u5168\u6307\u5357\u3002\u67e5\u770b 84 \u7a2e\u98df\u7269\u5c0d\u72d7\u72d7\u662f\u5426\u5b89\u5168\u3001\u9700\u8b39\u614e\u6216\u6709\u6bd2\u3002"
    : "Complete dog food safety guide. Check if 84+ foods are safe, need caution, or are toxic for your dog.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "What Can Dogs Eat?",
    "description": description,
    "url": `${siteUrl}/can-dogs-eat`,
    "publisher": { "@type": "Organization", "name": "CanMyPetEat", "url": siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Can Dogs Eat", "item": `${siteUrl}/can-dogs-eat` },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}/can-dogs-eat`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/can-dogs-eat`} />
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
            <span style={{ color: "#94a3b8" }}>{isCn ? "\u72d7\u72d7\u53ef\u4ee5\u5403\u4ec0\u9ebc" : "Can Dogs Eat"}</span>
          </div>

          {/* Header */}
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 12px 0", color: "#f8fafc" }}>
            \ud83d\udc36 {isCn ? "\u72d7\u72d7\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Dogs Eat?"}
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 32px 0" }}>
            {isCn
              ? `\u67e5\u770b ${DOG_FOODS.length} \u7a2e\u98df\u7269\u5c0d\u72d7\u72d7\u662f\u5426\u5b89\u5168\u3002\u9ede\u64ca\u4efb\u4f55\u98df\u7269\u67e5\u770b\u8a73\u7d30\u8aaa\u660e\u3001\u98df\u7528\u5efa\u8b70\u548c\u6ce8\u610f\u4e8b\u9805\u3002`
              : `Browse ${DOG_FOODS.length} foods to check if they're safe for your dog. Click any food for detailed safety info, serving tips, and what to watch for.`}
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ padding: "12px 20px", borderRadius: "12px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", flex: "1", minWidth: "100px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#22c55e" }}>{safeCount}</div>
              <div style={{ fontSize: "12px", color: "#86efac", fontWeight: 600 }}>\u2705 {isCn ? "\u5b89\u5168" : "SAFE"}</div>
            </div>
            <div style={{ padding: "12px 20px", borderRadius: "12px", background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)", flex: "1", minWidth: "100px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#eab308" }}>{cautionCount}</div>
              <div style={{ fontSize: "12px", color: "#fde047", fontWeight: 600 }}>\u26a0\ufe0f {isCn ? "\u6ce8\u610f" : "CAUTION"}</div>
            </div>
            <div style={{ padding: "12px 20px", borderRadius: "12px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", flex: "1", minWidth: "100px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#ef4444" }}>{toxicCount}</div>
              <div style={{ fontSize: "12px", color: "#fca5a5", fontWeight: 600 }}>\ud83d\udeab {isCn ? "\u5371\u96aa" : "TOXIC"}</div>
            </div>
          </div>

          {/* Filter */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
            {[
              { key: "all", label: isCn ? "\u5168\u90e8" : "All", count: DOG_FOODS.length },
              { key: "safe", label: isCn ? "\u5b89\u5168" : "Safe", count: safeCount },
              { key: "caution", label: isCn ? "\u6ce8\u610f" : "Caution", count: cautionCount },
              { key: "toxic", label: isCn ? "\u5371\u96aa" : "Toxic", count: toxicCount },
            ].map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{
                padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                background: filter === f.key ? "rgba(56,189,248,0.15)" : "rgba(255,255,255,0.03)",
                border: filter === f.key ? "1px solid rgba(56,189,248,0.4)" : "1px solid rgba(255,255,255,0.08)",
                color: filter === f.key ? "#38bdf8" : "#94a3b8",
              }}>
                {f.label} ({f.count})
              </button>
            ))}
          </div>

          {/* Food Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
            {filtered.map(item => {
              const s = safetyConfig[item.safety];
              return (
                <a key={item.slug} href={`/can-dogs-eat/${item.slug}`} style={{
                  display: "flex", alignItems: "center", gap: "12px", padding: "16px",
                  borderRadius: "12px", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none",
                  transition: "all 0.15s ease",
                }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{s.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#f1f5f9" }}>{item.food}</div>
                    <div style={{ fontSize: "12px", color: s.color, fontWeight: 600, marginTop: "2px" }}>
                      {isCn ? s.labelCn : s.label}
                    </div>
                  </div>
                  <span style={{ fontSize: "14px", color: "#475569" }}>\u203a</span>
                </a>
              );
            })}
          </div>

          {/* Cross-link to cats */}
          <div style={{ marginTop: "48px", padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udc31</div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#e0f2fe" }}>
              {isCn ? "\u4e5f\u6709\u990a\u8c93\u55ce\uff1f" : "Have a Cat Too?"}
            </h3>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#94a3b8" }}>
              {isCn ? "\u67e5\u770b\u8c93\u54aa\u7684\u5b8c\u6574\u98df\u7269\u5b89\u5168\u6307\u5357" : "Check our complete cat food safety guide"}
            </p>
            <a href="/can-cats-eat" style={{ display: "inline-block", padding: "12px 28px", borderRadius: "10px", background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>
              {isCn ? "\u8c93\u54aa\u53ef\u4ee5\u5403\u4ec0\u9ebc\uff1f" : "What Can Cats Eat?"} \u2192
            </a>
          </div>

          {/* Safety articles */}
          <div style={{ marginTop: "24px", padding: "24px", borderRadius: "16px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>\ud83d\udea8</div>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", color: "#fca5a5" }}>
              {isCn ? "\u7dca\u6025\u6307\u5357" : "Emergency Guides"}
            </h3>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { href: "/pet-safety/dog-ate-chocolate", label: isCn ? "\u72d7\u5403\u4e86\u5de7\u514b\u529b" : "Dog Ate Chocolate" },
                { href: "/pet-safety/dog-ate-grapes", label: isCn ? "\u72d7\u5403\u4e86\u8461\u8404" : "Dog Ate Grapes" },
                { href: "/pet-safety/dog-ate-xylitol", label: isCn ? "\u72d7\u5403\u4e86\u6728\u7cd6\u9187" : "Dog Ate Xylitol" },
                { href: "/pet-safety/foods-toxic-to-dogs", label: isCn ? "\u6709\u6bd2\u98df\u7269\u6e05\u55ae" : "Toxic Foods List" },
              ].map(link => (
                <a key={link.href} href={link.href} style={{ padding: "8px 14px", borderRadius: "8px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#fca5a5", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
