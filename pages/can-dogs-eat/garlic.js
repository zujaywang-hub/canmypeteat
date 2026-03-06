import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is garlic in dog food safe?", a: "Some holistic pet foods contain very small amounts of garlic, claiming health benefits. This is controversial — most veterinary organizations advise avoiding garlic entirely for dogs." },
  { q: "How much garlic is toxic to dogs?", a: "As little as 15-30 grams per kilogram of body weight can cause toxic effects. For a 20-pound dog, that's roughly 4-5 cloves. But even smaller amounts over time cause cumulative damage." },
  { q: "Is garlic powder more dangerous than fresh garlic?", a: "Yes — garlic powder is more concentrated, so a smaller amount is more toxic. A teaspoon of garlic powder equals roughly 2-3 fresh cloves." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Garlic? No — Toxic to Dogs | CanMyPetEat" description="Garlic is toxic to dogs. It's 5x more potent than onions at damaging red blood cells. All forms — raw, cooked, powder — are dangerous." canonical="/can-dogs-eat/garlic" petType="dog" food="Garlic" safety="toxic">
      <ArticleBody
        quickAnswer="No — garlic is toxic to dogs. It belongs to the Allium family (along with onions, leeks, and chives) and is actually 5 times more potent than onions at destroying red blood cells. All forms of garlic — raw, cooked, powdered, minced, and dehydrated — are dangerous. Garlic toxicity is cumulative, meaning even small amounts over time can cause serious problems."
        details="Garlic contains thiosulfates and organosulfur compounds that damage hemoglobin in red blood cells, causing them to form 'Heinz bodies' and eventually burst (hemolysis). This leads to hemolytic anemia — a condition where the body destroys its own red blood cells faster than it can replace them. What makes garlic particularly dangerous is its potency (much stronger than onions) and its prevalence in human cooking — it's in pasta sauce, bread, marinades, stir-fries, soups, and countless other dishes. Garlic powder is especially risky because it's concentrated. Even foods cooked with garlic and then having the garlic removed still contain harmful compounds dissolved into the dish. Some holistic veterinarians advocate small amounts of garlic for flea prevention or immune support, but mainstream veterinary medicine considers all garlic unsafe for dogs."
        symptoms="Symptoms may take several days to appear: lethargy, weakness, pale gums, rapid breathing, dark or reddish urine, vomiting, diarrhea, decreased appetite, abdominal pain."
        whatToDo="If your dog ate garlic, contact your vet. A single accidental exposure to a small amount (like licking garlic bread) likely won't be an emergency, but regular exposure or a large amount warrants immediate veterinary attention. Blood tests can detect Heinz body formation before symptoms appear."
        safeAlternatives="If you want to flavor homemade dog food, try plain chicken broth (no onion/garlic), a small amount of parsley, or plain turmeric (has anti-inflammatory properties)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
