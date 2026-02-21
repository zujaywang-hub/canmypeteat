import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Will beets turn my dog's poop red?", a: "Yes — this is completely normal and not a sign of blood. Beet pigment passes through the digestive system and can temporarily color stool and urine." },
  { q: "Can dogs eat canned beets?", a: "Only plain canned beets with no added salt. Pickled beets contain too much vinegar and salt." },
  { q: "Are beet greens safe for dogs?", a: "In small amounts, yes. Beet greens contain oxalates, so avoid them for dogs with kidney or bladder issues." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Beets? Nutritious Root Veggie | CanMyPetEat" description="Beets are safe for dogs and packed with nutrients. Learn about preparation and why poop may turn red." canonical="/can-dogs-eat/beets" petType="dog" food="Beets" safety="safe">
      <ArticleBody quickAnswer="Yes — cooked beets are safe for dogs in moderation. They're rich in fiber, vitamin C, folate, manganese, and potassium. Note: beets will temporarily turn your dog's stool and urine red — this is normal, not blood." details="Beets are a nutritious root vegetable safe for dogs. They provide fiber, vitamin C, folate, manganese, potassium, and iron. The natural nitrates in beets may support cardiovascular health. Cooked beets (steamed, boiled, or roasted) are easier to digest than raw. Cut into small pieces to prevent choking. The deep red pigment (betanin) will color your dog's stool and urine — don't panic, this is completely harmless. Avoid pickled beets (vinegar, salt), canned beets with added sodium, and beet juice (too concentrated). Beet pulp is commonly used in dog food as a fiber source." symptoms="Very safe. Red-colored stool/urine (normal from pigment). Too much: mild digestive upset from fiber." whatToDo="Beets are safe. If you notice red stool, remember it's the beet pigment, not blood." safeAlternatives="Carrots, sweet potato, pumpkin, and green beans are other safe root/veggie options." faqs={faqs} />
    </ArticleLayout>
  );
}
