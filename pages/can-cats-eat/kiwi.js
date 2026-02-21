import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat kiwi skin?", a: "No — the fuzzy skin is tough, hard to digest, and may cause GI irritation. Always peel." },
  { q: "Are kiwi seeds safe for cats?", a: "Yes, the tiny black seeds are safe and don't need to be removed." },
  { q: "Do cats like kiwi?", a: "Some cats show curiosity, possibly due to the actinidin enzyme smell. Most are indifferent." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Kiwi? Vitamin C Treat | CanMyPetEat" description="Kiwi is safe for cats in tiny amounts. Rich in vitamin C but cats may not be interested." canonical="/can-cats-eat/kiwi" petType="cat" food="Kiwi" safety="safe">
      <ArticleBody quickAnswer="Yes — peeled kiwi flesh is safe for cats in small amounts. Rich in vitamin C and potassium. Peel the skin (tough and irritating) and cut into tiny pieces." details="Kiwi flesh is non-toxic to cats and provides vitamin C, potassium, and fiber. The tiny seeds are safe. Some cats are attracted to kiwi due to the actinidin enzyme, while most are indifferent since cats can't taste sweetness. The fuzzy skin must be removed — it's tough, hard to digest, and can irritate the mouth and digestive tract. Only offer a small bite or two occasionally. Kiwi's acidity may cause mild mouth irritation in some cats. No real nutritional necessity for obligate carnivores, but harmless as an occasional treat." symptoms="Small amount: safe. Too much: mild GI upset or mouth irritation from acidity. Skin: digestive issues." whatToDo="Peeled kiwi flesh is safe. No concerns at treat-level amounts." safeAlternatives="Cantaloupe, watermelon, blueberries, and cooked chicken are better treat options." faqs={faqs} />
    </ArticleLayout>
  );
}
