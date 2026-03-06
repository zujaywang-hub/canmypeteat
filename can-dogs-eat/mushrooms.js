import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat store-bought mushrooms?", a: "Yes — plain white button, cremini, portobello, and shiitake mushrooms from the grocery store are safe when cooked plain. The danger is wild mushrooms." },
  { q: "How can I tell if a wild mushroom is poisonous?", a: "You can't reliably — even experts misidentify mushrooms. If your dog ate any wild mushroom, treat it as potentially toxic and contact your vet immediately." },
  { q: "What are the most dangerous wild mushrooms for dogs?", a: "Amanita phalloides (death cap), Amanita muscaria (fly agaric), and Galerina marginata are among the most lethal. They can cause liver failure and death within days." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Mushrooms? Wild vs Store-Bought | CanMyPetEat" description="Store-bought mushrooms are safe but wild mushrooms can kill dogs. Learn the critical difference." canonical="/can-dogs-eat/mushrooms" petType="dog" food="Mushrooms" safety="caution">
      <ArticleBody quickAnswer="Store-bought mushrooms (cooked, plain) — YES. Wild mushrooms — NEVER. Common grocery store varieties like button, cremini, and portobello are safe. Wild mushrooms can be lethal — even experts misidentify species, so treat any wild mushroom ingestion as an emergency." details="The key rule: if you would eat it, your dog can eat it (when cooked plain). Store-bought white button, cremini, portobello, shiitake, and oyster mushrooms are all safe for dogs when cooked without garlic, onion, butter, or seasoning. They provide B vitamins, minerals, and antioxidants. However, wild mushrooms are extremely dangerous. Toxic species like death cap (Amanita phalloides) can cause fatal liver failure. The problem is that toxic mushrooms can look nearly identical to safe ones. Dogs are more likely to eat wild mushrooms during walks because they're attracted to the smell." symptoms="Store-bought cooked: safe. Wild toxic mushrooms: vomiting, diarrhea, abdominal pain, jaundice, seizures, liver failure, death — symptoms may be delayed 6-24 hours." whatToDo="If your dog ate a wild mushroom: take a photo of the mushroom, collect a sample if possible, and call your vet or ASPCA Poison Control (888) 426-4435 immediately. Do NOT wait for symptoms." safeAlternatives="Cooked carrots, green beans, and pumpkin provide vitamins without any toxicity risk." faqs={faqs} />
    </ArticleLayout>
  );
}
