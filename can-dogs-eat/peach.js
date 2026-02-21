import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are peach pits dangerous for dogs?", a: "Extremely. Peach pits are a choking hazard, can cause intestinal blockage, and contain amygdalin which releases cyanide when broken down." },
  { q: "Can dogs eat canned peaches?", a: "Not recommended. Canned peaches are packed in sugary syrup. If you must, rinse thoroughly, but fresh is always better." },
  { q: "How much peach can a dog eat?", a: "A few small slices as a treat. Remove pit, leaves, and stem. High sugar means moderation." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Peaches? Pit Danger Warning | CanMyPetEat" description="Peach flesh is safe for dogs but the pit is extremely dangerous. Learn proper preparation and pit risks." canonical="/can-dogs-eat/peach" petType="dog" food="Peach" safety="safe">
      <ArticleBody quickAnswer="Flesh — yes, in moderation. Pit — EXTREMELY DANGEROUS. Fresh peach flesh is safe, nutritious, and most dogs love it. Always remove the pit completely — it's a choking hazard, can cause intestinal blockage, and contains cyanide compounds." details="Peach flesh provides vitamins A and C, fiber, and antioxidants. Most dogs enjoy the sweet taste and soft texture. However, the peach pit is a triple threat: it's the perfect size to lodge in a dog's throat or intestine, the hard surface can damage teeth, and it contains amygdalin which converts to hydrogen cyanide when metabolized. Peach leaves and stems also contain cyanide compounds. Always cut peach flesh away from the pit and serve in small pieces. Avoid canned peaches (too much sugar) and peach-flavored products (artificial ingredients)." symptoms="Flesh: safe. Pit swallowed: choking, intestinal blockage (vomiting, loss of appetite, abdominal pain). Pit crushed/chewed: potential cyanide poisoning (difficulty breathing, bright red gums)." whatToDo="If your dog ate peach flesh, no worries. If your dog swallowed a peach pit, contact your vet — it may pass naturally but monitoring is essential, and surgery may be needed for blockage." safeAlternatives="Watermelon (no seeds), blueberries, banana, and apple slices (no seeds) are safer fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
