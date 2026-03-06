import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat pineapple core?", a: "No — the core is very hard and poses a choking and blockage hazard. Only the soft flesh." },
  { q: "Do cats like pineapple?", a: "Most cats are uninterested in pineapple. They can't taste sweetness, and the strong acidity may be off-putting." },
  { q: "Is pineapple juice safe for cats?", a: "Not recommended — too acidic and high in sugar. Fresh pineapple flesh in tiny amounts is the only safe option." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Pineapple? Acidity Concerns | CanMyPetEat" description="Pineapple flesh is safe for cats in tiny amounts. Learn about acidity risks and why most cats skip it." canonical="/can-cats-eat/pineapple" petType="cat" food="Pineapple" safety="caution">
      <ArticleBody quickAnswer="Tiny amounts of flesh only — pineapple is not toxic but its high acidity and sugar make it a poor choice for cats. Most cats aren't interested due to their inability to taste sweetness. Remove skin and core completely." details="Pineapple flesh contains vitamin C, manganese, and the enzyme bromelain. However, pineapple is very acidic, which can irritate a cat's mouth and digestive tract. The high sugar content is also inappropriate for obligate carnivores. Most cats naturally avoid pineapple due to its strong acidic taste. The tough skin and hard core must be completely removed — they're choking and blockage hazards. Canned pineapple in syrup is too sweet. If your cat shows interest, a very tiny piece of fresh flesh occasionally is harmless, but there are much better treat options." symptoms="Tiny amount: safe. More than a bite: mouth irritation, vomiting, diarrhea from acidity. Skin/core: choking hazard." whatToDo="A tiny piece of pineapple flesh is fine. If your cat ate a larger amount and shows mouth irritation or vomiting, it should resolve quickly." safeAlternatives="Cantaloupe (cats love it), watermelon, cooked chicken, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
