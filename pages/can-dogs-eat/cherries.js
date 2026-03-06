import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "My dog ate a whole cherry with the pit. Should I worry?", a: "One cherry pit is unlikely to cause cyanide poisoning, but it could cause choking or blockage. Monitor your dog and contact your vet if you notice vomiting or distress." },
  { q: "Can dogs eat maraschino cherries?", a: "Not recommended. While the pits are removed, maraschino cherries are loaded with sugar and artificial coloring." },
  { q: "Are cherry stems and leaves dangerous?", a: "Yes — cherry stems, leaves, and pits all contain cyanogenic glycosides that release cyanide. Keep all parts except the flesh away from dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Cherries? Pit, Stem & Leaf Dangers | CanMyPetEat" description="Cherry flesh is safe but pits, stems, and leaves contain cyanide. Learn why cherries require careful preparation." canonical="/can-dogs-eat/cherries" petType="dog" food="Cherries" safety="caution">
      <ArticleBody quickAnswer="The flesh only, with extreme caution — cherry flesh is safe, but pits, stems, and leaves all contain cyanide compounds. Given the small flesh-to-pit ratio and the effort to prepare safely, cherries aren't worth the risk. Safer fruits are available." details="Cherry flesh provides vitamins A and C, fiber, and antioxidants. However, the pit, stem, and leaves of cherries all contain cyanogenic glycosides which release hydrogen cyanide when damaged or digested. While a single cherry pit is unlikely to cause cyanide poisoning in a larger dog, it presents a choking and intestinal blockage risk. The small size of cherries makes it difficult to properly remove all dangerous parts, and dogs often swallow them whole. For these reasons, most veterinarians recommend avoiding cherries entirely and choosing safer fruits instead." symptoms="Flesh only: safe. Pit ingestion: choking risk, intestinal blockage. Multiple crushed pits: cyanide poisoning — difficulty breathing, bright red gums, dilated pupils, shock." whatToDo="If your dog ate a few cherries with pits, monitor for choking and digestive distress. If your dog consumed many cherry pits or shows breathing difficulty, contact your vet immediately." safeAlternatives="Blueberries, strawberries, watermelon, and raspberries provide similar antioxidant benefits without any pit danger." faqs={faqs} />
    </ArticleLayout>
  );
}
