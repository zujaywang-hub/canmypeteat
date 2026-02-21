import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat lychee seeds?", a: "NEVER. Lychee seeds contain saponins and are a serious choking hazard. Always remove the seed and skin completely." },
  { q: "How much lychee can a dog eat?", a: "1-2 peeled and seeded lychees for a medium dog. High sugar content means strict moderation." },
  { q: "Can dogs eat canned lychee?", a: "Not recommended — canned lychee is packed in sugary syrup. Fresh is best." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Lychee? Seed Danger Warning | CanMyPetEat" description="Lychee flesh is safe for dogs but seeds are dangerous. Learn proper preparation for this tropical fruit." canonical="/can-dogs-eat/lychee" petType="dog" food="Lychee" safety="caution">
      <ArticleBody quickAnswer="Flesh only — peeled, seeded lychee flesh is safe in small amounts. The seed is toxic (contains saponins) and a choking hazard. The skin is indigestible. High sugar means strict moderation." details="Lychee flesh provides vitamin C, potassium, and antioxidants. However, the fruit requires careful preparation for dogs. The rough skin must be removed (indigestible), and the large seed MUST be removed — it contains saponins and hypoglycin A, which can cause toxicity, and is also a serious choking and intestinal blockage risk. Unripe lychees are more dangerous as they contain higher levels of hypoglycin A, which can cause dangerous drops in blood sugar. Only offer ripe, fresh lychees that have been peeled and seeded." symptoms="Peeled/seeded flesh: safe in small amounts. Seeds: choking, blockage, toxicity. Unripe fruit: hypoglycemia risk." whatToDo="If your dog ate peeled lychee flesh, no concerns. If your dog swallowed a lychee seed, monitor for choking/digestive distress. If your dog ate unripe lychee, watch for weakness and contact your vet." safeAlternatives="Watermelon, blueberries, and mango (no pit) are safer tropical fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
