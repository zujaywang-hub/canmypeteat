import { useState, useRef, useCallback } from "react";
import Head from "next/head";

// ============================================================
// CanMyPetEat - Pet Food Ingredient Safety Checker
// ============================================================

const INGREDIENT_DB = {
  toxic: [
    { name: "onion", display: "Onion", pets: ["dog", "cat"], severity: "high",
      description: "Contains thiosulphate which damages red blood cells, causing hemolytic anemia. Even small amounts over time are dangerous.",
      symptoms: "Vomiting, diarrhea, lethargy, pale gums, rapid breathing, dark urine" },
    { name: "garlic", display: "Garlic", pets: ["dog", "cat"], severity: "high",
      description: "5x more toxic than onions. Damages red blood cells and can cause life-threatening anemia.",
      symptoms: "Weakness, vomiting, breathlessness, collapse" },
    { name: "leek", display: "Leek", pets: ["dog", "cat"], severity: "high",
      description: "Allium family member. Toxic compounds damage red blood cells.",
      symptoms: "Vomiting, diarrhea, abdominal pain, anemia" },
    { name: "chive", display: "Chives", pets: ["dog", "cat"], severity: "high",
      description: "Allium family member. Can cause gastrointestinal irritation and red blood cell damage.",
      symptoms: "Nausea, vomiting, diarrhea, elevated heart rate" },
    { name: "shallot", display: "Shallot", pets: ["dog", "cat"], severity: "high",
      description: "Allium family member with similar toxicity to onions.",
      symptoms: "Vomiting, diarrhea, lethargy, anemia" },
    { name: "scallion", display: "Scallion / Green Onion", pets: ["dog", "cat"], severity: "high",
      description: "Allium family member. All parts are toxic to pets.",
      symptoms: "GI upset, weakness, anemia" },
    { name: "chocolate", display: "Chocolate", pets: ["dog", "cat"], severity: "high",
      description: "Contains theobromine and caffeine. Dark chocolate and baking cocoa are most dangerous. As little as 1oz of dark chocolate per pound of body weight can be lethal.",
      symptoms: "Vomiting, diarrhea, rapid breathing, seizures, heart failure" },
    { name: "cocoa", display: "Cocoa / Cacao", pets: ["dog", "cat"], severity: "high",
      description: "Extremely high in theobromine. Cocoa powder and baking chocolate are the most toxic forms.",
      symptoms: "Hyperactivity, tremors, seizures, cardiac arrest" },
    { name: "theobromine", display: "Theobromine", pets: ["dog", "cat"], severity: "high",
      description: "The toxic compound in chocolate. Dogs metabolize it much slower than humans.",
      symptoms: "Restlessness, excessive urination, tremors, seizures" },
    { name: "caffeine", display: "Caffeine", pets: ["dog", "cat"], severity: "high",
      description: "Found in coffee, tea, energy drinks, some medications. 9mg/lb toxic for dogs, 3-4mg/lb for cats.",
      symptoms: "Restlessness, rapid breathing, heart palpitations, tremors" },
    { name: "coffee", display: "Coffee", pets: ["dog", "cat"], severity: "high",
      description: "Contains caffeine which is toxic to pets. Includes coffee beans, grounds, and brewed coffee.",
      symptoms: "Hyperactivity, vomiting, elevated heart rate, seizures" },
    { name: "xylitol", display: "Xylitol", pets: ["dog"], severity: "high",
      description: "Extremely toxic to dogs. Causes rapid insulin release leading to hypoglycemia. Can cause liver failure within days.",
      symptoms: "Vomiting, weakness, collapse, seizures, liver failure" },
    { name: "birch sugar", display: "Birch Sugar (Xylitol)", pets: ["dog"], severity: "high",
      description: "Another name for xylitol. Extremely dangerous for dogs.",
      symptoms: "Rapid drop in blood sugar, seizures, liver failure" },
    { name: "grape", display: "Grapes", pets: ["dog", "cat"], severity: "high",
      description: "Contains tartaric acid which dogs cannot process. Even small amounts can cause acute kidney failure.",
      symptoms: "Vomiting, lethargy, loss of appetite, kidney failure" },
    { name: "raisin", display: "Raisins", pets: ["dog", "cat"], severity: "high",
      description: "Dried grapes - concentrated toxicity. Even a few raisins can be fatal to a small dog.",
      symptoms: "Vomiting, diarrhea, abdominal pain, kidney failure" },
    { name: "sultana", display: "Sultanas", pets: ["dog", "cat"], severity: "high",
      description: "A type of dried grape. Same kidney toxicity as raisins.",
      symptoms: "Vomiting, lethargy, decreased urination, kidney failure" },
    { name: "currant", display: "Currants", pets: ["dog", "cat"], severity: "high",
      description: "Can cause the same kidney damage as grapes and raisins.",
      symptoms: "Vomiting, diarrhea, kidney failure" },
    { name: "macadamia", display: "Macadamia Nuts", pets: ["dog"], severity: "high",
      description: "The exact toxin is unknown, but even small amounts cause serious symptoms in dogs.",
      symptoms: "Weakness, vomiting, tremors, hyperthermia, inability to walk" },
    { name: "alcohol", display: "Alcohol / Ethanol", pets: ["dog", "cat"], severity: "high",
      description: "No amount of alcohol is safe for pets. Causes severe CNS depression.",
      symptoms: "Vomiting, disorientation, difficulty breathing, coma, death" },
    { name: "ethanol", display: "Ethanol", pets: ["dog", "cat"], severity: "high",
      description: "Found in alcoholic beverages, raw bread dough, and some medications.",
      symptoms: "Low blood sugar, low blood pressure, hypothermia, seizures" },
    { name: "beer", display: "Beer", pets: ["dog", "cat"], severity: "high",
      description: "Contains ethanol which is toxic to pets. Hops in beer are also independently toxic to dogs.",
      symptoms: "Vomiting, disorientation, breathing difficulty" },
    { name: "wine", display: "Wine", pets: ["dog", "cat"], severity: "high",
      description: "Contains both alcohol and grape compounds - doubly dangerous.",
      symptoms: "Disorientation, vomiting, kidney damage" },
    { name: "yeast dough", display: "Raw Yeast Dough", pets: ["dog", "cat"], severity: "high",
      description: "Expands in stomach causing bloat (potentially fatal). Yeast also produces alcohol as it ferments.",
      symptoms: "Bloating, abdominal pain, alcohol toxicity, gastric torsion" },
    { name: "nutmeg", display: "Nutmeg", pets: ["dog", "cat"], severity: "high",
      description: "Contains myristicin, a narcotic compound that affects the nervous system.",
      symptoms: "Hallucinations, tremors, seizures, elevated heart rate" },
    { name: "ethoxyquin", display: "Ethoxyquin", pets: ["dog", "cat"], severity: "high",
      description: "A chemical preservative banned in human food in many countries. Linked to liver and kidney damage in pets.",
      symptoms: "Liver damage, kidney failure, cancer risk" },
  ],
  caution: [
    { name: "avocado", display: "Avocado", pets: ["dog", "cat"], severity: "moderate",
      description: "Contains persin which can cause vomiting and diarrhea. The pit is a choking hazard.",
      symptoms: "Vomiting, diarrhea, abdominal discomfort" },
    { name: "salt", display: "Excessive Salt", pets: ["dog", "cat"], severity: "moderate",
      description: "Large amounts can cause sodium ion poisoning. 1.5g/lb in dogs and 41mg/lb in cats is dangerous.",
      symptoms: "Excessive thirst, vomiting, diarrhea, tremors, seizures" },
    { name: "dairy", display: "Dairy Products", pets: ["dog", "cat"], severity: "low",
      description: "Most pets are lactose intolerant. Small amounts may be okay, but can cause digestive upset.",
      symptoms: "Diarrhea, gas, bloating, stomach cramps" },
    { name: "milk", display: "Milk", pets: ["dog", "cat"], severity: "low",
      description: "Pets lack sufficient lactase to digest lactose properly.",
      symptoms: "Diarrhea, gas, abdominal discomfort" },
    { name: "cheese", display: "Cheese", pets: ["dog", "cat"], severity: "low",
      description: "High in fat and lactose. Small amounts usually okay, but can cause issues in sensitive pets.",
      symptoms: "Digestive upset, potential pancreatitis if high-fat" },
    { name: "citrus", display: "Citrus Fruits", pets: ["dog", "cat"], severity: "low",
      description: "Contains citric acid and essential oils. Small amounts cause mild upset; large amounts can be more serious.",
      symptoms: "Stomach upset, vomiting, diarrhea" },
    { name: "lemon", display: "Lemon", pets: ["dog", "cat"], severity: "low",
      description: "All parts contain citric acid. Most pets dislike the taste, but ingestion can cause issues.",
      symptoms: "Drooling, vomiting, digestive irritation" },
    { name: "lime", display: "Lime", pets: ["dog", "cat"], severity: "low",
      description: "Similar to lemon - citric acid and essential oils can irritate the digestive system.",
      symptoms: "Vomiting, diarrhea, skin irritation" },
    { name: "raw egg", display: "Raw Eggs", pets: ["dog", "cat"], severity: "moderate",
      description: "Risk of Salmonella/E.coli. Contains avidin which inhibits biotin absorption.",
      symptoms: "Vomiting, diarrhea, skin/coat problems over time" },
    { name: "raw meat", display: "Raw Meat", pets: ["dog", "cat"], severity: "moderate",
      description: "Risk of bacterial contamination (Salmonella, E. coli, Listeria).",
      symptoms: "Vomiting, diarrhea, fever, lethargy" },
    { name: "raw fish", display: "Raw Fish", pets: ["dog", "cat"], severity: "moderate",
      description: "Can contain parasites and bacteria. Some raw fish (salmon) can carry a fatal parasite for dogs.",
      symptoms: "Vomiting, fever, enlarged lymph nodes" },
    { name: "bone", display: "Cooked Bones", pets: ["dog", "cat"], severity: "moderate",
      description: "Cooked bones can splinter and cause choking, internal punctures, or intestinal blockage.",
      symptoms: "Choking, vomiting, bloody stool, constipation" },
    { name: "cherry", display: "Cherries", pets: ["dog", "cat"], severity: "moderate",
      description: "The pit, stem, and leaves contain cyanide. The flesh itself is okay in small amounts.",
      symptoms: "Difficulty breathing, bright red gums, dilated pupils" },
    { name: "coconut", display: "Coconut", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is generally safe in small amounts. Coconut water is high in potassium and should be avoided.",
      symptoms: "Loose stools, stomach upset" },
    { name: "corn", display: "Corn", pets: ["dog", "cat"], severity: "low",
      description: "Not toxic but a common allergen and filler with low nutritional value for pets.",
      symptoms: "Allergic reactions, digestive issues in sensitive pets" },
    { name: "wheat", display: "Wheat", pets: ["dog", "cat"], severity: "low",
      description: "Common allergen for pets. Often used as cheap filler in pet food.",
      symptoms: "Itching, ear infections, digestive issues in allergic pets" },
    { name: "soy", display: "Soy / Soybean", pets: ["dog", "cat"], severity: "low",
      description: "Common allergen. May affect thyroid function. Often used as cheap protein filler.",
      symptoms: "Gas, bloating, allergic reactions" },
    { name: "bha", display: "BHA (Butylated Hydroxyanisole)", pets: ["dog", "cat"], severity: "moderate",
      description: "Chemical preservative classified as a possible carcinogen.",
      symptoms: "Long-term: potential cancer risk, liver/kidney stress" },
    { name: "bht", display: "BHT (Butylated Hydroxytoluene)", pets: ["dog", "cat"], severity: "moderate",
      description: "Synthetic antioxidant preservative. Studies suggest potential cancer and organ toxicity risks.",
      symptoms: "Long-term: potential liver, thyroid, kidney issues" },
    { name: "propylene glycol", display: "Propylene Glycol", pets: ["cat"], severity: "moderate",
      description: "Banned in cat food by FDA. Can cause Heinz body anemia in cats.",
      symptoms: "Anemia in cats, CNS depression in large amounts" },
    { name: "carrageenan", display: "Carrageenan", pets: ["dog", "cat"], severity: "low",
      description: "Thickening agent linked to gastrointestinal inflammation in some studies.",
      symptoms: "GI inflammation, bloating, potential digestive issues" },
    { name: "by-product", display: "Meat By-Products", pets: ["dog", "cat"], severity: "low",
      description: "Can include organs, feet, beaks - varies wildly in quality.",
      symptoms: "No acute symptoms, but may indicate low nutritional value" },
    { name: "artificial color", display: "Artificial Colors/Dyes", pets: ["dog", "cat"], severity: "low",
      description: "No nutritional benefit. Some artificial dyes have been linked to behavioral issues.",
      symptoms: "Potential allergic reactions, hyperactivity" },
    { name: "red 40", display: "Red 40 Dye", pets: ["dog", "cat"], severity: "low",
      description: "Artificial food coloring with no nutritional benefit.",
      symptoms: "Allergic reactions, behavioral changes" },
    { name: "yellow 5", display: "Yellow 5 Dye", pets: ["dog", "cat"], severity: "low",
      description: "Artificial coloring unnecessary for pets.",
      symptoms: "Skin reactions, digestive upset" },
    { name: "blue 2", display: "Blue 2 Dye", pets: ["dog", "cat"], severity: "low",
      description: "Synthetic dye with no nutritional value for pets.",
      symptoms: "Potential allergic reactions" },
    { name: "sodium nitrite", display: "Sodium Nitrite", pets: ["dog", "cat"], severity: "moderate",
      description: "Preservative that can form carcinogenic nitrosamines.",
      symptoms: "Long-term cancer risk, methemoglobinemia in acute exposure" },
    { name: "menadione", display: "Menadione (Vitamin K3)", pets: ["dog", "cat"], severity: "moderate",
      description: "Synthetic vitamin K supplement banned in human supplements in many countries.",
      symptoms: "Allergic reactions, cytotoxicity, liver issues" },
  ],
  safe: [
    { name: "chicken", display: "Cooked Chicken", pets: ["dog", "cat"], description: "Excellent lean protein source. Remove bones and skin." },
    { name: "turkey", display: "Cooked Turkey", pets: ["dog", "cat"], description: "Good protein source. Avoid seasoned or processed turkey." },
    { name: "beef", display: "Cooked Beef", pets: ["dog", "cat"], description: "Good protein source when plain and well-cooked." },
    { name: "salmon", display: "Cooked Salmon", pets: ["dog", "cat"], description: "Rich in omega-3 fatty acids. Must be fully cooked." },
    { name: "tuna", display: "Tuna (in moderation)", pets: ["dog", "cat"], description: "OK occasionally. High mercury content means it shouldn't be a staple." },
    { name: "shrimp", display: "Cooked Shrimp", pets: ["dog", "cat"], description: "Low calorie, high protein. Remove shell and devein." },
    { name: "carrot", display: "Carrots", pets: ["dog", "cat"], description: "Great low-calorie snack rich in beta-carotene and fiber." },
    { name: "green bean", display: "Green Beans", pets: ["dog", "cat"], description: "Excellent low-calorie treat. Serve plain without seasoning." },
    { name: "pumpkin", display: "Pumpkin", pets: ["dog", "cat"], description: "Great for digestion. Use plain, unseasoned pumpkin (not pie filling)." },
    { name: "sweet potato", display: "Sweet Potato", pets: ["dog", "cat"], description: "Nutritious, fiber-rich. Serve cooked and plain." },
    { name: "blueberry", display: "Blueberries", pets: ["dog", "cat"], description: "Antioxidant-rich superfood. Great as occasional treats." },
    { name: "watermelon", display: "Watermelon", pets: ["dog", "cat"], description: "Hydrating and low-calorie. Remove seeds and rind." },
    { name: "apple", display: "Apple", pets: ["dog", "cat"], description: "Good source of vitamins A and C. Remove seeds and core." },
    { name: "banana", display: "Banana", pets: ["dog", "cat"], description: "Good in moderation. High in sugar and potassium." },
    { name: "rice", display: "White Rice", pets: ["dog", "cat"], description: "Easy to digest. Good for settling upset stomachs." },
    { name: "oatmeal", display: "Oatmeal", pets: ["dog"], description: "Good source of fiber. Serve plain and cooked." },
    { name: "peanut butter", display: "Peanut Butter (xylitol-free)", pets: ["dog"], description: "Most dogs love it! ALWAYS check label for xylitol first." },
    { name: "egg", display: "Cooked Eggs", pets: ["dog", "cat"], description: "Excellent protein source when fully cooked." },
    { name: "cucumber", display: "Cucumber", pets: ["dog", "cat"], description: "Low calorie, hydrating snack. Good for overweight pets." },
    { name: "broccoli", display: "Broccoli", pets: ["dog"], description: "OK in small amounts. High amounts can cause GI irritation." },
    { name: "spinach", display: "Spinach", pets: ["dog"], description: "Nutrient-rich but high in oxalic acid. Small amounts only." },
    { name: "pea", display: "Peas", pets: ["dog", "cat"], description: "Good source of protein, fiber, and vitamins." },
    { name: "cranberry", display: "Cranberries", pets: ["dog", "cat"], description: "Safe in small amounts. May support urinary tract health." },
    { name: "mango", display: "Mango", pets: ["dog"], description: "Rich in vitamins. Remove pit and skin before serving." },
    { name: "pear", display: "Pear", pets: ["dog", "cat"], description: "Good vitamin source. Remove seeds and core." },
  ],
};

