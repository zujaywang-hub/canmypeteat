import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are longan seeds dangerous for dogs?", a: "Yes — longan seeds are a choking hazard and contain saponins. Always remove the seed and skin." },
  { q: "Can dogs eat dried longan?", a: "Not recommended — dried longan is extremely concentrated in sugar. Fresh, peeled and seeded is best." },
  { q: "How much longan can a dog eat?", a: "2-3 peeled, seeded fruits maximum due to very high sugar content." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Longan? Sweet but Risky | CanMyPetEat" description="Longan flesh is safe for dogs in small amounts but seeds are dangerous. Learn about sugar concerns." canonical="/can-dogs-eat/longan" petType="dog" food="Longan" safety="caution">
      <ArticleBody quickAnswer="Flesh only, in strict moderation — longan flesh is very sweet and safe in tiny amounts when peeled and seeded. The seed is a choking hazard and contains saponins. Extremely high sugar makes this a treat to limit." details="Longan (dragon eye fruit) is closely related to lychee and shares similar safety concerns. The flesh is not toxic and provides vitamin C and potassium. However, longan is one of the sweetest fruits available, making it inappropriate for diabetic dogs or those prone to obesity. The skin must be peeled and the seed completely removed — seeds contain saponins and are hard enough to damage teeth or cause choking. Dried longan is even more concentrated in sugar and should be avoided. Limit to 2-3 peeled, seeded fruits at most." symptoms="Small amounts of flesh: safe. Seeds: choking, intestinal blockage. Too much: diarrhea from excess sugar." whatToDo="Peeled, seeded longan flesh is fine in small amounts. If seeds were swallowed, monitor for distress." safeAlternatives="Blueberries and watermelon provide sweetness with less sugar concentration." faqs={faqs} />
    </ArticleLayout>
  );
}
