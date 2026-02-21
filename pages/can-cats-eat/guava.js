import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat guava seeds?", a: "In small amounts they're generally safe, but they may cause mild digestive irritation. Remove for sensitive cats." },
  { q: "Do cats like guava?", a: "Most cats are uninterested in guava. Cats can't taste sweetness, so fruit generally doesn't appeal to them." },
  { q: "Is guava juice safe for cats?", a: "Not recommended — too much sugar. A tiny piece of fresh guava flesh is the only safe option." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Guava? Tropical Fruit Guide | CanMyPetEat" description="Guava is safe for cats in tiny amounts. Rich in vitamin C but cats rarely show interest." canonical="/can-cats-eat/guava" petType="cat" food="Guava" safety="safe">
      <ArticleBody quickAnswer="Yes — guava flesh is safe for cats in tiny amounts. Very high in vitamin C and fiber. Remove seeds for sensitive cats. Most cats won't be interested." details="Guava is non-toxic to cats and extremely rich in vitamin C. The flesh is soft and easy to eat. Seeds are generally safe in small amounts but may cause mild digestive issues. As obligate carnivores, cats derive no essential nutrition from guava, and most won't show interest since they can't taste sweetness. If your cat does eat a small piece, it's perfectly harmless. Avoid guava paste, jam, or juice (too much sugar)." symptoms="Very safe. Large amounts may cause mild GI upset from fiber." whatToDo="No concerns. Guava is safe for cats." safeAlternatives="Cooked chicken, cantaloupe, and commercial cat treats are better options." faqs={faqs} />
    </ArticleLayout>
  );
}
