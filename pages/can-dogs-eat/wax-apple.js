import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat wax apple seeds?", a: "Remove seeds as a precaution. They're not highly toxic but can cause mild digestive irritation." },
  { q: "Is wax apple good for dogs?", a: "It's a safe, hydrating treat. Low in calories and high in water content, similar to watermelon." },
  { q: "How much wax apple can a dog eat?", a: "A few slices as an occasional treat. Remove seeds and any hard core." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Wax Apple? Hydrating Tropical Treat | CanMyPetEat" description="Wax apple (rose apple) is safe for dogs. Low calorie, hydrating, and refreshing. Learn serving tips." canonical="/can-dogs-eat/wax-apple" petType="dog" food="Wax Apple" safety="safe">
      <ArticleBody quickAnswer="Yes — wax apple (also called rose apple, java apple, or bell fruit) is safe for dogs. It's mostly water, very low in calories, and provides a refreshing, hydrating treat. Remove seeds before serving." details="Wax apples are popular in Taiwan and Southeast Asia. They're about 90% water, making them an excellent hydrating treat, especially in summer. They provide vitamin C, fiber, and are very low in sugar compared to many fruits. The flesh is crisp and mild-flavored. Remove seeds before giving to your dog. The skin is safe and edible. Cut into appropriate pieces for your dog's size to prevent choking. This is one of the safer tropical fruits due to its low sugar and high water content." symptoms="Very safe. Minimal risk at normal treat amounts." whatToDo="No concerns. Wax apple is very safe for dogs." safeAlternatives="Watermelon, cucumber, and cantaloupe offer similar hydrating benefits." faqs={faqs} />
    </ArticleLayout>
  );
}
