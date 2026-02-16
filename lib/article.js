// Shared article layout and data for SEO pages
import Head from "next/head";

// ============================================================
// Article Layout Component
// ============================================================
export function ArticleLayout({ title, description, canonical, petType, food, safety, children }) {
  const safetyColors = {
    toxic: { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b", badge: "#dc2626", icon: "🚫", label: "DANGEROUS" },
    caution: { bg: "#fffbeb", border: "#fcd34d", text: "#92400e", badge: "#d97706", icon: "⚠️", label: "USE CAUTION" },
    safe: { bg: "#f0fdf4", border: "#86efac", text: "#166534", badge: "#16a34a", icon: "✅", label: "SAFE" },
  };
  const s = safetyColors[safety] || safetyColors.caution;
  const petEmoji = petType === "dog" ? "🐕" : "🐈";
  const siteUrl = "https://canmypeteat.app";

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
          <a href="/" style={{ fontSize: "14px", color: "#38bdf8", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(56,189,248,0.3)", background: "rgba(56,189,248,0.1)" }}>
            🔍 Check Ingredients
          </a>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: "720px", margin: "0 auto", padding: "32px 20px 80px" }}>
          {/* Safety Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "100px", background: `${s.badge}22`, border: `1px solid ${s.badge}44`, marginBottom: "20px" }}>
            <span style={{ fontSize: "18px" }}>{s.icon}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: s.badge, letterSpacing: "0.5px" }}>{s.label} FOR {petType === "dog" ? "DOGS" : "CATS"}</span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px 0", color: "#f8fafc" }}>
            {petEmoji} Can My {petType === "dog" ? "Dog" : "Cat"} Eat {food}?
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#94a3b8", margin: "0 0 32px 0" }}>
            {description}
          </p>

          {/* Quick Answer Box */}
          <div style={{ padding: "24px", borderRadius: "16px", background: `${s.badge}11`, border: `2px solid ${s.badge}33`, marginBottom: "32px" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: s.badge, marginBottom: "8px", letterSpacing: "0.5px" }}>⚡ QUICK ANSWER</div>
            {children}
          </div>

          {/* CTA */}
          <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", textAlign: "center", marginTop: "40px" }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>🔍</div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#e0f2fe" }}>Check Your Pet Food&apos;s Full Ingredient List</h3>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#94a3b8" }}>Paste any ingredient list and get an instant safety report</p>
            <a href="/" style={{ display: "inline-block", padding: "14px 32px", borderRadius: "12px", background: "linear-gradient(135deg, #38bdf8, #818cf8)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
              Try CanMyPetEat — It&apos;s Free
            </a>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: "32px", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", color: "#475569", lineHeight: 1.6, textAlign: "center" }}>
            ⚕️ This article is for informational purposes only. If your pet has eaten something toxic, contact your vet immediately or call ASPCA Poison Control: <strong style={{ color: "#94a3b8" }}>(888) 426-4435</strong>
          </div>
        </article>
      </div>
    </>
  );
}

// Helper component for article body content
export function ArticleBody({ quickAnswer, details, symptoms, whatToDo, safeAlternatives, faqs }) {
  return (
    <>
      <div style={{ fontSize: "16px", lineHeight: 1.8, color: "#e2e8f0" }}>{quickAnswer}</div>

      {details && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 12px 0", color: "#f8fafc" }}>The Details</h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#cbd5e1" }}>{details}</div>
        </div>
      )}

      {symptoms && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f87171", margin: "0 0 10px 0" }}>🚨 Symptoms to Watch For</h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#fca5a5" }}>{symptoms}</div>
        </div>
      )}

      {whatToDo && (
        <div style={{ marginTop: "28px", padding: "20px", borderRadius: "12px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#38bdf8", margin: "0 0 10px 0" }}>🩺 What To Do</h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#7dd3fc" }}>{whatToDo}</div>
        </div>
      )}

      {safeAlternatives && (
        <div style={{ marginTop: "28px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e", margin: "0 0 10px 0" }}>✅ Safe Alternatives</h3>
          <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#86efac" }}>{safeAlternatives}</div>
        </div>
      )}

      {faqs && faqs.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 16px 0", color: "#f8fafc" }}>Frequently Asked Questions</h2>
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
