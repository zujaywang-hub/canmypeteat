import { useState, useRef, useCallback } from "react";
import Head from "next/head";
import CN from "../lib/cn";

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
    { name: "melon", display: "Melon", pets: ["dog", "cat"], description: "Safe in small amounts. Remove rind and seeds. Hydrating treat but high in sugar." },
    { name: "coconut flesh", display: "Coconut Flesh", pets: ["dog", "cat"], description: "Small amounts safe. High in fat so feed sparingly." },
    { name: "seaweed", display: "Plain Seaweed / Nori", pets: ["dog", "cat"], description: "Unseasoned nori is safe and nutritious. Avoid seasoned/salted varieties." },
    { name: "edamame", display: "Edamame (plain)", pets: ["dog"], description: "Plain, unsalted edamame is safe. Good protein source. Remove from pod for small dogs." },
    { name: "tofu", display: "Tofu (plain)", pets: ["dog", "cat"], description: "Plain tofu in small amounts is safe. Good protein for dogs with meat allergies." },
    { name: "guava", display: "Guava", pets: ["dog", "cat"], description: "Safe in small amounts. Rich in vitamin C and fiber. Remove seeds (may cause constipation)." },
    { name: "dragon fruit", display: "Dragon Fruit (Pitaya)", pets: ["dog", "cat"], description: "Safe in small amounts. Low calorie, high in fiber and antioxidants. Remove skin before serving." },
    { name: "lychee", display: "Lychee (flesh only)", pets: ["dog", "cat"], description: "Flesh is safe in small amounts. ALWAYS remove skin and seed. Seeds contain toxins and are a choking hazard." },
    { name: "wax apple", display: "Wax Apple", pets: ["dog", "cat"], description: "Safe in small amounts. Low calorie and hydrating. Remove seeds." },
    { name: "passion fruit", display: "Passion Fruit (flesh only)", pets: ["dog", "cat"], description: "Flesh and juice are safe in small amounts. Seeds are safe in small quantities. Remove rind." },
  ],
  caution_extra: [],
};

// Additional caution items
INGREDIENT_DB.caution.push(
  { name: "longan", display: "Longan", pets: ["dog", "cat"], severity: "low",
    description: "Flesh is safe in small amounts but very high in sugar. ALWAYS remove skin and seed — seeds are a choking hazard and contain saponins.",
    symptoms: "Seed: choking, intestinal blockage. Flesh: GI upset from too much sugar" },
  { name: "durian", display: "Durian", pets: ["dog", "cat"], severity: "moderate",
    description: "Flesh in very small amounts is not toxic, but extremely high in fat and sugar. Seeds are toxic. The strong smell often deters pets.",
    symptoms: "Diarrhea, vomiting, bloating from high fat. Seeds: potential toxicity" },
  { name: "custard apple", display: "Custard Apple / Sugar Apple", pets: ["dog", "cat"], severity: "moderate",
    description: "Flesh is okay in tiny amounts. Seeds are TOXIC — contain annonacin which is neurotoxic. Skin is also not safe.",
    symptoms: "Seeds: neurological damage, vomiting. Flesh in excess: GI upset from high sugar" },
  { name: "jackfruit", display: "Jackfruit", pets: ["dog", "cat"], severity: "low",
    description: "Flesh is safe in small amounts. Very high in sugar and fiber. Remove seeds (contain trypsin inhibitors) and rind.",
    symptoms: "GI upset, diarrhea from excess fiber or sugar" },
  { name: "taro", display: "Taro (cooked only)", pets: ["dog", "cat"], severity: "moderate",
    description: "MUST be fully cooked. Raw taro contains calcium oxalate crystals that cause severe mouth and throat irritation. Cooked taro in small amounts is safe.",
    symptoms: "Raw: intense mouth burning, drooling, swelling, difficulty swallowing. Cooked: safe in small amounts" },
  { name: "bamboo shoot", display: "Bamboo Shoot (cooked)", pets: ["dog", "cat"], severity: "low",
    description: "Cooked bamboo shoots are safe in small amounts. Raw bamboo shoots contain cyanogenic glycosides. Always cook thoroughly.",
    symptoms: "Raw: potential cyanide toxicity. Cooked: generally safe" },
  { name: "stinky tofu", display: "Stinky Tofu", pets: ["dog", "cat"], severity: "moderate",
    description: "High in sodium and often deep-fried with heavy seasonings. The fermentation process and spices make it unsuitable for pets.",
    symptoms: "GI upset, excessive thirst from sodium, diarrhea" },
  { name: "bubble tea", display: "Bubble Tea / Boba", pets: ["dog", "cat"], severity: "moderate",
    description: "Contains caffeine (tea), extremely high sugar, and tapioca pearls are a choking hazard. Milk-based versions add lactose issues.",
    symptoms: "Caffeine toxicity, GI upset, choking on boba pearls" },
  { name: "moon cake", display: "Moon Cake / Mooncake", pets: ["dog", "cat"], severity: "moderate",
    description: "Extremely high in sugar and fat. Often contains lotus seed paste, egg yolk, and nuts. Some contain xylitol or raisins.",
    symptoms: "GI upset, pancreatitis from high fat. Check for raisins/xylitol" },
  { name: "pork floss", display: "Pork Floss (肉鬆)", pets: ["dog", "cat"], severity: "low",
    description: "High in sodium and often contains sugar and soy sauce. Unseasoned dried meat in small amounts is safer.",
    symptoms: "Excessive thirst from sodium, GI upset" },
);

delete INGREDIENT_DB.caution_extra;

