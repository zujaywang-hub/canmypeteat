import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How much liver can a cat eat?", a: "A small piece (thumbnail-sized) once or twice a week is plenty. Too much liver causes vitamin A toxicity which is very serious." },
  { q: "Is chicken liver or beef liver better for cats?", a: "Both are nutritious. Chicken liver is slightly lower in vitamin A, making it slightly safer in terms of toxicity risk. Both should be fed sparingly." },
  { q: "Can cats eat raw liver?", a: "Raw liver carries bacteria risk. Lightly cooking liver is safer while preserving most nutrients." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Liver? Vitamin A Danger | CanMyPetEat" description="Liver is safe for cats in small amounts but too much causes vitamin A toxicity. Learn safe portions." canonical="/can-cats-eat/liver" petType="cat" food="Liver" safety="caution">
      <ArticleBody quickAnswer="In small amounts only — liver is nutritious and most cats love it, but it's extremely high in vitamin A. Too much liver over time causes hypervitaminosis A, a serious condition affecting bones and joints. Treat only, never a meal replacement." details="Liver is packed with protein, iron, B vitamins, and vitamin A, making it a nutritious treat in small quantities. Most cats find liver irresistible. However, liver contains such concentrated levels of vitamin A that regular or excessive feeding can cause hypervitaminosis A — a condition where vitamin A accumulates to toxic levels. This leads to bone deformities, joint stiffness, and spinal fusion, especially with long-term overconsumption. A thumbnail-sized piece once or twice a week is a safe amount. Liver should be lightly cooked (not raw) and served plain." symptoms="Small occasional amounts: safe and nutritious. Regular overconsumption: vitamin A toxicity — bone growths on spine and joints, stiff joints, weight loss, lethargy, poor coat condition." whatToDo="If your cat ate a small amount of liver, no concerns. If your cat has been eating liver daily for an extended period, consult your vet about vitamin A testing." safeAlternatives="Plain cooked chicken breast, cooked fish, and commercial cat treats provide protein without the vitamin A toxicity risk." faqs={faqs} />
    </ArticleLayout>
  );
}