const ALL_INGREDIENTS = [
  ...INGREDIENT_DB.toxic.map(i => ({ ...i, category: "toxic" })),
  ...INGREDIENT_DB.caution.map(i => ({ ...i, category: "caution" })),
  ...INGREDIENT_DB.safe.map(i => ({ ...i, category: "safe" })),
];

function analyzeIngredients(text, petType) {
  const lowerText = text.toLowerCase();
  const found = [];
  const matched = new Set();
  for (const ingredient of ALL_INGREDIENTS) {
    if (matched.has(ingredient.name)) continue;
    if (petType !== "both" && !ingredient.pets.includes(petType)) continue;
    const searchTerms = [ingredient.name];
    if (!ingredient.name.endsWith("s")) searchTerms.push(ingredient.name + "s");
    if (ingredient.name === "by-product") searchTerms.push("by product", "byproduct", "by-products", "byproducts");
    if (ingredient.name === "msg") searchTerms.push("monosodium glutamate");
    if (ingredient.name === "bha") searchTerms.push("butylated hydroxyanisole");
    if (ingredient.name === "bht") searchTerms.push("butylated hydroxytoluene");
    if (ingredient.name === "xylitol") searchTerms.push("birch sugar");
    if (ingredient.name === "artificial color") searchTerms.push("artificial colour", "food coloring", "food colouring", "fd&c", "color added", "colour added");
    if (ingredient.name === "propylene glycol") searchTerms.push("propylene-glycol", "1,2-propanediol");
    if (ingredient.name === "yeast dough") searchTerms.push("raw dough", "unbaked dough");
    for (const term of searchTerms) {
      const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(lowerText)) { found.push(ingredient); matched.add(ingredient.name); break; }
    }
  }
  const order = { toxic: 0, caution: 1, safe: 2 };
  found.sort((a, b) => order[a.category] - order[b.category]);
  return found;
}

