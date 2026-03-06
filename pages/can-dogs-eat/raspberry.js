import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How many raspberries can a dog eat?", a: "Small dogs: 2-3. Medium: 4-6. Large: a small handful. Raspberries contain trace xylitol naturally, so keep amounts small." },
  { q: "Do raspberries contain xylitol?", a: "Yes, raspberries contain naturally occurring xylitol, but in very small amounts. The trace levels are safe — you'd need to feed an enormous quantity to cause any issue." },
  { q: "Can dogs eat frozen raspberries?", a: "Yes, frozen raspberries are safe and can be a refreshing summer treat." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Raspberries? Antioxidant Treat | CanMyPetEat" description="Raspberries are safe for dogs in moderation. Rich in antioxidants but contain trace xylitol. Learn safe amounts." canonical="/can-dogs-eat/raspberry" petType="dog" food="Raspberries" safety="safe">
      <ArticleBody quickAnswer="Yes — raspberries are safe in small amounts. They're rich in antioxidants, fiber, and vitamin C. They do contain trace amounts of naturally occurring xylitol, but you'd need impossibly large quantities to cause harm. Keep portions moderate." details="Raspberries are nutritious, low-calorie treats packed with antioxidants, vitamin C, manganese, and fiber. They also contain anti-inflammatory properties beneficial for older dogs with joint issues. The naturally occurring xylitol content is extremely low — a toxic dose would require a dog to eat many cups at once, which is essentially impossible. Fresh or frozen raspberries are both fine. Avoid raspberry jam, syrup, or baked goods containing raspberries due to added sugar." symptoms="Small amounts: very safe. Large quantities: mild stomach upset, diarrhea from fiber and sugar." whatToDo="Raspberries in normal treat quantities are perfectly safe. No concerns needed." safeAlternatives="Blueberries, strawberries, blackberries, and cranberries are other safe berry options." faqs={faqs} />
    </ArticleLayout>
  );
}