// Brand info database
const BRAND_DB = {
  "royal canin": { d:"Royal Canin 皇家", type:"cat/dog", rating:"B", desc:"Major pet food brand owned by Mars. Uses corn, wheat, and by-products as fillers in some lines. Higher-end prescription diets are well-formulated. Main concerns: corn/wheat as primary ingredients in some formulas, use of by-product meal, BHA preservative in some products.", descCn:"Mars集團旗下主要寵物食品品牌。部分產品線使用玉米、小麥和副產品作為填充物。高端處方飼料配方良好。主要疑慮：部分配方以玉米/小麥為主要成分、使用副產品粉、部分產品含BHA防腐劑。" },
  "whiskas": { d:"Whiskas 偉嘉", type:"cat", rating:"C", desc:"Budget cat food brand by Mars. Heavy use of grains, by-products, and artificial colors. Low meat content compared to premium brands. Contains artificial colors (Red 40, Yellow 5) that provide no nutritional value.", descCn:"Mars旗下平價貓糧品牌。大量使用穀物、副產品和人工色素。肉類含量低於高檔品牌。含無營養價值的人工色素（紅色40號、黃色5號）。" },
  "hills": { d:"Hill's 希爾思", type:"cat/dog", rating:"B+", desc:"Science-based pet food brand. Prescription diets are highly regarded by vets. Regular lines use some fillers. Science Diet line is a solid choice. Main ingredients are generally transparent.", descCn:"以科學為基礎的寵物食品品牌。處方飼料深受獸醫推崇。一般產品線使用部分填充物。Science Diet系列是不錯的選擇。成分通常較透明。" },
  "purina": { d:"Purina 普瑞納", type:"cat/dog", rating:"B-", desc:"Nestlé-owned brand with wide range from budget to premium. Pro Plan line is decent. Some products contain artificial colors, by-products, and corn gluten meal. Quality varies significantly by product line.", descCn:"雀巢旗下品牌，產品線從平價到高檔都有。Pro Plan系列品質不錯。部分產品含人工色素、副產品和玉米麩質。品質因產品線差異很大。" },
  "fancy feast": { d:"Fancy Feast", type:"cat", rating:"B-", desc:"Purina's wet cat food brand. Classic pâté line has decent meat content. Some varieties contain by-products and artificial colors. Gravy lovers line is higher in carbs. Overall acceptable for wet food.", descCn:"Purina的濕貓糧品牌。經典慕斯系列肉類含量不錯。部分口味含副產品和人工色素。肉汁系列碳水較高。整體作為濕糧可接受。" },
  "sheba": { d:"Sheba", type:"cat", rating:"B", desc:"Mars premium wet cat food brand. Generally higher meat content than Whiskas. Some varieties have cleaner ingredient lists. A decent mid-range wet food option.", descCn:"Mars旗下高檔濕貓糧品牌。肉類含量通常高於偉嘉。部分口味成分較乾淨。中檔濕糧不錯的選擇。" },
  "iams": { d:"IAMS 愛慕思", type:"cat/dog", rating:"B", desc:"Mars-owned brand. Uses real meat as first ingredient in most formulas. Some products contain corn and by-products. ProActive Health line is a reasonable choice for everyday feeding.", descCn:"Mars旗下品牌。大多數配方以真正肉類為第一成分。部分產品含玉米和副產品。ProActive Health系列是日常餵食的合理選擇。" },
  "blue buffalo": { d:"Blue Buffalo 藍饌", type:"cat/dog", rating:"A-", desc:"Premium brand focusing on natural ingredients. No by-products, corn, wheat, or soy. Uses real meat as first ingredient. LifeSource Bits contain antioxidants. One of the better mainstream options.", descCn:"主打天然成分的高檔品牌。不含副產品、玉米、小麥或大豆。以真正肉類為第一成分。LifeSource Bits含抗氧化物。主流品牌中較好的選擇之一。" },
  "orijen": { d:"Orijen 渴望", type:"cat/dog", rating:"A", desc:"Ultra-premium biologically appropriate food. Very high meat content (75-85%). Uses fresh and raw animal ingredients. No grains, potatoes, or plant protein concentrates. One of the highest quality commercial pet foods available.", descCn:"超高檔生物學適當飼料。肉類含量極高（75-85%）。使用新鮮和生的動物成分。不含穀物、馬鈴薯或植物蛋白濃縮物。市面上品質最高的商業寵物食品之一。" },
  "acana": { d:"ACANA 愛肯拿", type:"cat/dog", rating:"A-", desc:"Premium brand by the makers of Orijen. High meat content (50-75%). Uses regionally sourced ingredients. Limited carbohydrate content. Good balance of quality and value.", descCn:"與Orijen同廠的高檔品牌。肉類含量高（50-75%）。使用在地採購的原料。碳水化合物含量低。品質與價值兼具。" },
  "friskies": { d:"Friskies 喜躍", type:"cat", rating:"C", desc:"Budget Purina cat food. High in grains and by-products. Contains artificial colors and flavors. Low meat content. Acceptable as occasional wet food but not ideal for primary diet.", descCn:"Purina平價貓糧。穀物和副產品含量高。含人工色素和香料。肉類含量低。偶爾作為濕糧可接受但不適合作為主食。" },
  "meow mix": { d:"Meow Mix", type:"cat", rating:"C", desc:"Budget cat food. First ingredients are often corn and by-products. Contains artificial colors. Low in quality protein. Not recommended as a primary diet.", descCn:"平價貓糧。第一成分通常是玉米和副產品。含人工色素。優質蛋白質含量低。不建議作為主食。" },
};