function calculateScore(results) {
  if (results.length === 0) return null;
  const toxic = results.filter(r => r.category === "toxic").length;
  const caution = results.filter(r => r.category === "caution").length;
  if (toxic > 0) return "F";
  if (caution > 2) return "C";
  if (caution > 0) return "B";
  return "A";
}

function getScoreColor(s) { return { A:"#22c55e", B:"#84cc16", C:"#eab308", D:"#f97316", F:"#ef4444" }[s] || "#6b7280"; }
function getScoreLabel(s) { return { A:"Excellent — All clear!", B:"Good — Minor concerns", C:"Fair — Several concerns", D:"Poor — Risky ingredients", F:"Dangerous — Toxic ingredients found!" }[s] || ""; }
function getCategoryStyle(c) {
  return { toxic: { icon:"🚫", label:"DANGEROUS" }, caution: { icon:"⚠️", label:"CAUTION" }, safe: { icon:"✅", label:"SAFE" } }[c] || { icon:"❓", label:"UNKNOWN" };
}

export default function Home() {
  const [petType, setPetType] = useState("dog");
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeResult, setActiveResult] = useState(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const handleAnalyze = useCallback(() => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setActiveResult(null);
    setTimeout(() => {
      const found = analyzeIngredients(inputText, petType);
      setResults(found);
      setIsAnalyzing(false);
      setTimeout(() => { resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100);
    }, 600);
  }, [inputText, petType]);

  const handleClear = () => { setInputText(""); setResults(null); setActiveResult(null); inputRef.current?.focus(); };
  const score = results ? calculateScore(results) : null;

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="WNU3XQOEJ7qSnToDnIesJHmelwYfWrMKoiOV_KxiHbU" />
        <title>CanMyPetEat — Free Pet Food Safety Checker for Dogs & Cats</title>
        <meta name="description" content="Instantly check if food ingredients are safe for your dog or cat. Free tool with 80+ ingredients database. No sign-up required." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CanMyPetEat — Is This Food Safe for My Pet?" />
        <meta property="og:description" content="Paste any ingredient list and instantly know if it's safe for your dog or cat. Free, no sign-up, 80+ ingredients checked." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://canmypeteat.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://canmypeteat.app" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight:"100vh", background:"linear-gradient(165deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)", fontFamily:"'DM Sans', 'Segoe UI', sans-serif", color:"#f1f5f9", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"fixed", top:"-20%", right:"-10%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"fixed", bottom:"-15%", left:"-10%", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", opacity:0.03, backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize:"40px 40px" }} />

        <div style={{ maxWidth:"520px", margin:"0 auto", padding:"0 20px", position:"relative", zIndex:1 }}>
          <header style={{ textAlign:"center", paddingTop:"48px", paddingBottom:"12px" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"rgba(255,255,255,0.05)", borderRadius:"100px", padding:"6px 16px 6px 8px", marginBottom:"20px", border:"1px solid rgba(255,255,255,0.08)", fontSize:"13px", color:"#94a3b8", letterSpacing:"0.5px" }}>
              <span style={{ fontSize:"18px" }}>🛡️</span> FREE PET FOOD SAFETY TOOL
            </div>
            <h1 style={{ fontFamily:"'Fraunces', Georgia, serif", fontSize:"38px", fontWeight:700, lineHeight:1.1, margin:"0 0 12px 0", background:"linear-gradient(135deg, #f1f5f9 0%, #38bdf8 50%, #a78bfa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              CanMyPetEat
            </h1>
            <p style={{ fontSize:"16px", color:"#94a3b8", lineHeight:1.6, margin:"0 0 8px 0", maxWidth:"360px", marginLeft:"auto", marginRight:"auto" }}>
              Check if food ingredients are safe for your dog or cat — instantly.
            </p>
            <button onClick={() => setShowInfo(!showInfo)} style={{ background:"none", border:"none", color:"#64748b", fontSize:"13px", cursor:"pointer", padding:"4px 8px", textDecoration:"underline", textDecorationStyle:"dotted", textUnderlineOffset:"3px" }}>
              How does it work?
            </button>
            {showInfo && (
              <div style={{ marginTop:"12px", padding:"16px 20px", borderRadius:"12px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", textAlign:"left", fontSize:"14px", color:"#94a3b8", lineHeight:1.7 }}>
                <p style={{ margin:"0 0 8px 0" }}><strong style={{ color:"#e2e8f0" }}>Paste or type ingredients</strong> from any pet food label, human food, or treat. We check them against a veterinary-sourced database of 80+ known toxic, risky, and safe ingredients.</p>
                <p style={{ margin:0, fontSize:"13px", color:"#64748b" }}>⚡ No sign-up · 100% free · No data collected · Works offline after first load</p>
              </div>
            )}
          </header>

          {/* Pet type selector */}
          <div style={{ display:"flex", gap:"10px", marginBottom:"20px", marginTop:"24px" }}>
            {[{ id:"dog", emoji:"🐕", label:"Dog" }, { id:"cat", emoji:"🐈", label:"Cat" }, { id:"both", emoji:"🐾", label:"Both" }].map((pet) => (
              <button key={pet.id} onClick={() => { setPetType(pet.id); if (results) setResults(analyzeIngredients(inputText, pet.id)); }}
                style={{ flex:1, padding:"14px 8px", borderRadius:"14px", border: petType===pet.id ? "2px solid #38bdf8" : "2px solid rgba(255,255,255,0.08)", background: petType===pet.id ? "rgba(56,189,248,0.1)" : "rgba(255,255,255,0.03)", color: petType===pet.id ? "#e0f2fe" : "#94a3b8", cursor:"pointer", fontSize:"15px", fontWeight:500, fontFamily:"'DM Sans', sans-serif", transition:"all 0.2s ease", display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
                <span style={{ fontSize:"24px" }}>{pet.emoji}</span>{pet.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ borderRadius:"18px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", padding:"4px", marginBottom:"16px" }}>
            <textarea ref={inputRef} value={inputText} onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAnalyze(); } }}
              placeholder={"Paste ingredients here...\n\nExample: chicken, corn, wheat gluten, garlic powder, BHA, salt, natural flavors"}
              style={{ width:"100%", minHeight:"120px", padding:"16px", background:"transparent", border:"none", outline:"none", color:"#e2e8f0", fontSize:"15px", lineHeight:1.7, fontFamily:"'DM Sans', sans-serif", resize:"vertical", boxSizing:"border-box" }} />
            <div style={{ display:"flex", gap:"8px", padding:"8px 12px" }}>
              <button onClick={handleAnalyze} disabled={!inputText.trim() || isAnalyzing}
                style={{ flex:1, padding:"14px 24px", borderRadius:"12px", border:"none", fontWeight:600, fontSize:"15px", fontFamily:"'DM Sans', sans-serif", cursor:"pointer", background: inputText.trim() ? "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)" : "rgba(255,255,255,0.06)", color: inputText.trim() ? "#fff" : "#475569", transition:"all 0.3s ease", opacity: isAnalyzing ? 0.7 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                {isAnalyzing ? (<><span style={{ display:"inline-block", width:"16px", height:"16px", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin 0.6s linear infinite" }} />Checking...</>) : (<>🔍 Check Safety</>)}
              </button>
              {inputText && (
                <button onClick={handleClear} style={{ padding:"14px 16px", borderRadius:"12px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)", color:"#94a3b8", cursor:"pointer", fontSize:"14px", fontFamily:"'DM Sans', sans-serif" }}>Clear</button>
              )}
            </div>
          </div>

          {/* Quick examples */}
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"32px" }}>
            <span style={{ fontSize:"12px", color:"#475569", padding:"6px 0" }}>Try:</span>
            {[{ label:"🍫 Chocolate", text:"chocolate, sugar, cocoa butter, milk" }, { label:"🧅 Onion soup", text:"onion, garlic, beef broth, butter, salt, bread, cheese" }, { label:"🐔 Chicken meal", text:"chicken breast, rice, carrots, peas, sweet potato" }].map((ex) => (
              <button key={ex.label} onClick={() => { setInputText(ex.text); setResults(null); }}
                style={{ padding:"6px 12px", borderRadius:"100px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)", color:"#94a3b8", cursor:"pointer", fontSize:"12px", fontFamily:"'DM Sans', sans-serif" }}>
                {ex.label}
              </button>
            ))}
          </div>

          {/* Results */}
          {results !== null && (
            <div ref={resultsRef} style={{ paddingBottom:"80px" }}>
              {score && (
                <div style={{ textAlign:"center", marginBottom:"24px", padding:"28px 24px", borderRadius:"20px", background:`linear-gradient(135deg, ${getScoreColor(score)}11 0%, ${getScoreColor(score)}05 100%)`, border:`1px solid ${getScoreColor(score)}33` }}>
                  <div style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"72px", height:"72px", borderRadius:"18px", background:`${getScoreColor(score)}20`, border:`2px solid ${getScoreColor(score)}55`, fontSize:"36px", fontWeight:700, color:getScoreColor(score), fontFamily:"'Fraunces', Georgia, serif", marginBottom:"12px" }}>{score}</div>
                  <div style={{ fontSize:"16px", fontWeight:600, color:getScoreColor(score), marginBottom:"4px" }}>{getScoreLabel(score)}</div>
                  <div style={{ fontSize:"13px", color:"#64748b" }}>{results.filter(r => r.category === "toxic").length} dangerous · {results.filter(r => r.category === "caution").length} caution · {results.filter(r => r.category === "safe").length} safe</div>
                </div>
              )}
              {results.length === 0 ? (
                <div style={{ textAlign:"center", padding:"32px 24px", borderRadius:"16px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize:"40px", marginBottom:"12px" }}>🤔</div>
                  <p style={{ color:"#94a3b8", margin:0, fontSize:"15px", lineHeight:1.6 }}>No recognized ingredients found. Try pasting a complete ingredient list from a pet food label, or type individual food names.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                  {results.map((item, idx) => {
                    const sty = getCategoryStyle(item.category);
                    const isExp = activeResult === idx;
                    return (
                      <button key={idx} onClick={() => setActiveResult(isExp ? null : idx)}
                        style={{ width:"100%", textAlign:"left", padding:"16px 18px", borderRadius:"14px", background: isExp ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", border:`1px solid ${item.category==="toxic" ? "rgba(239,68,68,0.3)" : item.category==="caution" ? "rgba(234,179,8,0.2)" : "rgba(34,197,94,0.2)"}`, cursor:"pointer", fontFamily:"'DM Sans', sans-serif", color:"#e2e8f0", transition:"all 0.2s ease" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                          <span style={{ fontSize:"20px", flexShrink:0 }}>{sty.icon}</span>
                          <div style={{ flex:1 }}>
                            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"2px", flexWrap:"wrap" }}>
                              <span style={{ fontWeight:600, fontSize:"15px" }}>{item.display}</span>
                              <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.5px", padding:"2px 8px", borderRadius:"100px", background: item.category==="toxic" ? "rgba(239,68,68,0.15)" : item.category==="caution" ? "rgba(234,179,8,0.15)" : "rgba(34,197,94,0.15)", color: item.category==="toxic" ? "#fca5a5" : item.category==="caution" ? "#fcd34d" : "#86efac" }}>{sty.label}</span>
                              {item.severity === "high" && <span style={{ fontSize:"10px", fontWeight:700, padding:"2px 6px", borderRadius:"100px", background:"rgba(239,68,68,0.2)", color:"#fca5a5" }}>HIGH RISK</span>}
                            </div>
                            <div style={{ fontSize:"13px", color:"#64748b" }}>
                              {item.category !== "safe" ? `Affects: ${item.pets.map(p => p==="dog" ? "🐕 Dogs" : "🐈 Cats").join(" & ")}` : `Safe for: ${item.pets.map(p => p==="dog" ? "🐕 Dogs" : "🐈 Cats").join(" & ")}`}
                            </div>
                          </div>
                          <span style={{ fontSize:"18px", color:"#475569", transform: isExp ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.2s ease" }}>▾</span>
                        </div>
                        {isExp && (
                          <div style={{ marginTop:"14px", paddingTop:"14px", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                            <p style={{ margin:"0 0 10px 0", fontSize:"14px", lineHeight:1.7, color:"#cbd5e1" }}>{item.description}</p>
                            {item.symptoms && (
                              <div style={{ padding:"10px 14px", borderRadius:"10px", background:"rgba(239,68,68,0.06)", border:"1px solid rgba(239,68,68,0.1)" }}>
                                <div style={{ fontSize:"11px", fontWeight:700, color:"#f87171", letterSpacing:"0.5px", marginBottom:"4px" }}>SYMPTOMS TO WATCH FOR</div>
                                <div style={{ fontSize:"13px", color:"#fca5a5", lineHeight:1.6 }}>{item.symptoms}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
              <div style={{ marginTop:"24px", padding:"16px", borderRadius:"12px", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", fontSize:"12px", color:"#475569", lineHeight:1.6, textAlign:"center" }}>
                ⚕️ CanMyPetEat is for informational purposes only and is not a substitute for professional veterinary advice. If your pet has eaten something toxic, contact your vet immediately or call ASPCA Poison Control: <strong style={{ color:"#94a3b8" }}>(888) 426-4435</strong>
              </div>
            </div>
          )}

          {!results && (
            <footer style={{ textAlign:"center", padding:"40px 0 60px", color:"#334155", fontSize:"13px" }}>
              <div style={{ marginBottom:"16px", display:"flex", justifyContent:"center", gap:"24px", flexWrap:"wrap" }}>
                {["80+ ingredients", "Dogs & Cats", "No sign-up", "100% free"].map((f) => (
                  <span key={f} style={{ display:"flex", alignItems:"center", gap:"6px" }}><span style={{ color:"#38bdf8" }}>✦</span> {f}</span>
                ))}
              </div>
              <p style={{ margin:0 }}>Built with ❤️ for pet parents everywhere</p>
            </footer>
          )}
        </div>

        <style jsx global>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          textarea::placeholder { color: #475569; }
          textarea::-webkit-scrollbar { width: 6px; }
          textarea::-webkit-scrollbar-track { background: transparent; }
          textarea::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
          button:active { transform: scale(0.98); }
          * { -webkit-tap-highlight-color: transparent; }
          html, body { margin: 0; padding: 0; }
        `}</style>
      </div>
    </>
  );
}
