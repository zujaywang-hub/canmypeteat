import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw potatoes?", a: "No. Raw potatoes contain solanine, a toxic compound. Cooking breaks down solanine and makes potatoes safe. Green potatoes (raw or cooked) should always be avoided." },
  { q: "Can dogs eat mashed potatoes?", a: "Plain mashed potatoes are okay. But most mashed potatoes contain butter, milk, salt, and garlic — all of which are problematic for dogs." },
  { q: "Can dogs eat french fries?", a: "Not recommended. French fries are cooked in oil (high fat) and heavily salted. A single plain fry won't hurt, but they're not a healthy treat." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Potatoes? Cooked Only | CanMyPetEat" description="Plain cooked potatoes are safe for dogs. Raw potatoes and green potatoes contain solanine, which is toxic. Always cook thoroughly and serve plain." canonical="/can-dogs-eat/potato" petType="dog" food="Potatoes" safety="caution">
      <ArticleBody
        quickAnswer="Cooked, plain potatoes — yes, in moderation. Raw or green potatoes — no, they're toxic. Potatoes belong to the nightshade family and contain solanine, a toxic compound that's destroyed by cooking. Once cooked, potatoes are a safe source of carbohydrates, vitamin C, and potassium. Keep them plain — no butter, salt, garlic, or sour cream."
        details="The key with potatoes is preparation. Raw potatoes contain solanine (especially concentrated in green potatoes, potato sprouts, and the skin), which can cause gastrointestinal distress and neurological symptoms in dogs. Cooking at high temperatures breaks down most solanine, making the potato safe. Plain boiled, baked, or steamed potatoes are all fine. Potatoes are a common ingredient in many commercial dog foods, particularly grain-free formulas. However, the FDA has investigated a potential link between grain-free diets heavy in potatoes/legumes and dilated cardiomyopathy (DCM) in dogs — while the research is ongoing and inconclusive, potatoes are best as an occasional treat rather than a dietary staple. Sweet potatoes are generally considered a more nutritious choice."
        symptoms="Raw/green potatoes: drooling, vomiting, diarrhea, lethargy, tremors, cardiac issues. Cooked plain potatoes: safe, no symptoms expected."
        whatToDo="If your dog ate raw potato or green potato, monitor for gastrointestinal symptoms and contact your vet if they develop. If they ate plain cooked potato, no concern needed."
        safeAlternatives="Sweet potatoes are more nutritious than white potatoes and don't contain solanine. Other safe carb sources include plain cooked rice, oatmeal, and quinoa."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