const BRAND_ALIASES = {
  "皇家":"royal canin", "皇家貓糧":"royal canin", "皇家狗糧":"royal canin", "royal canin":"royal canin",
  "偉嘉":"whiskas", "伟嘉":"whiskas", "whiskas":"whiskas",
  "希爾思":"hills", "希尔思":"hills", "hills":"hills", "hill's":"hills", "science diet":"hills",
  "普瑞納":"purina", "普瑞纳":"purina", "purina":"purina", "pro plan":"purina",
  "fancy feast":"fancy feast", "珍致":"fancy feast",
  "sheba":"sheba",
  "愛慕思":"iams", "iams":"iams",
  "藍饌":"blue buffalo", "蓝馔":"blue buffalo", "blue buffalo":"blue buffalo", "blue":"blue buffalo",
  "渴望":"orijen", "orijen":"orijen",
  "愛肯拿":"acana", "acana":"acana",
  "喜躍":"friskies", "friskies":"friskies",
  "meow mix":"meow mix",
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

  // Check for brand names first
  let brandMatch = null;
  for (const [alias, brandKey] of Object.entries(BRAND_ALIASES)) {
    if (lowerText.includes(alias.toLowerCase())) {
      brandMatch = { key: brandKey, ...BRAND_DB[brandKey] };
      break;
    }
  }

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
    if (ingredient.name === "melon") searchTerms.push("melons", "honeydew melon", "galia melon", "rock melon", "canary melon");
    if (ingredient.name === "coconut flesh") searchTerms.push("coconut meat", "fresh coconut");
    if (ingredient.name === "seaweed") searchTerms.push("nori", "kelp", "kombu", "wakame");
    if (ingredient.name === "edamame") searchTerms.push("soybean", "soybeans", "green soybean");
    if (ingredient.name === "tofu") searchTerms.push("bean curd", "soy curd");
    if (ingredient.name === "guava") searchTerms.push("guavas", "pink guava");
    if (ingredient.name === "dragon fruit") searchTerms.push("dragonfruit", "pitaya", "pitahaya");
    if (ingredient.name === "lychee") searchTerms.push("litchi", "lichee", "lichi");
    if (ingredient.name === "wax apple") searchTerms.push("java apple", "rose apple", "bell fruit");
    if (ingredient.name === "passion fruit") searchTerms.push("passionfruit", "maracuya", "lilikoi");
    if (ingredient.name === "longan") searchTerms.push("longans", "dragon eye fruit");
    if (ingredient.name === "durian") searchTerms.push("durians", "king of fruits");
    if (ingredient.name === "custard apple") searchTerms.push("sugar apple", "sweetsop", "atemoya", "cherimoya");
    if (ingredient.name === "jackfruit") searchTerms.push("jack fruit");
    if (ingredient.name === "taro") searchTerms.push("taro root", "dasheen", "eddoe");
    if (ingredient.name === "bamboo shoot") searchTerms.push("bamboo shoots", "menma");
    if (ingredient.name === "stinky tofu") searchTerms.push("fermented tofu", "chou doufu");
    if (ingredient.name === "bubble tea") searchTerms.push("boba tea", "boba", "milk tea", "tapioca tea", "pearl milk tea");
    if (ingredient.name === "moon cake") searchTerms.push("mooncake", "mid-autumn cake");
    if (ingredient.name === "pork floss") searchTerms.push("meat floss", "rousong", "pork sung", "fish floss");
    // Chinese / 中文 search terms
    const cnMap = {
      "onion": ["洋蔥","洋葱"], "garlic": ["大蒜","蒜頭","蒜头","蒜"], "leek": ["韭菜","韭蔥","韭葱"],
      "chive": ["細香蔥","韭黃","韭黄"], "shallot": ["紅蔥頭","红葱头","珠蔥"], "scallion": ["蔥","葱","青蔥","青葱"],
      "chocolate": ["巧克力","朱古力"], "cocoa": ["可可","可可粉"], "theobromine": ["可可鹼","可可碱"],
      "caffeine": ["咖啡因"], "coffee": ["咖啡","咖啡豆"],
      "xylitol": ["木糖醇"], "birch sugar": ["樺糖","桦糖"],
      "grape": ["葡萄"], "raisin": ["葡萄乾","葡萄干"], "sultana": ["無核葡萄乾","无核葡萄干"], "currant": ["醋栗","黑加侖"],
      "macadamia": ["夏威夷豆","澳洲堅果","澳洲坚果","夏威夷果"],
      "alcohol": ["酒","酒精"], "ethanol": ["乙醇"], "beer": ["啤酒"], "wine": ["葡萄酒","紅酒","红酒","白酒"],
      "yeast dough": ["生麵團","生面团","發酵麵團"], "nutmeg": ["肉豆蔻","豆蔻"],
      "hop": ["啤酒花"], "marijuana": ["大麻","大麻草"], "cannabis": ["大麻","THC"],
      "tobacco": ["菸草","烟草","香菸","香烟"], "star fruit": ["楊桃","杨桃"],
      "wild mushroom": ["野菇","野蘑菇","毒蘑菇"], "persimmon": ["柿子"],
      "avocado": ["酪梨","牛油果","鱷梨","鳄梨"], "salt": ["鹽","盐","食鹽","食盐"],
      "dairy": ["乳製品","乳制品","奶製品"], "milk": ["牛奶","鮮奶","鲜奶","奶"],
      "cheese": ["起司","芝士","乳酪","奶酪"], "citrus": ["柑橘","柑橘類"],
      "lemon": ["檸檬","柠檬"], "lime": ["萊姆","青檸","青柠"],
      "raw egg": ["生蛋","生雞蛋"], "raw meat": ["生肉"], "raw fish": ["生魚","生鱼","生魚片","刺身"],
      "bone": ["骨頭","骨头","雞骨","鸡骨"], "cherry": ["櫻桃","樱桃"],
      "coconut": ["椰子","椰肉"], "corn": ["玉米"], "wheat": ["小麥","小麦","麵粉","面粉"],
      "soy": ["大豆","黃豆","黄豆","豆漿","豆浆"],
      "bacon": ["培根","煙肉","烟肉"], "ham": ["火腿"], "sausage": ["香腸","香肠","臘腸","腊肠"],
      "hot dog": ["熱狗","热狗"], "pepperoni": ["義式臘腸","意式腊肠"], "salami": ["薩拉米","莎樂美"],
      "jerky": ["肉乾","肉干","牛肉乾","牛肉干"], "liver": ["肝","肝臟","肝脏","雞肝","鸡肝"],
      "pizza": ["披薩","披萨","比薩"], "french fry": ["薯條","薯条","炸薯條"],
      "chip": ["洋芋片","薯片","餅乾","饼干"], "popcorn": ["爆米花"],
      "bread": ["麵包","面包","吐司"], "toast": ["吐司","烤麵包","烤面包","土司"],
      "noodle": ["麵","面","麵條","面条","泡麵","泡面","拉麵","拉面","烏龍麵","乌龙面","蕎麥麵","荞麦面","意大利麵","意大利面","米粉","河粉","冬粉","粉絲","粉丝"],
      "pasta": ["義大利麵","意大利面","通心粉","筆管麵","千層麵"],
      "potato": ["馬鈴薯","马铃薯","土豆","薯仔"], "tomato": ["番茄","西紅柿","西红柿"],
      "garlic bread": ["蒜味麵包","蒜味面包","大蒜麵包"],
      "ice cream": ["冰淇淋","雪糕","冰棒","霜淇淋"],
      "candy": ["糖果","軟糖","软糖","糖"], "cookie": ["餅乾","饼干","曲奇"],
      "cake": ["蛋糕","杯子蛋糕","馬芬","布朗尼"], "donut": ["甜甜圈","冬甩"],
      "cinnamon": ["肉桂","桂皮"], "ginger": ["薑","姜","生薑","生姜"],
      "honey": ["蜂蜜","蜜糖"], "mustard": ["芥末","黃芥末","黄芥末","芥菜"],
      "pepper": ["胡椒","黑胡椒","辣椒"], "jalapeno": ["墨西哥辣椒","哈拉佩紐"],
      "almond": ["杏仁","杏仁果"], "walnut": ["核桃","胡桃"],
      "pistachio": ["開心果","开心果"], "cashew": ["腰果"],
      "pecan": ["碧根果","美國山核桃","山核桃"],
      "pineapple": ["鳳梨","凤梨","菠蘿","菠萝"], "orange": ["橘子","柳橙","橙子","柳丁"],
      "peach": ["桃子","水蜜桃"], "plum": ["李子","梅子"],
      "kiwi": ["奇異果","奇异果","獼猴桃","猕猴桃"], "papaya": ["木瓜"],
      "fig": ["無花果","无花果"], "pomegranate": ["石榴"],
      "taco": ["塔可","墨西哥捲餅","墨西哥卷饼"],
      "crab": ["螃蟹","蟹","蟹肉"], "lobster": ["龍蝦","龙虾"],
      "squid": ["魷魚","鱿鱼","花枝","小卷","透抽"], "oyster": ["牡蠣","牡蛎","生蠔","生蚝"],
      "clam": ["蛤蜊","蛤","文蛤","海瓜子"],
      "tea": ["茶","綠茶","绿茶","紅茶","红茶","烏龍茶","乌龙茶"],
      "soda": ["汽水","可樂","可乐"], "juice": ["果汁"],
      "coconut water": ["椰子水","椰奶"],
      "butter": ["奶油","牛油","黃油","黄油"], "mayo": ["美乃滋","蛋黃醬","蛋黄酱"],
      "ketchup": ["番茄醬","番茄酱"], "soy sauce": ["醬油","酱油","豉油"],
      "chicken": ["雞肉","鸡肉","雞","鸡"], "turkey": ["火雞","火鸡","火雞肉"],
      "beef": ["牛肉","牛"], "salmon": ["鮭魚","鲑鱼","三文魚","三文鱼"],
      "tuna": ["鮪魚","鲔鱼","金槍魚","金枪鱼","吞拿魚"],
      "shrimp": ["蝦","虾","蝦子","虾子","蝦仁","虾仁"],
      "carrot": ["胡蘿蔔","胡萝卜","紅蘿蔔","红萝卜"],
      "green bean": ["四季豆","豆角","綠豆角"],
      "pumpkin": ["南瓜"], "sweet potato": ["地瓜","番薯","甘薯"],
      "blueberry": ["藍莓","蓝莓"], "watermelon": ["西瓜"],
      "apple": ["蘋果","苹果"], "banana": ["香蕉"],
      "rice": ["白飯","白饭","米飯","米饭","白米","米"],
      "oatmeal": ["燕麥","燕麦","麥片","麦片"],
      "peanut butter": ["花生醬","花生酱"],
      "egg": ["蛋","雞蛋","鸡蛋","鴨蛋","鹌鹑蛋"],
      "cucumber": ["小黃瓜","小黄瓜","黃瓜","黄瓜"],
      "broccoli": ["花椰菜","西蘭花","西兰花","綠花菜"],
      "spinach": ["菠菜","菠薐菜"],
      "pea": ["豌豆","碗豆","青豆"],
      "cranberry": ["蔓越莓","小紅莓"],
      "mango": ["芒果","檬果"],
      "pear": ["梨子","梨","水梨"],
      "pork": ["豬肉","猪肉","豬","猪"], "lamb": ["羊肉","小羊肉"],
      "duck": ["鴨肉","鸭肉","鴨","鸭"], "venison": ["鹿肉"],
      "rabbit": ["兔肉","兔"],
      "sardine": ["沙丁魚","沙丁鱼"], "cod": ["鱈魚","鳕鱼"],
      "tilapia": ["吳郭魚","吴郭鱼","羅非魚","罗非鱼","台灣鯛"],
      "cottage cheese": ["茅屋起司","卡達起司"],
      "yogurt": ["優格","优格","優酪乳","酸奶"],
      "strawberry": ["草莓"], "raspberry": ["覆盆子","覆盆莓"],
      "blackberry": ["黑莓"], "cantaloupe": ["哈密瓜","香瓜"],
      "honeydew": ["蜜瓜","白蘭瓜"],
      "celery": ["芹菜","西洋芹"], "zucchini": ["櫛瓜","栉瓜","西葫蘆","西葫芦"],
      "lettuce": ["生菜","萵苣","莴苣","美生菜"],
      "cabbage": ["高麗菜","高丽菜","包心菜","捲心菜","圓白菜"],
      "cauliflower": ["白花椰菜","花菜","菜花"],
      "bell pepper": ["甜椒","彩椒","青椒"],
      "asparagus": ["蘆筍","芦笋"],
      "brussels sprout": ["球芽甘藍","抱子甘蓝"],
      "kale": ["羽衣甘藍","羽衣甘蓝"],
      "squash": ["南瓜","冬瓜","栗子南瓜"],
      "parsley": ["巴西里","荷蘭芹","洋香菜","欧芹"],
      "turmeric": ["薑黃","姜黄"],
      "quinoa": ["藜麥","藜麦"],
      "brown rice": ["糙米","玄米"],
      "barley": ["大麥","大麦"],
      "chicken breast": ["雞胸肉","鸡胸肉"],
      "ground beef": ["牛絞肉","牛绞肉","碎牛肉","漢堡肉"],
      "white fish": ["白肉魚","白肉鱼"],
      "ethoxyquin": ["乙氧基喹"], "bha": ["丁基羥基茴香醚"],
      "bht": ["二丁基羥基甲苯"], "carrageenan": ["鹿角菜膠","卡拉膠"],
      "sodium nitrite": ["亞硝酸鈉","亚硝酸钠"],
      "propylene glycol": ["丙二醇"],
      "artificial color": ["人工色素","食用色素"],
      "melon": ["甜瓜","蜜瓜","哈密瓜","香瓜","美濃瓜"],
      "coconut flesh": ["椰肉","新鮮椰子"],
      "seaweed": ["海苔","海帶","昆布","裙帶菜","紫菜","海藻"],
      "edamame": ["毛豆","枝豆"],
      "tofu": ["豆腐","豆干","豆乾","板豆腐","嫩豆腐"],
      "guava": ["芭樂","芭乐","番石榴"],
      "dragon fruit": ["火龍果","火龙果","紅龍果","白龍果"],
      "lychee": ["荔枝","荔枝肉","妃子笑"],
      "wax apple": ["蓮霧","莲雾"],
      "passion fruit": ["百香果","西番蓮","西番莲"],
      "longan": ["龍眼","龙眼","桂圓","桂圆"],
      "durian": ["榴槤","榴莲","榴蓮"],
      "custard apple": ["釋迦","释迦","番荔枝","鳳梨釋迦"],
      "jackfruit": ["波羅蜜","波罗蜜","菠蘿蜜"],
      "taro": ["芋頭","芋头","芋","芋泥"],
      "bamboo shoot": ["竹筍","竹笋","筍","笋"],
      "stinky tofu": ["臭豆腐"],
      "bubble tea": ["珍珠奶茶","波霸奶茶","珍奶","奶茶","手搖飲","手摇饮"],
      "moon cake": ["月餅","月饼","蛋黃酥","鳳梨酥"],
      "pork floss": ["肉鬆","肉松","肉絲","魚鬆"],
    };
    const cnTerms = cnMap[ingredient.name];
    for (const term of searchTerms) {
      const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(lowerText)) { found.push(ingredient); matched.add(ingredient.name); break; }
    }
    // Chinese matching (no word boundaries needed for CJK)
    if (!matched.has(ingredient.name) && cnTerms) {
      for (const cn of cnTerms) {
        if (lowerText.includes(cn)) { found.push(ingredient); matched.add(ingredient.name); break; }
      }
    }
  }
  const order = { toxic: 0, caution: 1, safe: 2 };
  found.sort((a, b) => order[a.category] - order[b.category]);
  found.brandMatch = brandMatch;
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
function getScoreLabel(s, isCn) {
  if (isCn) return { A:"優秀 — 全部安全！", B:"良好 — 有小問題", C:"一般 — 有些疑慮", D:"差 — 有風險成分", F:"危險 — 發現有毒成分！" }[s] || "";
  return { A:"Excellent — All clear!", B:"Good — Minor concerns", C:"Fair — Several concerns", D:"Poor — Risky ingredients", F:"Dangerous — Toxic ingredients found!" }[s] || "";
}
function getCategoryStyle(c, isCn) {
  if (isCn) return { toxic: { icon:"🚫", label:"危險" }, caution: { icon:"⚠️", label:"注意" }, safe: { icon:"✅", label:"安全" } }[c] || { icon:"❓", label:"未知" };
  return { toxic: { icon:"🚫", label:"DANGEROUS" }, caution: { icon:"⚠️", label:"CAUTION" }, safe: { icon:"✅", label:"SAFE" } }[c] || { icon:"❓", label:"UNKNOWN" };
}
function hasChinese(text) { return /[\u4e00-\u9fff]/.test(text); }

