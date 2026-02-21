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
    { name: "hop", display: "Hops", pets: ["dog"], severity: "high",
      description: "Used in beer brewing. Causes malignant hyperthermia in dogs — a rapid, uncontrollable rise in body temperature.",
      symptoms: "Panting, elevated temperature, seizures, death" },
    { name: "marijuana", display: "Marijuana / Cannabis", pets: ["dog", "cat"], severity: "high",
      description: "THC is toxic to pets. Edibles are especially dangerous due to concentrated THC and often containing chocolate or xylitol.",
      symptoms: "Disorientation, drooling, tremors, seizures, coma" },
    { name: "cannabis", display: "Cannabis / THC", pets: ["dog", "cat"], severity: "high",
      description: "All forms of cannabis containing THC are toxic to pets, including edibles, oils, and plant material.",
      symptoms: "Lethargy, wobbling, drooling, urinary incontinence, seizures" },
    { name: "tobacco", display: "Tobacco / Nicotine", pets: ["dog", "cat"], severity: "high",
      description: "Nicotine is extremely toxic to pets. Cigarette butts, nicotine gum, and patches are all dangerous.",
      symptoms: "Vomiting, tremors, elevated heart rate, collapse, death" },
    { name: "star fruit", display: "Star Fruit", pets: ["dog", "cat"], severity: "high",
      description: "Contains soluble calcium oxalates that can cause acute kidney failure in dogs.",
      symptoms: "Vomiting, drooling, kidney failure" },
    { name: "wild mushroom", display: "Wild Mushrooms", pets: ["dog", "cat"], severity: "high",
      description: "Many wild mushroom species are deadly to pets. Store-bought plain mushrooms are generally safe, but wild mushrooms should always be avoided.",
      symptoms: "Vomiting, diarrhea, liver failure, seizures, death" },
    { name: "persimmon", display: "Persimmon", pets: ["dog", "cat"], severity: "high",
      description: "Seeds and pit can cause intestinal blockage and enteritis (inflammation of the intestine).",
      symptoms: "Vomiting, diarrhea, abdominal pain, intestinal obstruction" },
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
    { name: "bacon", display: "Bacon", pets: ["dog", "cat"], severity: "moderate",
      description: "Very high in fat and salt. Can trigger pancreatitis. Occasional tiny piece is unlikely to harm, but not recommended.",
      symptoms: "Vomiting, diarrhea, pancreatitis from high fat" },
    { name: "ham", display: "Ham", pets: ["dog", "cat"], severity: "moderate",
      description: "Very high in sodium and fat. Processed meats often contain preservatives harmful to pets.",
      symptoms: "Excessive thirst, vomiting, diarrhea, pancreatitis" },
    { name: "sausage", display: "Sausage", pets: ["dog", "cat"], severity: "moderate",
      description: "High in fat, salt, and often contains garlic, onion powder, and other harmful seasonings.",
      symptoms: "GI upset, pancreatitis risk, potential onion/garlic toxicity" },
    { name: "hot dog", display: "Hot Dog", pets: ["dog", "cat"], severity: "moderate",
      description: "Highly processed, high in sodium and fat. May contain garlic powder, onion powder, and nitrates.",
      symptoms: "GI upset, excessive thirst, potential sodium poisoning" },
    { name: "pepperoni", display: "Pepperoni", pets: ["dog", "cat"], severity: "moderate",
      description: "Extremely high in sodium, fat, and spices. Often contains garlic and onion powder.",
      symptoms: "Digestive upset, excessive thirst, pancreatitis" },
    { name: "salami", display: "Salami", pets: ["dog", "cat"], severity: "moderate",
      description: "Cured meat high in salt, fat, and often contains garlic. Not suitable for pets.",
      symptoms: "GI upset, excessive thirst, pancreatitis risk" },
    { name: "jerky", display: "Jerky / Dried Meat", pets: ["dog", "cat"], severity: "low",
      description: "Commercial jerky may contain garlic, onion, xylitol, or excessive salt. Plain unseasoned jerky is safer.",
      symptoms: "Varies by ingredients — check label for onion, garlic, xylitol" },
    { name: "liver", display: "Liver (large amounts)", pets: ["dog", "cat"], severity: "low",
      description: "Safe in small amounts but too much can cause vitamin A toxicity. Treat, not a meal replacement.",
      symptoms: "Vitamin A toxicity: bone problems, lethargy, weight loss" },
    { name: "pizza", display: "Pizza", pets: ["dog", "cat"], severity: "moderate",
      description: "Combination of high fat cheese, garlic/onion in sauce, high sodium, and often processed meats. Multiple risk factors.",
      symptoms: "GI upset, potential garlic/onion toxicity, pancreatitis" },
    { name: "french fry", display: "French Fries", pets: ["dog", "cat"], severity: "low",
      description: "High in fat, salt, and often cooked in oils that can upset pet stomachs. One or two won't hurt, but not a good habit.",
      symptoms: "Mild GI upset, excessive thirst from salt" },
    { name: "chip", display: "Chips / Crisps", pets: ["dog", "cat"], severity: "low",
      description: "High in salt and fat. Flavored varieties may contain onion or garlic powder.",
      symptoms: "Excessive thirst, GI upset" },
    { name: "popcorn", display: "Popcorn", pets: ["dog", "cat"], severity: "low",
      description: "Plain air-popped popcorn is safe in small amounts. Buttered, salted, or flavored popcorn is not recommended.",
      symptoms: "Mild GI upset from butter/salt, choking hazard from kernels" },
    { name: "bread", display: "Bread", pets: ["dog", "cat"], severity: "low",
      description: "Plain bread in small amounts is safe but offers no nutritional value. Avoid bread with raisins, garlic, nuts, or xylitol.",
      symptoms: "None from plain bread; check ingredients for toxic additions" },
    { name: "toast", display: "Toast", pets: ["dog", "cat"], severity: "low",
      description: "Plain toast is safe in small amounts. Avoid buttered toast or toast with toppings like avocado, garlic spread, etc.",
      symptoms: "None from plain toast in moderation" },
    { name: "noodle", display: "Noodles / Pasta", pets: ["dog", "cat"], severity: "low",
      description: "Plain cooked noodles are safe in small amounts but offer little nutrition. Avoid sauces containing garlic, onion, or heavy cream.",
      symptoms: "None from plain noodles; GI upset from rich sauces" },
    { name: "pasta", display: "Pasta", pets: ["dog", "cat"], severity: "low",
      description: "Plain cooked pasta is safe but nutritionally empty for pets. Never serve with garlic, onion, or creamy/tomato sauces.",
      symptoms: "None from plain pasta; check sauce ingredients" },
    { name: "potato", display: "Cooked Potato", pets: ["dog", "cat"], severity: "low",
      description: "Plain cooked potato is safe. Raw potato and green potatoes contain solanine which is toxic. Never feed raw.",
      symptoms: "Raw/green: vomiting, diarrhea, lethargy. Cooked plain: safe" },
    { name: "tomato", display: "Ripe Tomato", pets: ["dog", "cat"], severity: "low",
      description: "Ripe red tomatoes are generally safe in small amounts. Green tomatoes, stems, and leaves contain solanine and are toxic.",
      symptoms: "Green parts: drooling, GI upset, lethargy, weakness" },
    { name: "garlic bread", display: "Garlic Bread", pets: ["dog", "cat"], severity: "moderate",
      description: "Contains garlic which is toxic to pets, plus high fat from butter. Even small amounts are risky.",
      symptoms: "GI upset, potential garlic toxicity with larger amounts" },
    { name: "ice cream", display: "Ice Cream", pets: ["dog", "cat"], severity: "low",
      description: "High in sugar and lactose. Most pets are lactose intolerant. Some flavors (chocolate, coffee) are toxic.",
      symptoms: "Diarrhea, gas, vomiting. Chocolate flavors are toxic" },
    { name: "candy", display: "Candy / Sweets", pets: ["dog", "cat"], severity: "moderate",
      description: "High sugar content, and sugar-free varieties often contain xylitol which is lethal to dogs.",
      symptoms: "GI upset from sugar; xylitol: hypoglycemia, liver failure, death" },
    { name: "cookie", display: "Cookies", pets: ["dog", "cat"], severity: "moderate",
      description: "May contain chocolate, raisins, macadamia nuts, or xylitol. Even plain cookies are high in sugar and fat.",
      symptoms: "Varies by ingredients — check for chocolate, raisins, xylitol" },
    { name: "cake", display: "Cake", pets: ["dog", "cat"], severity: "moderate",
      description: "High in sugar and fat. May contain chocolate, xylitol, raisins, coffee, or macadamia nuts.",
      symptoms: "GI upset, potential toxicity depending on ingredients" },
    { name: "donut", display: "Donut / Doughnut", pets: ["dog", "cat"], severity: "moderate",
      description: "High in sugar, fat, and may contain chocolate glaze or xylitol. No nutritional value for pets.",
      symptoms: "GI upset, obesity risk, potential chocolate toxicity" },
    { name: "cinnamon", display: "Cinnamon", pets: ["dog", "cat"], severity: "low",
      description: "Small amounts are not toxic but can irritate the mouth and digestive tract. Cinnamon powder can cause breathing issues if inhaled.",
      symptoms: "Mouth irritation, coughing, breathing difficulty from powder" },
    { name: "ginger", display: "Ginger", pets: ["dog", "cat"], severity: "low",
      description: "Safe in small amounts and may help with nausea. Too much can cause heartburn and GI upset.",
      symptoms: "Mild GI upset in large amounts" },
    { name: "honey", display: "Honey", pets: ["dog", "cat"], severity: "low",
      description: "Safe in tiny amounts for adult dogs. High sugar content. Do not give to puppies or cats with diabetes. Raw honey may contain botulism spores dangerous to puppies.",
      symptoms: "None in small amounts; tooth decay and obesity with regular use" },
    { name: "mustard", display: "Mustard", pets: ["dog", "cat"], severity: "moderate",
      description: "Mustard seeds are toxic to dogs and cats. Prepared mustard also often contains other harmful ingredients.",
      symptoms: "Vomiting, diarrhea, abdominal pain" },
    { name: "pepper", display: "Black Pepper / Spicy Pepper", pets: ["dog", "cat"], severity: "low",
      description: "Small amounts of black pepper are not toxic but can irritate the GI tract. Spicy peppers (jalapeño, chili) cause more distress.",
      symptoms: "Sneezing, GI irritation, diarrhea, stomach pain" },
    { name: "jalapeno", display: "Jalapeño / Hot Pepper", pets: ["dog", "cat"], severity: "moderate",
      description: "Capsaicin in hot peppers causes significant GI distress in pets. Dogs and cats have much lower tolerance than humans.",
      symptoms: "Drooling, vomiting, diarrhea, stomach pain" },
    { name: "almond", display: "Almonds", pets: ["dog", "cat"], severity: "low",
      description: "Not toxic but hard to digest and a choking hazard. Salted or flavored almonds add extra risks.",
      symptoms: "Vomiting, diarrhea, potential choking or obstruction" },
    { name: "walnut", display: "Walnuts", pets: ["dog"], severity: "moderate",
      description: "Black walnuts are toxic. English walnuts are not toxic but are high in fat and can harbor mold that produces tremorgenic mycotoxins.",
      symptoms: "Vomiting, tremors, seizures (from moldy walnuts)" },
    { name: "pistachio", display: "Pistachios", pets: ["dog", "cat"], severity: "low",
      description: "Not toxic but high in fat. Can cause pancreatitis. Shells are a choking hazard and can cause intestinal blockage.",
      symptoms: "GI upset, pancreatitis risk, choking on shells" },
    { name: "cashew", display: "Cashews", pets: ["dog"], severity: "low",
      description: "Safe in small amounts when plain and unsalted. High in fat, so moderation is key.",
      symptoms: "GI upset and pancreatitis risk in large amounts" },
    { name: "pecan", display: "Pecans", pets: ["dog"], severity: "moderate",
      description: "Contains juglone which is toxic to dogs. Can also harbor mold producing tremorgenic mycotoxins.",
      symptoms: "Vomiting, diarrhea, tremors, seizures" },
    { name: "pineapple", display: "Pineapple", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe in small amounts. High in sugar and acid. Remove skin and hard core before serving.",
      symptoms: "GI upset from acidity or large amounts" },
    { name: "orange", display: "Orange", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe in small amounts but high in sugar and citric acid. Peel and seeds should be avoided.",
      symptoms: "GI upset, vomiting from citric acid or essential oils in peel" },
    { name: "peach", display: "Peach", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe. The pit contains cyanide and is a major choking/obstruction hazard. Always remove pit.",
      symptoms: "Choking from pit; cyanide poisoning if pit is crushed and consumed" },
    { name: "plum", display: "Plum", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe in small amounts. Pit, stem, and leaves contain cyanide. Always remove pit.",
      symptoms: "Choking from pit; cyanide risk if pit is crushed" },
    { name: "kiwi", display: "Kiwi", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe in small amounts. Remove skin as it's hard to digest. High in vitamin C.",
      symptoms: "Mild GI upset if too much; skin may cause irritation" },
    { name: "papaya", display: "Papaya", pets: ["dog", "cat"], severity: "low",
      description: "Flesh is safe and contains digestive enzymes. Remove seeds and skin before serving.",
      symptoms: "GI upset from seeds or large amounts" },
    { name: "fig", display: "Fig", pets: ["dog", "cat"], severity: "low",
      description: "Fresh figs in tiny amounts are safe. Fig plant leaves and sap are toxic. Dried figs are too high in sugar.",
      symptoms: "Drooling, vomiting from fig plant; GI upset from too many figs" },
    { name: "pomegranate", display: "Pomegranate", pets: ["dog", "cat"], severity: "low",
      description: "Seeds and flesh can cause GI upset due to tannins. Not toxic but not recommended.",
      symptoms: "Vomiting, stomach pain" },
    { name: "taco", display: "Taco", pets: ["dog", "cat"], severity: "moderate",
      description: "Typically contains onion, garlic, spices, high-fat cheese, and other ingredients harmful to pets.",
      symptoms: "GI upset, potential onion/garlic toxicity" },
    { name: "crab", display: "Crab", pets: ["dog", "cat"], severity: "low",
      description: "Cooked crab meat is safe in small amounts. Remove all shell. Raw crab can carry parasites. High in sodium.",
      symptoms: "None from plain cooked crab meat; shell can cause choking/blockage" },
    { name: "lobster", display: "Lobster", pets: ["dog", "cat"], severity: "low",
      description: "Cooked lobster meat is safe in small amounts. Remove shell completely. High in sodium and cholesterol.",
      symptoms: "GI upset from shell; allergic reaction possible" },
    { name: "squid", display: "Squid / Calamari", pets: ["dog", "cat"], severity: "low",
      description: "Plain cooked squid is safe in small amounts. Fried calamari is too high in fat and salt.",
      symptoms: "None from plain cooked; GI upset from fried or seasoned" },
    { name: "oyster", display: "Oyster", pets: ["dog", "cat"], severity: "low",
      description: "Cooked oysters are safe in moderation and rich in zinc and omega-3s. Never feed raw due to bacteria risk.",
      symptoms: "GI upset from raw oysters; none from cooked in moderation" },
    { name: "clam", display: "Clams", pets: ["dog", "cat"], severity: "low",
      description: "Cooked clams are safe in small amounts. Good source of protein and iron. Remove from shell, never serve raw.",
      symptoms: "GI upset from raw clams" },
    { name: "tea", display: "Tea", pets: ["dog", "cat"], severity: "moderate",
      description: "Contains caffeine which is toxic to pets. Herbal teas may also contain harmful herbs.",
      symptoms: "Restlessness, rapid breathing, heart palpitations, vomiting" },
    { name: "soda", display: "Soda / Soft Drinks", pets: ["dog", "cat"], severity: "moderate",
      description: "Contains caffeine (cola types), high sugar, and artificial sweeteners (potentially xylitol). No nutritional value.",
      symptoms: "Caffeine toxicity, GI upset, potential xylitol poisoning" },
    { name: "juice", display: "Fruit Juice", pets: ["dog", "cat"], severity: "low",
      description: "Too high in sugar with none of the fiber from whole fruit. Grape juice is toxic. Citrus juice can cause GI upset.",
      symptoms: "GI upset, diarrhea from sugar overload" },
    { name: "coconut water", display: "Coconut Water", pets: ["dog", "cat"], severity: "low",
      description: "High in potassium which can be dangerous in large amounts. Small sips occasionally may be okay.",
      symptoms: "GI upset, elevated potassium levels" },
    { name: "butter", display: "Butter", pets: ["dog", "cat"], severity: "low",
      description: "Very high in fat, can trigger pancreatitis. A tiny amount won't cause harm but should be avoided.",
      symptoms: "Diarrhea, vomiting, pancreatitis from regular or large amounts" },
    { name: "mayo", display: "Mayonnaise", pets: ["dog", "cat"], severity: "low",
      description: "Not toxic but very high in fat. Can trigger pancreatitis. No nutritional benefit for pets.",
      symptoms: "GI upset, pancreatitis from large amounts" },
    { name: "ketchup", display: "Ketchup", pets: ["dog", "cat"], severity: "low",
      description: "Contains high sugar, salt, and often onion powder or garlic powder. Not recommended for pets.",
      symptoms: "Mild GI upset; check label for onion/garlic" },
    { name: "soy sauce", display: "Soy Sauce", pets: ["dog", "cat"], severity: "moderate",
      description: "Extremely high in sodium. Even a small amount can cause sodium poisoning in small pets.",
      symptoms: "Excessive thirst, vomiting, diarrhea, tremors, seizures" },
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
    { name: "pork", display: "Cooked Pork (plain)", pets: ["dog", "cat"], description: "Safe when fully cooked and unseasoned. High in fat, so serve lean cuts in moderation." },
    { name: "lamb", display: "Cooked Lamb", pets: ["dog", "cat"], description: "Good protein source. Serve plain without bones, fat trimmed." },
    { name: "duck", display: "Cooked Duck", pets: ["dog", "cat"], description: "Safe when cooked plain. Remove skin (very high fat) and all bones." },
    { name: "venison", display: "Venison (Deer Meat)", pets: ["dog", "cat"], description: "Lean, novel protein. Great for pets with common protein allergies." },
    { name: "rabbit", display: "Cooked Rabbit", pets: ["dog", "cat"], description: "Lean protein, excellent for dogs with food sensitivities." },
    { name: "sardine", display: "Sardines", pets: ["dog", "cat"], description: "Rich in omega-3s and lower in mercury than tuna. Serve plain, canned in water." },
    { name: "cod", display: "Cooked Cod", pets: ["dog", "cat"], description: "Mild white fish, low in fat, high in protein. Great for sensitive stomachs." },
    { name: "tilapia", display: "Cooked Tilapia", pets: ["dog", "cat"], description: "Safe, mild white fish. Serve plain, fully cooked, deboned." },
    { name: "whitefish", display: "Cooked Whitefish", pets: ["dog", "cat"], description: "Easily digestible protein source. Common in quality pet foods." },
    { name: "cottage cheese", display: "Cottage Cheese", pets: ["dog", "cat"], description: "Lower in lactose than most dairy. Good protein source in small amounts." },
    { name: "yogurt", display: "Plain Yogurt", pets: ["dog", "cat"], description: "Plain, unsweetened yogurt with live cultures may aid digestion. Avoid flavored or sweetened varieties." },
    { name: "strawberry", display: "Strawberries", pets: ["dog", "cat"], description: "Rich in antioxidants, vitamin C, and fiber. Great occasional treat." },
    { name: "raspberry", display: "Raspberries", pets: ["dog", "cat"], description: "Safe in small amounts. Contains trace natural xylitol, so keep portions small." },
    { name: "blackberry", display: "Blackberries", pets: ["dog", "cat"], description: "Safe and antioxidant-rich. Good occasional treat in small amounts." },
    { name: "cantaloupe", display: "Cantaloupe", pets: ["dog", "cat"], description: "Safe and hydrating. Remove rind and seeds. High in sugar, so feed in moderation." },
    { name: "honeydew", display: "Honeydew Melon", pets: ["dog", "cat"], description: "Safe in small amounts. Remove rind and seeds. Good hydrating treat." },
    { name: "celery", display: "Celery", pets: ["dog", "cat"], description: "Low calorie, good for overweight pets. Cut into small pieces to prevent choking on strings." },
    { name: "zucchini", display: "Zucchini", pets: ["dog", "cat"], description: "Safe raw or cooked. Very low calorie and good for weight management." },
    { name: "lettuce", display: "Lettuce", pets: ["dog", "cat"], description: "Safe and very low calorie. Mostly water with minimal nutrition. Good for overweight pets." },
    { name: "cabbage", display: "Cabbage", pets: ["dog", "cat"], description: "Safe in small amounts, cooked or raw. Can cause gas if fed too much." },
    { name: "cauliflower", display: "Cauliflower", pets: ["dog", "cat"], description: "Safe in small amounts. Can cause gas. Serve plain, steamed or raw." },
    { name: "bell pepper", display: "Bell Pepper", pets: ["dog", "cat"], description: "Safe and nutritious. Red bell peppers have the most vitamins. Remove seeds and stem." },
    { name: "asparagus", display: "Asparagus", pets: ["dog", "cat"], description: "Safe when cooked. Raw asparagus is very tough to digest. No seasoning." },
    { name: "brussels sprout", display: "Brussels Sprouts", pets: ["dog"], description: "Safe cooked in small amounts. Can cause significant gas. Serve plain." },
    { name: "kale", display: "Kale", pets: ["dog"], description: "Safe in small amounts. Contains calcium oxalates and isothiocyanates — too much can cause GI upset." },
    { name: "squash", display: "Squash (Butternut, Acorn)", pets: ["dog", "cat"], description: "Cooked squash is safe and nutritious. Remove seeds and skin. Good fiber source." },
    { name: "parsley", display: "Parsley", pets: ["dog"], description: "Safe in small amounts and can freshen breath. Avoid spring parsley (toxic to cats in large amounts)." },
    { name: "turmeric", display: "Turmeric", pets: ["dog"], description: "Safe in small amounts and has anti-inflammatory properties. Often used in holistic pet care." },
    { name: "quinoa", display: "Quinoa", pets: ["dog", "cat"], description: "Safe, high-protein grain alternative. Rinse well before cooking to remove saponins." },
    { name: "brown rice", display: "Brown Rice", pets: ["dog", "cat"], description: "More nutritious than white rice. Higher fiber, takes longer to digest." },
    { name: "barley", display: "Barley", pets: ["dog", "cat"], description: "Safe cooked grain. Good source of fiber and nutrients." },
    { name: "chicken breast", display: "Chicken Breast (plain)", pets: ["dog", "cat"], description: "Lean, high-quality protein. Boil or bake without seasoning. Remove skin and bones." },
    { name: "ground beef", display: "Lean Ground Beef", pets: ["dog", "cat"], description: "Cook thoroughly and drain excess fat. Choose lean (90%+) for pets." },
    { name: "white fish", display: "White Fish", pets: ["dog", "cat"], description: "Mild, easily digestible protein. Great for pets with sensitive stomachs." },
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
    if (ingredient.name === "noodle") searchTerms.push("noodles", "ramen", "udon", "soba", "spaghetti", "linguine", "fettuccine", "lo mein", "chow mein", "vermicelli", "macaroni", "pho");
    if (ingredient.name === "pasta") searchTerms.push("penne", "rigatoni", "fusilli", "orzo", "lasagna", "ravioli", "tortellini");
    if (ingredient.name === "potato") searchTerms.push("potatoes", "mashed potato", "baked potato");
    if (ingredient.name === "french fry") searchTerms.push("french fries", "fries", "fried potato", "fried potatoes", "tater tot", "tater tots", "hash brown");
    if (ingredient.name === "chip") searchTerms.push("chips", "crisps", "potato chip", "potato chips", "tortilla chip", "tortilla chips");
    if (ingredient.name === "hot dog") searchTerms.push("hotdog", "hot dogs", "hotdogs", "frankfurter", "wiener");
    if (ingredient.name === "ice cream") searchTerms.push("icecream", "gelato", "frozen yogurt", "froyo");
    if (ingredient.name === "candy") searchTerms.push("candies", "sweets", "gummy", "gummies", "gummy bear", "lollipop", "taffy", "caramel");
    if (ingredient.name === "cookie") searchTerms.push("cookies", "biscuit", "biscuits");
    if (ingredient.name === "donut") searchTerms.push("donuts", "doughnut", "doughnuts");
    if (ingredient.name === "pizza") searchTerms.push("pizzas");
    if (ingredient.name === "taco") searchTerms.push("tacos", "burrito", "burritos", "quesadilla");
    if (ingredient.name === "bread") searchTerms.push("breads", "baguette", "sourdough", "brioche", "croissant", "roll", "bun");
    if (ingredient.name === "cake") searchTerms.push("cakes", "cupcake", "cupcakes", "muffin", "muffins", "brownie", "brownies");
    if (ingredient.name === "garlic bread") searchTerms.push("garlic toast", "garlic knot", "garlic knots");
    if (ingredient.name === "bacon") searchTerms.push("bacons", "bacon bit", "bacon bits");
    if (ingredient.name === "sausage") searchTerms.push("sausages", "bratwurst", "kielbasa", "chorizo", "bologna");
    if (ingredient.name === "jerky") searchTerms.push("beef jerky", "turkey jerky", "dried meat");
    if (ingredient.name === "ham") searchTerms.push("prosciutto", "deli meat", "lunch meat", "cold cut", "cold cuts");
    if (ingredient.name === "wild mushroom") searchTerms.push("wild mushrooms", "toadstool");
    if (ingredient.name === "bell pepper") searchTerms.push("bell peppers", "sweet pepper", "capsicum");
    if (ingredient.name === "green bean") searchTerms.push("green beans", "string bean", "string beans", "snap bean");
    if (ingredient.name === "sweet potato") searchTerms.push("sweet potatoes", "yam", "yams");
    if (ingredient.name === "brussels sprout") searchTerms.push("brussels sprouts", "brussel sprout", "brussel sprouts");
    if (ingredient.name === "peanut butter") searchTerms.push("pb");
    if (ingredient.name === "ground beef") searchTerms.push("minced beef", "hamburger", "burger meat", "mince");
    if (ingredient.name === "chicken breast") searchTerms.push("chicken tender", "chicken tenders", "chicken strip", "chicken strips");
    if (ingredient.name === "cottage cheese") searchTerms.push("ricotta");
    if (ingredient.name === "yogurt") searchTerms.push("yoghurt", "greek yogurt");
    if (ingredient.name === "soy sauce") searchTerms.push("shoyu", "tamari");
    if (ingredient.name === "mayo") searchTerms.push("mayonnaise");
    if (ingredient.name === "hop") searchTerms.push("hops");
    if (ingredient.name === "marijuana") searchTerms.push("weed", "pot", "thc", "edible", "edibles");
    if (ingredient.name === "tobacco") searchTerms.push("cigarette", "cigarettes", "nicotine", "cigar");
    if (ingredient.name === "soda") searchTerms.push("cola", "coke", "pepsi", "soft drink", "pop");
    if (ingredient.name === "tea") searchTerms.push("green tea", "black tea", "iced tea");
    if (ingredient.name === "coconut water") searchTerms.push("coconut milk");
    if (ingredient.name === "star fruit") searchTerms.push("starfruit", "carambola");
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
        <meta name="description" content="Instantly check if food ingredients are safe for your dog or cat. Free tool with 200+ ingredients database. No sign-up required." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CanMyPetEat — Is This Food Safe for My Pet?" />
        <meta property="og:description" content="Paste any ingredient list and instantly know if it's safe for your dog or cat. Free, no sign-up, 200+ ingredients checked." />
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
                <p style={{ margin:"0 0 8px 0" }}><strong style={{ color:"#e2e8f0" }}>Paste or type ingredients</strong> from any pet food label, human food, or treat. We check them against a veterinary-sourced database of 200+ known toxic, risky, and safe ingredients.</p>
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
                {["200+ ingredients", "Dogs & Cats", "No sign-up", "100% free"].map((f) => (
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
