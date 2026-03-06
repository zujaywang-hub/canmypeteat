// Shared article layout and data for SEO pages
import { useState, useEffect } from "react";
import Head from "next/head";
import CN from "./cn";
import { getRelatedArticles } from "./articles-data";

// ============================================================
// Article Layout Component - Bilingual (EN/CN)
// ============================================================
export function ArticleLayout({ title, description, canonical, petType, food, safety, children }) {
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

  // Look up CN data for this food
  const foodKey = food ? food.toLowerCase().replace(/[()]/g,"").replace("brand","").trim() : "";
  // Try multiple keys for CN lookup
  const cnData = CN[foodKey] || CN[foodKey.split(" ")[0]] || null;

  const safetyColors = {
    toxic: { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b", badge: "#dc2626", icon: "\ud83d\udeab", label: isCn ? "\u5371\u96aa" : "DANGEROUS", labelFull: isCn ? "\u5371\u96aa" : "DANGEROUS" },
    caution: { bg: "#fffbeb", border: "#fcd34d", text: "#92400e", badge: "#d97706", icon: "\u26a0\ufe0f", label: isCn ? "\u6ce8\u610f" : "USE CAUTION", labelFull: isCn ? "\u9700\u6ce8\u610f" : "USE CAUTION" },
    safe: { bg: "#f0fdf4", border: "#86efac", text: "#166534", badge: "#16a34a", icon: "\u2705", label: isCn ? "\u5b89\u5168" : "SAFE", labelFull: isCn ? "\u5b89\u5168" : "SAFE" },
  };
  const s = safetyColors[safety] || safetyColors.caution;
  const petEmoji = petType === "dog" ? "\ud83d\udc15" : "\ud83d\udc08";
  const siteUrl = "https://canmypeteat.app";

  const petLabel = petType === "dog" ? (isCn ? "\u72d7\u72d7" : "DOGS") : (isCn ? "\u8c93\u54aa" : "CATS");
  const foodDisplay = (isCn && cnData) ? cnData.d : food;

  // Related articles
  const relatedArticles = canonical ? getRelatedArticles(canonical, petType, 6) : [];

  // Breadcrumb data
  const categoryPath = canonical ? canonical.split("/").filter(Boolean)[0] : "";
  const categoryLabels = {
    "can-dogs-eat": { en: "Can Dogs Eat", cn: "\u72d7\u72d7\u98f2\u98df" },
    "can-cats-eat": { en: "Can Cats Eat", cn: "\u8c93\u54aa\u98f2\u98df" },
    "pet-safety": { en: "Pet Safety", cn: "\u5bf5\u7269\u5b89\u5168" },
    "brand-review": { en: "Brand Reviews", cn: "\u54c1\u724c\u8a55\u6e2c" },
  };
  const categoryLabel = categoryLabels[categoryPath] || { en: categoryPath, cn: categoryPath };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": { "@type": "Organization", "name": "CanMyPetEat" },
    "publisher": { "@type": "Organization", "name": "CanMyPetEat", "url": siteUrl },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical ? `${siteUrl}${canonical}` : siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": categoryLabel.en, "item": `${siteUrl}/${categoryPath}` },
      { "@type": "ListItem", "position": 3, "name": food },
    ],
  };

  const faqSchema = children?.props?.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": children.props.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : null;

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="WNU3XQOEJ7qSnToDnIesJHmelwYfWrMKoiOV_KxiHbU" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}${canonical}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}${canonical}`} />
        <meta name="twitter:card" content="summary" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'DM Sans', sans-serif", color: "#e2e8f0" }}>
        {/* Nav */}
        <nav style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "720px", margin: "0 auto" }}>
          <a href="/" style={{ textDecoration: "none", color: "#f1f5f9", fontFamily: "'Fraunces', serif", fontSize: "20px", fontWeight: 700 }}>
            \ud83d\udee1\ufe0f CanMyPetEat
          </a>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={toggleLang} style={{ fontSize: "12px", color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              {isCn ? "EN" : "\u4e2d\u6587"}
            </button>
            {isCn && (
              <a href={`https://translate.google.com/translate?sl=en&tl=zh-TW&u=${siteUrl}${canonical}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#fbbf24", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)", borderRadius: "6px", padding: "6px 10px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                \ud83c\udf10 \u7ffb\u8b6f\u5168\u9801
              </a>
            )}
            <a href="/" style={{ fontSize: "14px", color: "#38bdf8", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.1)" }}>
              \ud83d\udd0d {isCn ? "\u6aa2\u67e5\u6210\u5206" : "Check Ingredients"}
            </a>
          </div>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: "720px", margin: "0 auto", padding: "32px 20px 80px" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>{isCn ? "\u9996\u9801" : "Home"}</a>
            <span style={{ margin: "0 8px" }}>/</span>
            <a href={`/${categoryPath}`} style={{ color: "#64748b", textDecoration: "none" }}>{isCn ? categoryLabel.cn : categoryLabel.en}</a>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#94a3b8" }}>{foodDisplay}</span>
          </div>

          {/* Safety Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "100px", background: `${s.badge}22`, border: `1px solid ${s.badge}44`, marginBottom: "20px" }}>
            <span style={{ fontSize: "18px" }}>{s.icon}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: s.badge, letterSpacing: "0.5px" }}>
              {isCn ? `\u5c0d${petLabel}${s.labelFull}` : `${s.label} FOR ${petLabel}`}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px 0", color: "#f8fafc" }}>
            {petEmoji} {isCn
              ? `${petType === "dog" ? "\u72d7\u72d7" : "\u8c93\u54aa"}\u53ef\u4ee5\u5403${foodDisplay}\u55ce\uff1f`
              : `Can My ${petType === "dog" ? "Dog" : "Cat"} Eat ${food}?`
            }
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 32px 0" }}>
            {(isCn && cnData) ? cnData.desc : description}
          </p>

          {/* Quick Answer Box */}
          <div style={{ padding: "24px", borderRadius: "16px", background: `${s.badge}11`, border: `2px solid ${s.badge}33`, marginBottom: "32px" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: s.badge, marginBottom: "8px", letterSpacing: "0.5px" }}>
              {isCn ? "\u26a1 \u5feb\u901f\u89e3\u7b54" : "\u26a1 QUICK ANSWER"}
            </div>
            {/* Pass isCn and cnData to children */}
            {typeof children === 'object' && children.props ?
              <ArticleBody {...children.props} isCn={isCn} cnData={cnData} /> : children}
          </div>

          {/* CTA */}
          <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", textAlign: "center", marginTop: "40px" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>\ud83d\udd0d</div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#e0f2fe" }}>
              {isCn ? "\u6aa2\u67e5\u4f60\u7684\u5bf5\u7269\u98df\u54c1\u5b8c\u6574\u6210\u5206\u8868" : "Check Your Pet Food\u0027s Full Ingredient List"}
            </h3>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#94a3b8" }}>
              {isCn ? "\u8cbc\u4e0a\u4efb\u4f55\u6210\u5206\u8868\uff0c\u7acb\u5373\u7372\u5f97\u5b89\u5168\u5831\u544a" : "Paste any ingredient list and get an instant safety report"}
            </p>
            <a href="/" style={{ display: "inline-block", padding: "14px 32px", borderRadius: "12px", background: "linear-gradient(135deg, #38bdf8, #818cf8)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
              {isCn ? "\u514d\u8cbb\u8a66\u7528 CanMyPetEat" : "Try CanMyPetEat \u2014 It\u0027s Free"}
            </a>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: "40px", padding: "28px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 16px 0" }}>
                \ud83d\udcd6 {isCn ? "\u76f8\u95dc\u6587\u7ae0" : "Related Articles"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
                {relatedArticles.map((item, i) => {
                  const rs = safetyColors[item.safety] || safetyColors.caution;
                  return (
                    <a key={i} href={item.href} style={{
                      display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px",
                      borderRadius: "10px", background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}>
                      <span style={{ fontSize: "16px", flexShrink: 0 }}>{rs.icon}</span>
                      <span style={{ fontSize: "14px", fontWeight: 500, color: "#e2e8f0" }}>{item.food}</span>
                    </a>
                  );
                })}
              </div>

              {/* Category index link */}
              {categoryPath && (
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  <a href={`/${categoryPath}`} style={{ fontSize: "14px", color: "#38bdf8", textDecoration: "none" }}>
                    {isCn ? `\u67e5\u770b\u6240\u6709${categoryLabel.cn}\u6587\u7ae0 \u2192` : `View all ${categoryLabel.en} articles \u2192`}
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          <div style={{ marginTop: "32px", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", color: "#475569", lineHeight: 1.6, textAlign: "center" }}>
            {isCn
              ? <>\u2695\ufe0f \u672c\u6587\u50c5\u4f9b\u53c3\u8003\u3002\u5982\u679c\u60a8\u7684\u5bf5\u7269\u8aa4\u98df\u6709\u6bd2\u7269\u54c1\uff0c\u8acb\u7acb\u5373\u806f\u7e6b\u7378\u91ab\u6216\u64a5\u6253 ASPCA \u6bd2\u7269\u63a7\u5236\u4e2d\u5fc3\uff1a<strong style={{ color: "#94a3b8" }}>(888) 426-4435</strong></>
              : <>\u2695\ufe0f This article is for informational purposes only. If your pet has eaten something toxic, contact your vet immediately or call ASPCA Poison Control: <strong style={{ color: "#94a3b8" }}>(888) 426-4435</strong></>
            }
          </div>
        </article>
      </div>
    </>
  );
}

// Helper component for article body content
export function ArticleBody({ quickAnswer, details, symptoms, whatToDo, safeAlternatives, faqs, isCn, cnData }) {
  return (
    <>
      <div style={{ fontSize: "16px", lineHeight: 1.8, color: "#e2e8f0" }}>
        {(isCn && cnData) ? cnData.desc : quickAnswer}
      </div>

      {details && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 12px 0", color: "#f8fafc" }}>
            {isCn ? "\u8a73\u7d30\u8aaa\u660e" : "The Details"}
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#cbd5e1" }}>{details}</div>
        </div>
      )}

      {symptoms && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f87171", margin: "0 0 10px 0" }}>
            {isCn ? "\ud83d\udea8 \u6ce8\u610f\u75c7\u72c0" : "\ud83d\udea8 Symptoms to Watch For"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#fca5a5" }}>
            {(isCn && cnData && cnData.sym) ? cnData.sym : symptoms}
          </div>
        </div>
      )}

      {whatToDo && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#38bdf8", margin: "0 0 10px 0" }}>
            {isCn ? "\ud83e\ude7a \u8a72\u600e\u9ebc\u505a" : "\ud83e\ude7a What To Do"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#7dd3fc" }}>{whatToDo}</div>
        </div>
      )}

      {safeAlternatives && (
        <div style={{ marginTop: "28px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e", margin: "0 0 10px 0" }}>
            {isCn ? "\u2705 \u5b89\u5168\u66ff\u4ee3\u54c1" : "\u2705 Safe Alternatives"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#86efac" }}>{safeAlternatives}</div>
        </div>
      )}

      {faqs && faqs.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px 0", color: "#f8fafc" }}>
            {isCn ? "\u5e38\u898b\u554f\u984c" : "Frequently Asked Questions"}
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: "16px", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 600, color: "#e2e8f0" }}>{faq.q}</h4>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7, color: "#94a3b8" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
