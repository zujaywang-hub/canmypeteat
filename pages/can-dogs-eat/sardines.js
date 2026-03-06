import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How many sardines can a dog eat?", a: "Small dogs: 1-2 sardines. Medium dogs: 2-4. Large dogs: 4-6. Feed 2-3 times per week maximum." },
  { q: "Are sardines better than fish oil supplements?", a: "Sardines provide omega-3s in whole food form along with protein and other nutrients. They're a natural alternative to fish oil supplements." },
  { q: "Can dogs eat sardines with bones?", a: "Yes — canned sardine bones are soft and safe. They actually provide beneficial calcium." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Sardines? Omega-3 Superfood | CanMyPetEat" description="Sardines are one of the best fish for dogs — low mercury, high omega-3. Learn serving sizes and best types." canonical="/can-dogs-eat/sardines" petType="dog" food="Sardines" safety="safe">
      <ArticleBody quickAnswer="Yes — sardines are one of the best fish options for dogs. They're packed with omega-3 fatty acids, low in mercury, and the soft bones provide calcium. Choose sardines canned in water with no added salt." details="Sardines are a nutritional powerhouse for dogs. Being small fish low on the food chain, they accumulate far less mercury than tuna or salmon. They're rich in omega-3 fatty acids (EPA and DHA) which support skin, coat, joint, brain, and heart health. The soft bones in canned sardines are safe and provide calcium and phosphorus. Sardines also deliver high-quality protein, vitamin B12, vitamin D, and selenium. Always choose sardines packed in water — avoid sardines in oil (excess fat), mustard, or tomato sauce. Fresh sardines should be cooked before serving." symptoms="Very safe. Occasional mild fishy breath or soft stool if too many are given at once." whatToDo="Sardines are very safe. If you notice loose stools, reduce the quantity next time." safeAlternatives="Cooked salmon, cooked cod, cooked whitefish, and fish oil supplements provide similar omega-3 benefits." faqs={faqs} />
    </ArticleLayout>
  );
}
