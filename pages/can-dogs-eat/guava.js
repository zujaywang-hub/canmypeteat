import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat guava seeds?", a: "Small amounts of guava seeds are generally safe, but large quantities may cause constipation. Remove seeds if your dog has digestive sensitivity." },
  { q: "Can dogs eat guava paste?", a: "Not recommended — guava paste is extremely high in sugar. Fresh guava is the best option." },
  { q: "Is guava good for dogs?", a: "Guava is very high in vitamin C — more than oranges. In moderation, it's a nutritious tropical treat." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Guava? Vitamin C Powerhouse | CanMyPetEat" description="Guava is safe for dogs and incredibly rich in vitamin C. Learn about preparation and serving tips." canonical="/can-dogs-eat/guava" petType="dog" food="Guava" safety="safe">
      <ArticleBody quickAnswer="Yes — guava flesh is safe for dogs and extremely rich in vitamin C, fiber, and antioxidants. Remove seeds for sensitive dogs and serve fresh, ripe guava in small pieces." details="Guava is one of the most vitamin C-rich fruits available, providing several times more than oranges. It also contains vitamins A and K, fiber, folate, and potassium. The flesh is safe and most dogs enjoy the sweet taste. Seeds in small amounts are generally safe but may cause constipation in larger quantities — remove them for dogs with sensitive digestion. The skin is edible but may be tough, so peeling is recommended. Avoid guava paste, jam, or juice (too much sugar), and guava-flavored products with artificial ingredients." symptoms="Very safe. Seeds in large amounts: potential constipation. Too much: mild diarrhea from fiber and sugar." whatToDo="Fresh guava flesh is perfectly safe. No concerns at normal treat amounts." safeAlternatives="Papaya, mango (no pit), watermelon, and blueberries are other tropical fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
