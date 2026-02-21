import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat dragon fruit skin?", a: "No — only the flesh. The skin is tough and indigestible." },
  { q: "Are dragon fruit seeds safe for cats?", a: "Yes, the tiny black seeds are safe and don't need to be removed." },
  { q: "Do cats like dragon fruit?", a: "Most cats are indifferent. Cats can't taste sweetness, so dragon fruit isn't particularly appealing to them." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Dragon Fruit? Exotic but Safe | CanMyPetEat" description="Dragon fruit is safe for cats in small amounts. Low calorie, non-toxic, but most cats aren't interested." canonical="/can-cats-eat/dragon-fruit" petType="cat" food="Dragon Fruit" safety="safe">
      <ArticleBody quickAnswer="Yes — dragon fruit flesh is safe for cats in small amounts. Seeds are safe, but remove the skin. Most cats show little interest since they can't taste sweetness." details="Dragon fruit is non-toxic to cats. The white or pink flesh provides vitamin C, fiber, and antioxidants with very few calories. The tiny black seeds are safe to consume. Remove the skin as it's tough and indigestible. Both white and red-fleshed varieties are safe. Since cats can't taste sweetness, most won't be drawn to dragon fruit, but if your cat shows curiosity, a small piece is perfectly harmless. Red dragon fruit may temporarily color stool, which is normal." symptoms="Very safe. Large amounts may cause mild soft stools." whatToDo="No concerns. Dragon fruit is perfectly safe for cats." safeAlternatives="Cantaloupe, watermelon, and cooked chicken are treats cats are more likely to enjoy." faqs={faqs} />
    </ArticleLayout>
  );
}
