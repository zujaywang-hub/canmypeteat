import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Does cabbage give dogs gas?", a: "Yes — cabbage is known to cause gas in dogs, just like in humans. Start with small amounts and see how your dog tolerates it." },
  { q: "Can dogs eat red cabbage?", a: "Yes, all types of cabbage are safe — green, red, napa, and savoy. Red cabbage actually has more antioxidants." },
  { q: "Is cooked or raw cabbage better for dogs?", a: "Cooked cabbage is easier to digest and causes less gas. Raw cabbage is safe but may cause more digestive discomfort." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Cabbage? Gas Warning & Benefits | CanMyPetEat" description="Cabbage is safe for dogs but may cause gas. Learn about benefits, preparation, and how much to feed." canonical="/can-dogs-eat/cabbage" petType="dog" food="Cabbage" safety="safe">
      <ArticleBody quickAnswer="Yes — cabbage is safe for dogs in moderate amounts. It's rich in vitamins C and K, fiber, and antioxidants. Be warned: it commonly causes gas. Cooked cabbage is easier to digest." details="All varieties of cabbage — green, red, napa, savoy — are safe for dogs. Cabbage provides vitamins C, K, and B6, fiber, manganese, and antioxidants. Red cabbage contains additional anthocyanins with anti-inflammatory properties. However, cabbage is well-known for causing gas due to its raffinose content, a complex sugar that ferments in the large intestine. Cooking cabbage helps reduce gas and makes it easier to digest. Serve plain without butter, salt, or seasoning. Too much cabbage can cause hypothyroidism due to thiocyanate, but this requires very large amounts over extended periods." symptoms="Safe but gassy. Small amounts: mild gas. Large amounts: significant gas, bloating, possible diarrhea." whatToDo="Cabbage is safe. If your dog is unusually gassy after eating cabbage, reduce the amount or try cooked instead of raw." safeAlternatives="Green beans, carrots, and zucchini provide similar vitamins with less gas potential." faqs={faqs} />
    </ArticleLayout>
  );
}
