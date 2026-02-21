import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat dried mango?", a: "Not recommended — too concentrated in sugar. Fresh mango only, in tiny amounts." },
  { q: "Is mango skin toxic to cats?", a: "Mango skin contains urushiol (same as poison ivy) which can cause skin irritation. Always peel." },
  { q: "Can kittens eat mango?", a: "Best to avoid. Kittens should eat kitten-specific food to ensure proper growth and development." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Mango Safely? Complete Guide | CanMyPetEat" description="Mango flesh is safe for cats in tiny amounts but skin and pit are dangerous. Most cats aren't interested." canonical="/can-cats-eat/mango-full" petType="cat" food="Mango" safety="safe">
      <ArticleBody quickAnswer="Yes — tiny amounts of peeled, pitted mango flesh are safe for cats. The skin contains urushiol (irritant), and the pit is a choking hazard with cyanide compounds. Most cats won't be interested." details="Mango flesh provides vitamins A, C, and B6 but offers minimal benefit to obligate carnivores. The flesh is safe and soft. However, the skin must be removed — it contains urushiol, the same irritant found in poison ivy. The large pit is dangerous: choking hazard and contains cyanide compounds. Since cats can't taste sweetness, most are indifferent to mango. If your cat shows curiosity, a small cube of peeled flesh is harmless." symptoms="Small peeled piece: safe. Skin: potential skin irritation/allergic reaction. Pit: choking, blockage." whatToDo="Peeled mango flesh is safe. If skin contact causes irritation, rinse the area." safeAlternatives="Cantaloupe, cooked chicken, sardines, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
