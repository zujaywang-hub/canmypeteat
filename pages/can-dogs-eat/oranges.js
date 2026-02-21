import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat orange peels?", a: "No. Orange peels contain essential oils and citric acid that can cause digestive upset. The peel is also difficult to digest and may cause blockage." },
  { q: "How much orange can a dog eat?", a: "1-2 segments for a small dog, 2-3 segments for a medium dog. Oranges are high in sugar, so keep portions small." },
  { q: "Can diabetic dogs eat oranges?", a: "No. Oranges are high in natural sugar and can spike blood sugar levels. Avoid oranges for diabetic dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Oranges? Vitamin C Benefits | CanMyPetEat" description="Yes, dogs can eat oranges in moderation. Rich in vitamin C but high in sugar. Learn safe serving sizes." canonical="/can-dogs-eat/oranges" petType="dog" food="Oranges" safety="caution">
      <ArticleBody quickAnswer="Yes, in moderation — orange flesh is safe for dogs and rich in vitamin C. However, oranges are high in sugar and citric acid, so feed only small amounts. Remove all peel, pith, and seeds first." details="Oranges provide vitamin C, potassium, and fiber. While dogs produce their own vitamin C (unlike humans), the extra boost can benefit their immune system. However, the high sugar content means oranges should only be an occasional treat. The peel, pith, and seeds should always be removed — they contain essential oils and compounds that can irritate the digestive system. Some dogs dislike the strong citrus smell and taste, which is perfectly normal." symptoms="Small amounts of flesh: generally safe. Overconsumption: vomiting, diarrhea, stomach upset from sugar and citric acid. Peel ingestion: GI irritation, potential blockage." whatToDo="If your dog ate a small amount of orange flesh, no worries. If your dog ate orange peels or a large quantity, monitor for digestive upset and contact your vet if symptoms persist." safeAlternatives="Blueberries, watermelon (no seeds), apple slices (no seeds), and strawberries are lower-sugar fruit alternatives." faqs={faqs} />
    </ArticleLayout>
  );
}
