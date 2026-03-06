import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat deli turkey?", a: "Not ideal. Deli turkey is high in sodium and preservatives. Plain home-cooked turkey breast is much better." },
  { q: "Can cats eat turkey skin?", a: "No — turkey skin is very high in fat and often seasoned. It can cause pancreatitis. Remove all skin." },
  { q: "Is turkey better than chicken for cats?", a: "Both are excellent lean proteins. Turkey is slightly lower in calories. Many cats enjoy both equally." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Turkey? Holiday Safety Guide | CanMyPetEat" description="Plain cooked turkey is excellent for cats but holiday turkey is risky. Learn safe serving tips." canonical="/can-cats-eat/turkey" petType="cat" food="Turkey" safety="safe">
      <ArticleBody quickAnswer="Yes — plain cooked turkey breast is an excellent protein for cats. It's lean, high in protein, and most cats love it. Remove skin, bones, and all seasoning. Avoid holiday turkey with garlic, onion, and butter." details="Turkey is one of the best protein sources you can offer a cat. It's lean, easily digestible, and rich in taurine (essential for cat heart and eye health), protein, and B vitamins. Many premium cat foods feature turkey as a primary ingredient. The key is preparation: serve only plain, cooked white meat. Holiday turkey is dangerous because it's typically seasoned with garlic, onion, sage, and coated in butter. Turkey skin is too high in fat. Cooked turkey bones are extremely dangerous as they splinter. Deli turkey is too high in sodium and preservatives." symptoms="Plain cooked turkey: very safe. Seasoned turkey: potential garlic/onion toxicity. Skin: pancreatitis risk. Bones: choking, intestinal puncture." whatToDo="Plain turkey is perfectly safe. If your cat ate seasoned holiday turkey, monitor for GI upset and garlic/onion toxicity symptoms." safeAlternatives="Plain cooked chicken breast, cooked salmon, sardines in water, and lean cooked beef." faqs={faqs} />
    </ArticleLayout>
  );
}
