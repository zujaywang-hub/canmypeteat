import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat wheat bread?", a: "Yes, if they're not wheat-allergic. Plain white or wheat bread in small amounts is safe. Just check that it doesn't contain raisins, garlic, nuts, or xylitol." },
  { q: "Is bread good for dogs with upset stomachs?", a: "Bread can help absorb stomach acid and may soothe mild upset. But plain rice is a better option for digestive issues." },
  { q: "Can dogs eat sourdough bread?", a: "Baked sourdough is fine in small amounts. Raw sourdough dough is dangerous — the fermentation produces alcohol and the dough expands in the stomach." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Bread? Yes — But Check Ingredients | CanMyPetEat" description="Plain bread is safe for dogs in small amounts but offers no nutritional value. Always check for toxic ingredients like raisins, garlic, nuts, and xylitol." canonical="/can-dogs-eat/bread" petType="dog" food="Bread" safety="caution">
      <ArticleBody
        quickAnswer="Plain white or wheat bread is safe for dogs in small amounts — but always check the ingredients first. Some breads contain raisins (toxic), garlic or onion (toxic), nuts (potentially toxic), or xylitol (lethal to dogs). Bread has no nutritional value for dogs, so it should only be an occasional small treat."
        details="Bread itself isn't harmful to dogs — it's just empty carbohydrates. The danger lies in what's IN the bread. Raisin bread is toxic (grapes/raisins cause kidney failure). Garlic bread contains garlic which destroys red blood cells. Some artisan breads contain nuts, seeds, or chocolate. And increasingly, bread products marketed as 'low-carb' or 'keto' contain xylitol, which is lethal to dogs. If you want to give your dog bread, plain white bread or plain wheat bread is the safest choice. The one absolute rule: NEVER give raw bread dough. Raw yeast dough continues to rise in the warm, moist environment of a dog's stomach, causing dangerous bloating. The fermentation also produces ethanol (alcohol), leading to alcohol poisoning."
        symptoms="Plain bread: none in small amounts. Raw dough: bloating, abdominal pain, alcohol poisoning, potentially fatal gastric torsion. Toxic ingredients: varies (see raisin, garlic, xylitol entries)."
        whatToDo="If your dog ate plain bread, no action needed. If they ate raw dough, contact your vet immediately — this is an emergency. If the bread contained raisins, garlic, or xylitol, treat as a poisoning emergency."
        safeAlternatives="For a carb-based treat, try plain cooked rice, small pieces of plain cooked sweet potato, or commercial dog biscuits."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
