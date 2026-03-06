import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat passion fruit seeds?", a: "In small amounts, the seeds are generally safe. They provide fiber but may cause mild GI irritation in large quantities." },
  { q: "Can dogs eat passion fruit rind?", a: "No — the rind is tough, may contain cyanogenic glycosides, and can cause digestive blockage." },
  { q: "Is passion fruit juice safe for dogs?", a: "Fresh juice in tiny amounts is okay. Avoid commercial juice with added sugar." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Passion Fruit? Tropical Treat Guide | CanMyPetEat" description="Passion fruit flesh is safe for dogs. Learn about rind dangers and proper serving." canonical="/can-dogs-eat/passion-fruit" petType="dog" food="Passion Fruit" safety="safe">
      <ArticleBody quickAnswer="Yes — passion fruit flesh and juice are safe for dogs in small amounts. Rich in vitamins A and C, fiber, and antioxidants. Remove the rind completely. Seeds are generally safe in small quantities." details="Passion fruit provides vitamins A, C, potassium, and fiber. The pulp and seeds are safe for dogs in moderation. However, the rind should be removed as it's tough, potentially contains cyanogenic compounds, and can cause digestive issues. The flesh is quite tart, and not all dogs enjoy it. Seeds provide some fiber and are small enough to pass through safely, but limit quantities. Avoid commercial passion fruit products with added sugar." symptoms="Flesh: safe. Rind: potential GI issues, blockage. Too much: diarrhea from acidity and fiber." whatToDo="Passion fruit flesh is safe. If rind was consumed, monitor for digestive distress." safeAlternatives="Mango, papaya, watermelon, and blueberries are other safe tropical options." faqs={faqs} />
    </ArticleLayout>
  );
}