export default function Home() {
  const [petType, setPetType] = useState("dog");
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeResult, setActiveResult] = useState(null);
  const [isCn, setIsCn] = useState(false);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const handleAnalyze = useCallback(() => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setActiveResult(null);
    setIsCn(hasChinese(inputText));
    setTimeout(() => {
      try {
        const found = analyzeIngredients(inputText, petType);
        setResults(found);
      } catch (e) {
        console.error("Analysis error:", e);
        const empty = [];
        empty.brandMatch = null;
        setResults(empty);
      }
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6NQKMZS5NH"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6NQKMZS5NH');`}} />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight:"100vh", background:"linear-gradient(165deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)", fontFamily:"'DM Sans', 'Segoe UI', sans-serif", color:"#f1f5f9", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"fixed", top:"-20%", right:"-10%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"fixed", bottom:"-15%", left:"-10%", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", opacity:0.03, backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize:"40px 40px" }} />

        <div style={{ maxWidth:"520px", margin:"0 auto", padding:"0 20px", position:"relative", zIndex:1 }}>
          <header style={{ textAlign:"center", paddingTop:"48px", paddingBottom:"12px", position:"relative" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"rgba(255,255,255,0.05)", borderRadius:"100px", padding:"6px 16px 6px 8px", marginBottom:"20px", border:"1px solid rgba(255,255,255,0.08)", fontSize:"13px", color:"#94a3b8", letterSpacing:"0.5px" }}>
              <span style={{ fontSize:"18px" }}>🛡️</span> {isCn ? "免費寵物食品安全工具" : "FREE PET FOOD SAFETY TOOL"}
            </div>
            <div style={{ position:"absolute", top:"16px", right:"0px" }}>
              <button onClick={() => setIsCn(!isCn)} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px", color:"#94a3b8", fontSize:"12px", padding:"6px 12px", cursor:"pointer", fontFamily:"'DM Sans', sans-serif" }}>
                {isCn ? "EN" : "中文"}
              </button>
            </div>
            <h1 style={{ fontFamily:"'Fraunces', Georgia, serif", fontSize:"38px", fontWeight:700, lineHeight:1.1, margin:"0 0 12px 0", background:"linear-gradient(135deg, #f1f5f9 0%, #38bdf8 50%, #a78bfa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              CanMyPetEat
            </h1>
            <p style={{ fontSize:"16px", color:"#94a3b8", lineHeight:1.6, margin:"0 0 8px 0", maxWidth:"360px", marginLeft:"auto", marginRight:"auto" }}>
              {isCn ? "立即檢查食物成分是否對您的狗或貓安全。" : "Check if food ingredients are safe for your dog or cat — instantly."}
            </p>
            <button onClick={() => setShowInfo(!showInfo)} style={{ background:"none", border:"none", color:"#64748b", fontSize:"13px", cursor:"pointer", padding:"4px 8px", textDecoration:"underline", textDecorationStyle:"dotted", textUnderlineOffset:"3px" }}>
              {isCn ? "它是如何運作的？" : "How does it work?"}
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
            {[{ id:"dog", emoji:"🐕", label: isCn ? "狗" : "Dog" }, { id:"cat", emoji:"🐈", label: isCn ? "貓" : "Cat" }, { id:"both", emoji:"🐾", label: isCn ? "兩者都" : "Both" }].map((pet) => (
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
              placeholder={"Paste ingredients or brand name here...\n\nExample: chicken, corn, wheat gluten, garlic powder, BHA, salt\nBrand: Royal Canin, Whiskas, Orijen...\n\n也可以輸入中文：巧克力、皇家、芭樂、荔枝"}
              style={{ width:"100%", minHeight:"120px", padding:"16px", background:"transparent", border:"none", outline:"none", color:"#e2e8f0", fontSize:"15px", lineHeight:1.7, fontFamily:"'DM Sans', sans-serif", resize:"vertical", boxSizing:"border-box" }} />
            <div style={{ display:"flex", gap:"8px", padding:"8px 12px" }}>
              <button onClick={handleAnalyze} disabled={!inputText.trim() || isAnalyzing}
                style={{ flex:1, padding:"14px 24px", borderRadius:"12px", border:"none", fontWeight:600, fontSize:"15px", fontFamily:"'DM Sans', sans-serif", cursor:"pointer", background: inputText.trim() ? "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)" : "rgba(255,255,255,0.06)", color: inputText.trim() ? "#fff" : "#475569", transition:"all 0.3s ease", opacity: isAnalyzing ? 0.7 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                {isAnalyzing ? (<><span style={{ display:"inline-block", width:"16px", height:"16px", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin 0.6s linear infinite" }} />{isCn ? "檢查中..." : "Checking..."}</>) : (<>🔍 {isCn ? "檢查安全" : "Check Safety"}</>)}
              </button>
              {inputText && (
                <button onClick={handleClear} style={{ padding:"14px 16px", borderRadius:"12px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)", color:"#94a3b8", cursor:"pointer", fontSize:"14px", fontFamily:"'DM Sans', sans-serif" }}>{isCn ? "清除" : "Clear"}</button>
              )}
            </div>
          </div>

          {/* Quick examples */}
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"32px" }}>
            <span style={{ fontSize:"12px", color:"#475569", padding:"6px 0" }}>Try:</span>
            {[{ label:"🍫 Chocolate", text:"chocolate, sugar, cocoa butter, milk" }, { label:"🧅 Onion soup", text:"onion, garlic, beef broth, butter, salt, bread, cheese" }, { label:"🐔 Chicken meal", text:"chicken breast, rice, carrots, peas, sweet potato" }, { label:"🏷️ Royal Canin", text:"Royal Canin" }].map((ex) => (
              <button key={ex.label} onClick={() => { setInputText(ex.text); setResults(null); }}
                style={{ padding:"6px 12px", borderRadius:"100px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)", color:"#94a3b8", cursor:"pointer", fontSize:"12px", fontFamily:"'DM Sans', sans-serif" }}>
                {ex.label}
              </button>
            ))}
          </div>

          {/* Results */}
          {results !== null && (
            <div ref={resultsRef} style={{ paddingBottom:"80px" }}>
              {/* Brand match card */}
              {results.brandMatch && (
                <div style={{ marginBottom:"20px", padding:"20px", borderRadius:"16px", background:"linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(168,85,247,0.06) 100%)", border:"1px solid rgba(56,189,248,0.2)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px" }}>
                    <span style={{ fontSize:"24px" }}>🏷️</span>
                    <span style={{ fontWeight:700, fontSize:"18px", color:"#e0f2fe" }}>{results.brandMatch.d}</span>
                    <span style={{ fontSize:"12px", fontWeight:700, padding:"3px 10px", borderRadius:"100px",
                      background: results.brandMatch.rating.startsWith("A") ? "rgba(34,197,94,0.2)" : results.brandMatch.rating.startsWith("B") ? "rgba(234,179,8,0.2)" : "rgba(239,68,68,0.2)",
                      color: results.brandMatch.rating.startsWith("A") ? "#86efac" : results.brandMatch.rating.startsWith("B") ? "#fcd34d" : "#fca5a5"
                    }}>{isCn ? "評分" : "Rating"}: {results.brandMatch.rating}</span>
                  </div>
                  <p style={{ margin:0, fontSize:"14px", lineHeight:1.7, color:"#cbd5e1" }}>
                    {isCn ? results.brandMatch.descCn : results.brandMatch.desc}
                  </p>
                  <p style={{ margin:"10px 0 0 0", fontSize:"12px", color:"#64748b" }}>
                    {isCn ? "💡 提示：貼上該飼料的完整成分表，可獲得更詳細的成分分析。" : "💡 Tip: Paste the full ingredient list from the label for a detailed ingredient-by-ingredient analysis."}
                  </p>
                </div>
              )}
              {score && (
                <div style={{ textAlign:"center", marginBottom:"24px", padding:"28px 24px", borderRadius:"20px", background:`linear-gradient(135deg, ${getScoreColor(score)}11 0%, ${getScoreColor(score)}05 100%)`, border:`1px solid ${getScoreColor(score)}33` }}>
                  <div style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"72px", height:"72px", borderRadius:"18px", background:`${getScoreColor(score)}20`, border:`2px solid ${getScoreColor(score)}55`, fontSize:"36px", fontWeight:700, color:getScoreColor(score), fontFamily:"'Fraunces', Georgia, serif", marginBottom:"12px" }}>{score}</div>
                  <div style={{ fontSize:"16px", fontWeight:600, color:getScoreColor(score), marginBottom:"4px" }}>{getScoreLabel(score, isCn)}</div>
                  <div style={{ fontSize:"13px", color:"#64748b" }}>{results.filter(r => r.category === "toxic").length} {isCn?"危險":"dangerous"} · {results.filter(r => r.category === "caution").length} {isCn?"注意":"caution"} · {results.filter(r => r.category === "safe").length} {isCn?"安全":"safe"}</div>
                </div>
              )}
              {results.length === 0 ? (
                <div style={{ textAlign:"center", padding:"32px 24px", borderRadius:"16px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize:"40px", marginBottom:"12px" }}>{results.brandMatch ? "📋" : "🤔"}</div>
                  <p style={{ color:"#94a3b8", margin:0, fontSize:"15px", lineHeight:1.6 }}>{
                    results.brandMatch
                      ? (isCn ? "已找到品牌資訊！請貼上該飼料包裝背面的完整成分表，即可獲得逐一成分安全分析和評分。" : "Brand info found! Paste the full ingredient list from the back of the package to get a detailed ingredient-by-ingredient safety analysis and score.")
                      : (isCn ? "未找到已知的食材。請嘗試輸入完整的寵物食品成分表，或輸入個別食物名稱。" : "No recognized ingredients found. Try pasting a complete ingredient list from a pet food label, or type individual food names.")
                  }</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                  {results.map((item, idx) => {
                    const sty = getCategoryStyle(item.category, isCn);
                    const cn = CN[item.name];
                    const displayName = isCn && cn ? `${cn.d}（${item.display}）` : item.display;
                    const desc = isCn && cn && cn.desc ? cn.desc : item.description;
                    const symp = isCn && cn && cn.sym ? cn.sym : item.symptoms;
                    const isExp = activeResult === idx;
                    return (
                      <button key={idx} onClick={() => setActiveResult(isExp ? null : idx)}
                        style={{ width:"100%", textAlign:"left", padding:"16px 18px", borderRadius:"14px", background: isExp ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", border:`1px solid ${item.category==="toxic" ? "rgba(239,68,68,0.3)" : item.category==="caution" ? "rgba(234,179,8,0.2)" : "rgba(34,197,94,0.2)"}`, cursor:"pointer", fontFamily:"'DM Sans', sans-serif", color:"#e2e8f0", transition:"all 0.2s ease" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                          <span style={{ fontSize:"20px", flexShrink:0 }}>{sty.icon}</span>
                          <div style={{ flex:1 }}>
                            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"2px", flexWrap:"wrap" }}>
                              <span style={{ fontWeight:600, fontSize:"15px" }}>{displayName}</span>
                              <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.5px", padding:"2px 8px", borderRadius:"100px", background: item.category==="toxic" ? "rgba(239,68,68,0.15)" : item.category==="caution" ? "rgba(234,179,8,0.15)" : "rgba(34,197,94,0.15)", color: item.category==="toxic" ? "#fca5a5" : item.category==="caution" ? "#fcd34d" : "#86efac" }}>{sty.label}</span>
                              {item.severity === "high" && <span style={{ fontSize:"10px", fontWeight:700, padding:"2px 6px", borderRadius:"100px", background:"rgba(239,68,68,0.2)", color:"#fca5a5" }}>HIGH RISK</span>}
                            </div>
                            <div style={{ fontSize:"13px", color:"#64748b" }}>
                              {item.category !== "safe"
                                ? (isCn ? `影響：${item.pets.map(p => p==="dog" ? "🐕 狗" : "🐈 貓").join(" & ")}` : `Affects: ${item.pets.map(p => p==="dog" ? "🐕 Dogs" : "🐈 Cats").join(" & ")}`)
                                : (isCn ? `安全：${item.pets.map(p => p==="dog" ? "🐕 狗" : "🐈 貓").join(" & ")}` : `Safe for: ${item.pets.map(p => p==="dog" ? "🐕 Dogs" : "🐈 Cats").join(" & ")}`)}
                            </div>
                          </div>
                          <span style={{ fontSize:"18px", color:"#475569", transform: isExp ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.2s ease" }}>▾</span>
                        </div>
                        {isExp && (
                          <div style={{ marginTop:"14px", paddingTop:"14px", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                            <p style={{ margin:"0 0 10px 0", fontSize:"14px", lineHeight:1.7, color:"#cbd5e1" }}>{desc}</p>
                            {symp && (
                              <div style={{ padding:"10px 14px", borderRadius:"10px", background:"rgba(239,68,68,0.06)", border:"1px solid rgba(239,68,68,0.1)" }}>
                                <div style={{ fontSize:"11px", fontWeight:700, color:"#f87171", letterSpacing:"0.5px", marginBottom:"4px" }}>{isCn ? "注意症狀" : "SYMPTOMS TO WATCH FOR"}</div>
                                <div style={{ fontSize:"13px", color:"#fca5a5", lineHeight:1.6 }}>{symp}</div>
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
            <>
            {/* Popular Searches Section */}
            <div style={{ maxWidth:"580px", margin:"0 auto", padding:"40px 20px 0" }}>
              <h2 style={{ fontSize:"18px", fontWeight:700, color:"#e2e8f0", textAlign:"center", marginBottom:"20px" }}>{isCn ? "🔥 熱門搜尋" : "🔥 Popular Searches"}</h2>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
                {[
                  { emoji:"🍫", title: isCn ? "巧克力/狗狗" : "Chocolate & Dogs", desc: isCn ? "可可鹼中毒" : "Theobromine toxicity", href:"/can-dogs-eat/chocolate", color:"#ef4444" },
                  { emoji:"🍇", title: isCn ? "葡萄/狗狗" : "Grapes & Dogs", desc: isCn ? "腎衰竭風險" : "Kidney failure risk", href:"/can-dogs-eat/grapes", color:"#ef4444" },
                  { emoji:"🌷", title: isCn ? "百合花/貓咪" : "Lilies & Cats", desc: isCn ? "#1 致命植物" : "#1 killer plant", href:"/pet-safety/cat-ate-lily", color:"#ef4444" },
                  { emoji:"🧅", title: isCn ? "洋蔥/貓咪" : "Onions & Cats", desc: isCn ? "破壞紅血球" : "Destroys red blood cells", href:"/pet-safety/cat-ate-onion", color:"#ef4444" },
                  { emoji:"🥑", title: isCn ? "酪梨/貓咪" : "Avocado & Cats", desc: isCn ? "波辛毒素" : "Persin toxin danger", href:"/can-cats-eat/avocado", color:"#eab308" },
                  { emoji:"🐟", title: isCn ? "鮪魚罐頭/貓咪" : "Tuna & Cats", desc: isCn ? "汞含量疑慮" : "Mercury concerns", href:"/can-cats-eat/tuna-canned", color:"#eab308" },
                  { emoji:"🫐", title: isCn ? "藍莓/狗狗" : "Blueberries & Dogs", desc: isCn ? "抗氧化超級食物" : "Antioxidant superfood", href:"/can-dogs-eat/blueberry", color:"#22c55e" },
                  { emoji:"🍉", title: isCn ? "西瓜/狗狗" : "Watermelon & Dogs", desc: isCn ? "補水夏日零食" : "Hydrating summer treat", href:"/can-dogs-eat/watermelon", color:"#22c55e" },
                ].map((item) => (
                  <a key={item.href} href={item.href} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"14px 16px", borderRadius:"14px", background:"rgba(255,255,255,0.03)", border:`1px solid ${item.color}22`, textDecoration:"none", color:"#e2e8f0", transition:"all 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = item.color + "44"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = item.color + "22"; }}>
                    <span style={{ fontSize:"24px", flexShrink:0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"13px", lineHeight:1.3 }}>{item.title}</div>
                      <div style={{ fontSize:"11px", color:"#64748b", marginTop:"2px" }}>{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Section */}
            <div style={{ maxWidth:"580px", margin:"0 auto", padding:"32px 20px 0" }}>
              <h2 style={{ fontSize:"18px", fontWeight:700, color:"#e2e8f0", textAlign:"center", marginBottom:"20px" }}>{isCn ? "🚨 緊急指南" : "🚨 Emergency Guides"}</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                {[
                  { title: isCn ? "我的狗吃了巧克力" : "My Dog Ate Chocolate", href:"/pet-safety/dog-ate-chocolate" },
                  { title: isCn ? "我的狗吃了葡萄" : "My Dog Ate Grapes", href:"/pet-safety/dog-ate-grapes" },
                  { title: isCn ? "我的狗吃了木糖醇/口香糖" : "My Dog Ate Xylitol / Gum", href:"/pet-safety/dog-ate-xylitol" },
                  { title: isCn ? "我的貓吃了百合花" : "My Cat Ate a Lily", href:"/pet-safety/cat-ate-lily" },
                  { title: isCn ? "我的貓吃了巧克力" : "My Cat Ate Chocolate", href:"/pet-safety/cat-ate-chocolate" },
                  { title: isCn ? "寵物急救電話" : "Emergency Contacts & Hotlines", href:"/pet-safety/pet-emergency-contacts" },
                ].map((item) => (
                  <a key={item.href} href={item.href} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 18px", borderRadius:"12px", background:"rgba(239,68,68,0.05)", border:"1px solid rgba(239,68,68,0.15)", textDecoration:"none", color:"#fca5a5", fontSize:"14px", fontWeight:600, transition:"all 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.05)"; }}>
                    <span>{item.title}</span>
                    <span style={{ color:"#64748b", fontSize:"18px" }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Browse All Articles */}
            <div style={{ maxWidth:"580px", margin:"0 auto", padding:"32px 20px 0" }}>
              <h2 style={{ fontSize:"18px", fontWeight:700, color:"#e2e8f0", textAlign:"center", marginBottom:"20px" }}>{isCn ? "📚 瀏覽全部 200 篇文章" : "📚 Browse All 200 Articles"}</h2>
              
              {/* Dogs */}
              <div style={{ marginBottom:"24px" }}>
                <h3 style={{ fontSize:"14px", fontWeight:700, color:"#38bdf8", marginBottom:"10px" }}>🐕 Dogs — Can They Eat...</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {["apple","almond","asparagus","avocado","bacon","banana","beef","beets","blackberries","blueberry","broccoli","cabbage","cantaloupe","carrot","celery","cheese","cherries","chicken","chocolate","cinnamon","coconut","coconut-oil","corn","cranberries","cucumber","dragon-fruit","duck","durian","edamame","egg","garlic","ginger","grapes","green-beans","guava","honey","ice-cream","kiwi","lamb","lettuce","longan","lychee","mango","mushrooms","noodles","oatmeal","onion","oranges","papaya","passion-fruit","peach","peanut-butter","pear","pineapple","plum","popcorn","pork","potato","pumpkin","raspberry","rice","salmon","sardines","sausage","shrimp","spinach","strawberry","sweet-corn","sweet-potato","taro","tofu","tomato","tuna","turkey","wax-apple","watermelon","yogurt","zucchini"].map((slug) => (
                    <a key={slug} href={`/can-dogs-eat/${slug}`} style={{ padding:"5px 12px", borderRadius:"100px", background:"rgba(56,189,248,0.08)", border:"1px solid rgba(56,189,248,0.15)", color:"#7dd3fc", fontSize:"12px", textDecoration:"none", transition:"all 0.15s ease", whiteSpace:"nowrap" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.18)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.08)"; }}>
                      {slug.replace(/-/g, " ")}
                    </a>
                  ))}
                </div>
              </div>

              {/* Cats */}
              <div style={{ marginBottom:"24px" }}>
                <h3 style={{ fontSize:"14px", fontWeight:700, color:"#f472b6", marginBottom:"10px" }}>🐈 Cats — Can They Eat...</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {["apple","asparagus","avocado","bacon","banana","beef","blueberry","bread","broccoli","cantaloupe","carrot","cheese","chicken","chocolate","coconut","corn","cucumber","dragon-fruit","duck","egg","garlic","green-bean","guava","ham","ice-cream","kiwi","lamb","lettuce","liver","longan","lychee","mango","melon","milk","onion","passion-fruit","pea","peach","pineapple","pork","potato","pumpkin","rice","salmon","sardine","shrimp","spinach","strawberry","sweet-potato","taro","tuna-canned","tuna-cooked","tuna-raw","turkey","wax-apple","watermelon","yogurt","zucchini"].map((slug) => (
                    <a key={slug} href={`/can-cats-eat/${slug}`} style={{ padding:"5px 12px", borderRadius:"100px", background:"rgba(244,114,182,0.08)", border:"1px solid rgba(244,114,182,0.15)", color:"#f9a8d4", fontSize:"12px", textDecoration:"none", transition:"all 0.15s ease", whiteSpace:"nowrap" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(244,114,182,0.18)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(244,114,182,0.08)"; }}>
                      {slug.replace(/-/g, " ")}
                    </a>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div style={{ marginBottom:"24px" }}>
                <h3 style={{ fontSize:"14px", fontWeight:700, color:"#fbbf24", marginBottom:"10px" }}>🏷️ Brand Reviews</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {[
                    { slug:"orijen", label:"Orijen (A)" },{ slug:"acana", label:"ACANA (A-)" },{ slug:"blue-buffalo", label:"Blue Buffalo (A-)" },
                    { slug:"hills-science-diet", label:"Hill's (B+)" },{ slug:"royal-canin", label:"Royal Canin (B)" },{ slug:"iams", label:"IAMS (B)" },{ slug:"sheba", label:"Sheba (B)" },{ slug:"purina", label:"Purina (B-)" },
                    { slug:"whiskas", label:"Whiskas (C)" },{ slug:"friskies", label:"Friskies (C)" },{ slug:"meow-mix", label:"Meow Mix (C)" },
                  ].map((b) => (
                    <a key={b.slug} href={`/brand-review/${b.slug}`} style={{ padding:"5px 12px", borderRadius:"100px", background:"rgba(251,191,36,0.08)", border:"1px solid rgba(251,191,36,0.15)", color:"#fcd34d", fontSize:"12px", textDecoration:"none", transition:"all 0.15s ease", whiteSpace:"nowrap" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(251,191,36,0.18)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(251,191,36,0.08)"; }}>
                      {b.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Safety Guides */}
              <div style={{ marginBottom:"24px" }}>
                <h3 style={{ fontSize:"14px", fontWeight:700, color:"#f87171", marginBottom:"10px" }}>📋 Safety Guides</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                  {[
                    { slug:"foods-toxic-to-dogs", label:"Foods Toxic to Dogs" },{ slug:"foods-toxic-to-cats", label:"Foods Toxic to Cats" },
                    { slug:"safe-fruits-for-dogs", label:"Safe Fruits for Dogs" },{ slug:"safe-fruits-for-cats", label:"Safe Fruits for Cats" },
                    { slug:"holiday-food-dangers", label:"Holiday Food Dangers" },{ slug:"cat-safe-plants", label:"Cat-Safe Plants" },
                    { slug:"pet-emergency-contacts", label:"Emergency Contacts" },
                  ].map((g) => (
                    <a key={g.slug} href={`/pet-safety/${g.slug}`} style={{ padding:"5px 12px", borderRadius:"100px", background:"rgba(248,113,113,0.08)", border:"1px solid rgba(248,113,113,0.15)", color:"#fca5a5", fontSize:"12px", textDecoration:"none", transition:"all 0.15s ease", whiteSpace:"nowrap" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(248,113,113,0.18)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(248,113,113,0.08)"; }}>
                      {g.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <footer style={{ textAlign:"center", padding:"40px 0 60px", color:"#334155", fontSize:"13px" }}>
              <div style={{ marginBottom:"16px", display:"flex", justifyContent:"center", gap:"24px", flexWrap:"wrap" }}>
                {["200+ articles", "95 dog foods", "71 cat foods", "14 brand reviews", "100% free"].map((f) => (
                  <span key={f} style={{ display:"flex", alignItems:"center", gap:"6px" }}><span style={{ color:"#38bdf8" }}>✦</span> {f}</span>
                ))}
              </div>
              <p style={{ margin:0 }}>Built with ❤️ for pet parents everywhere</p>
            </footer>
            </>
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
