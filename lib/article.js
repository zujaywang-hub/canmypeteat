// Shared article layout and data for SEO pages
import { useState, useEffect } from "react";
import Head from "next/head";
import CN from "./cn";

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
    toxic: { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b", badge: "#dc2626", icon: "🚫", label: isCn ? "危險" : "DANGEROUS", labelFull: isCn ? "危險" : "DANGEROUS" },
    caution: { bg: "#fffbeb", border: "#fcd34d", text: "#92400e", badge: "#d97706", icon: "⚠️", label: isCn ? "注意" : "USE CAUTION", labelFull: isCn ? "需注意" : "USE CAUTION" },
    safe: { bg: "#f0fdf4", border: "#86efac", text: "#166534", badge: "#16a34a", icon: "✅", label: isCn ? "安全" : "SAFE", labelFull: isCn ? "安全" : "SAFE" },
  };
  const s = safetyColors[safety] || safetyColors.caution;
  const petEmoji = petType === "dog" ? "🐕" : "🐈";
  const siteUrl = "https://canmypeteat.app";

  const petLabel = petType === "dog" ? (isCn ? "狗狗" : "DOGS") : (isCn ? "貓咪" : "CATS");
  const foodDisplay = (isCn && cnData) ? cnData.d : food;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": { "@type": "Organization", "name": "CanMyPetEat" },
    "publisher": { "@type": "Organization", "name": "CanMyPetEat", "url": siteUrl },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical ? `${siteUrl}${canonical}` : siteUrl },
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
      </Head>

      <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'DM Sans', sans-serif", color: "#e2e8f0" }}>
        {/* Nav */}
        <nav style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "720px", margin: "0 auto" }}>
          <a href="/" style={{ textDecoration: "none", color: "#f1f5f9", fontFamily: "'Fraunces', serif", fontSize: "20px", fontWeight: 700 }}>
            🛡️ CanMyPetEat
          </a>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={toggleLang} style={{ fontSize: "12px", color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              {isCn ? "EN" : "中文"}
            </button>
            <a href="/" style={{ fontSize: "14px", color: "#38bdf8", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.1)" }}>
              🔍 {isCn ? "檢查成分" : "Check Ingredients"}
            </a>
          </div>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: "720px", margin: "0 auto", padding: "32px 20px 80px" }}>
          {/* Safety Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "100px", background: `${s.badge}22`, border: `1px solid ${s.badge}44`, marginBottom: "20px" }}>
            <span style={{ fontSize: "18px" }}>{s.icon}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: s.badge, letterSpacing: "0.5px" }}>
              {isCn ? `對${petLabel}${s.labelFull}` : `${s.label} FOR ${petLabel}`}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px 0", color: "#f8fafc" }}>
            {petEmoji} {isCn
              ? `${petType === "dog" ? "狗狗" : "貓咪"}可以吃${foodDisplay}嗎？`
              : `Can My ${petType === "dog" ? "Dog" : "Cat"} Eat ${food}?`
            }
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 32px 0" }}>
            {(isCn && cnData) ? cnData.desc : description}
          </p>

          {/* Quick Answer Box */}
          <div style={{ padding: "24px", borderRadius: "16px", background: `${s.badge}11`, border: `2px solid ${s.badge}33`, marginBottom: "32px" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: s.badge, marginBottom: "8px", letterSpacing: "0.5px" }}>
              {isCn ? "⚡ 快速解答" : "⚡ QUICK ANSWER"}
            </div>
            {/* Pass isCn and cnData to children */}
            {typeof children === 'object' && children.props ? 
              <ArticleBody {...children.props} isCn={isCn} cnData={cnData} /> : children}
          </div>

          {/* CTA */}
          <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", textAlign: "center", marginTop: "40px" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>🔍</div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#e0f2fe" }}>
              {isCn ? "檢查你的寵物食品完整成分表" : "Check Your Pet Food\u0027s Full Ingredient List"}
            </h3>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#94a3b8" }}>
              {isCn ? "貼上任何成分表，立即獲得安全報告" : "Paste any ingredient list and get an instant safety report"}
            </p>
            <a href="/" style={{ display: "inline-block", padding: "14px 32px", borderRadius: "12px", background: "linear-gradient(135deg, #38bdf8, #818cf8)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
              {isCn ? "免費試用 CanMyPetEat" : "Try CanMyPetEat \u2014 It\u0027s Free"}
            </a>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: "32px", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", color: "#475569", lineHeight: 1.6, textAlign: "center" }}>
            {isCn
              ? <>⚕️ 本文僅供參考。如果您的寵物誤食有毒物品，請立即聯繫獸醫或撥打 ASPCA 毒物控制中心：<strong style={{ color: "#94a3b8" }}>(888) 426-4435</strong></>
              : <>⚕️ This article is for informational purposes only. If your pet has eaten something toxic, contact your vet immediately or call ASPCA Poison Control: <strong style={{ color: "#94a3b8" }}>(888) 426-4435</strong></>
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
            {isCn ? "詳細說明" : "The Details"}
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#cbd5e1" }}>{details}</div>
        </div>
      )}

      {symptoms && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f87171", margin: "0 0 10px 0" }}>
            {isCn ? "🚨 注意症狀" : "🚨 Symptoms to Watch For"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#fca5a5" }}>
            {(isCn && cnData && cnData.sym) ? cnData.sym : symptoms}
          </div>
        </div>
      )}

      {whatToDo && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#38bdf8", margin: "0 0 10px 0" }}>
            {isCn ? "🩺 該怎麼做" : "🩺 What To Do"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#7dd3fc" }}>{whatToDo}</div>
        </div>
      )}

      {safeAlternatives && (
        <div style={{ marginTop: "28px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e", margin: "0 0 10px 0" }}>
            {isCn ? "✅ 安全替代品" : "✅ Safe Alternatives"}
          </h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#86efac" }}>{safeAlternatives}</div>
        </div>
      )}

      {faqs && faqs.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px 0", color: "#f8fafc" }}>
            {isCn ? "常見問題" : "Frequently Asked Questions"}
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
