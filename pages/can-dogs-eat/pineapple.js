import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat pineapple core?", a: "No. The core is very hard and can cause choking or intestinal blockage. Only serve the soft flesh." },
  { q: "Does pineapple stop dogs from eating poop?", a: "Some owners report that feeding pineapple makes a dog's feces taste unpleasant, deterring coprophagia. Evidence is anecdotal but it's worth trying." },
  { q: "Can dogs eat canned pineapple?", a: "Only if packed in juice, not syrup. Pineapple in heavy syrup has far too much sugar. Fresh pineapple is always best." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Pineapple? Enzyme Benefits | CanMyPetEat" description="Pineapple flesh is safe for dogs in moderation. Learn about bromelain benefits and what parts to avoid." canonical="/can-dogs-eat/pineapple" petType="dog" food="Pineapple" safety="safe">
      <ArticleBody quickAnswer="Yes — fresh pineapple flesh is safe for dogs in moderation. It contains bromelain (a digestive enzyme), vitamin C, and manganese. Remove the tough outer skin and hard core before serving." details="Pineapple provides vitamin C, manganese, thiamine, and bromelain — a natural enzyme that aids protein digestion. Some owners use pineapple to help deter coprophagia (poop eating), though evidence is anecdotal. The flesh should be cut into small bite-sized pieces. Never give dogs the tough outer skin (can cause blockage) or the hard core (choking hazard). Pineapple is high in natural sugar and acid, so portions should be small. Avoid canned pineapple in heavy syrup due to excessive sugar." symptoms="Small amounts: safe. Too much: diarrhea, stomach upset from acidity and sugar. Skin/core: choking, intestinal blockage." whatToDo="If your dog ate pineapple flesh, no concerns. If your dog ate the skin or core, monitor for choking or digestive distress." safeAlternatives="Watermelon, blueberries, mango (no pit), and cantaloupe are other safe tropical fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
