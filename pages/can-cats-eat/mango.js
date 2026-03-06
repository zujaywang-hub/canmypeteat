import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat mango skin?", a: "No — mango skin contains urushiol, the same irritant found in poison ivy. It can cause skin irritation and allergic reactions. Always peel completely before offering." },
  { q: "Can cats eat dried mango?", a: "Dried mango is not toxic but has extremely concentrated sugar. It's also chewy and can be a choking hazard. Stick to small amounts of fresh mango only." },
  { q: "Is mango good for cats?", a: "Mango provides some vitamins but cats are obligate carnivores — they get all the nutrition they need from meat. Mango is a treat at best, not a nutritional supplement." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Mango? Yes — Small Amounts Only | CanMyPetEat" description="Fresh mango flesh is safe for cats in small amounts. Remove skin and pit. Learn how to share mango safely with your cat." canonical="/can-cats-eat/mango" petType="cat" food="Mango" safety="safe">
      <ArticleBody quickAnswer="Yes — plain fresh mango flesh is safe for cats in small amounts. It contains vitamins A, C, and B6, plus fiber. However, cats can't taste sweetness and may not be interested. Always remove the skin (contains urushiol irritant) and the large pit (choking hazard). Keep portions very small due to high sugar content." details="Mango is non-toxic to cats and the flesh is safe to eat. It contains beta-carotene, vitamin C, vitamin B6, and dietary fiber. However, there are important caveats: cats cannot convert beta-carotene to vitamin A (they need preformed retinol from animal sources), and they produce their own vitamin C. So the nutritional benefits are minimal for felines. The high natural sugar content (about 14g per 100g) means portions must be kept very small to avoid digestive upset and unnecessary calorie intake. Mango skin contains urushiol — the same compound in poison ivy — which can cause contact dermatitis. The pit is a choking and intestinal obstruction hazard. Only the ripe flesh should ever be offered." whatToDo="Peel the mango completely, removing all skin. Cut the flesh away from the pit. Dice into very small, pea-sized pieces. Offer 2-3 small pieces maximum as an occasional treat. Watch for any digestive upset." safeAlternatives="Other safe fruits for cats: blueberries (antioxidant-rich, small size), watermelon (seedless, hydrating), cantaloupe (many cats love the aroma), and strawberry (small pieces)." faqs={faqs} />
    </ArticleLayout>
  );
}
