import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is spinach safe for dogs?", a: "In small amounts, yes. But spinach is high in oxalic acid which can interfere with calcium absorption and contribute to kidney issues in dogs prone to them." },
  { q: "Can dogs eat raw spinach?", a: "Raw spinach is safe but harder to digest. Steamed spinach is better as cooking reduces some oxalate content and makes it easier to absorb nutrients." },
  { q: "How much spinach can a dog eat?", a: "A few leaves occasionally as a treat. It should not be a regular part of the diet due to oxalate concerns." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Spinach? Oxalate Concerns | CanMyPetEat" description="Spinach is safe for healthy dogs in small amounts but high in oxalates. Learn the risks and benefits." canonical="/can-dogs-eat/spinach" petType="dog" food="Spinach" safety="caution">
      <ArticleBody quickAnswer="In small amounts, yes — spinach is nutrient-rich but high in oxalic acid. Dogs with kidney issues should avoid it entirely. For healthy dogs, occasional small amounts are fine." details="Spinach is packed with iron, vitamins A, C, K, and antioxidants. However, it contains significant levels of oxalic acid, which can bind to calcium and potentially lead to kidney damage or bladder stones over time. Healthy dogs can process small amounts without issue, but dogs with existing kidney problems or a history of calcium oxalate stones should avoid spinach completely. If you feed spinach, steaming it reduces some oxalate content. Always serve plain without butter, garlic, or seasoning." symptoms="Small amounts: usually fine. Large or regular amounts: potential kidney stress, calcium deficiency, muscle weakness." whatToDo="If your healthy dog ate spinach, no concern. If your dog has kidney issues and ate spinach, monitor and inform your vet." safeAlternatives="Green beans, carrots, and cooked pumpkin provide vitamins without the oxalate risk." faqs={faqs} />
    </ArticleLayout>
  );
}
