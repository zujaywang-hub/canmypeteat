import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat dragon fruit skin?", a: "No — the skin is tough and not digestible. Only serve the white or pink flesh." },
  { q: "Are dragon fruit seeds safe for dogs?", a: "Yes, the tiny black seeds are safe and don't need to be removed." },
  { q: "Does dragon fruit color dog poop?", a: "Red-fleshed dragon fruit may temporarily tint stool pink/red. This is normal and not blood." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Dragon Fruit? Exotic Treat Guide | CanMyPetEat" description="Dragon fruit is safe for dogs and low in calories. Learn about this antioxidant-rich exotic fruit." canonical="/can-dogs-eat/dragon-fruit" petType="dog" food="Dragon Fruit" safety="safe">
      <ArticleBody quickAnswer="Yes — dragon fruit (pitaya) flesh is safe for dogs. It's low in calories, high in fiber and antioxidants, and the tiny seeds are safe to eat. Remove the skin before serving." details="Dragon fruit is a safe, exotic treat for dogs. The white or pink flesh provides vitamin C, iron, magnesium, fiber, and antioxidants while being low in calories. The tiny black seeds are safe and don't need to be removed. The skin/rind should be peeled off as it's tough and indigestible. Both white-fleshed and red-fleshed varieties are safe. Red dragon fruit may temporarily color stool — this is normal. Cut into small pieces appropriate for your dog's size. Due to natural sugar, feed in moderation." symptoms="Very safe. Too much may cause mild soft stools. Red flesh may tint stool pink." whatToDo="Dragon fruit is perfectly safe. No concerns needed." safeAlternatives="Watermelon, cantaloupe, mango (no pit), and papaya are other safe tropical options." faqs={faqs} />
    </ArticleLayout>
  );
}
