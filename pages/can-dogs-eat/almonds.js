import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are almonds toxic to dogs?", a: "Almonds are not toxic like macadamia nuts, but they are difficult to digest and pose choking and obstruction risks. They are not recommended." },
  { q: "My dog ate one almond. Should I worry?", a: "One almond is unlikely to cause serious problems for a medium or large dog. Watch for signs of choking, vomiting, or discomfort. Small dogs are at higher risk." },
  { q: "Can dogs eat almond butter?", a: "Plain, unsalted almond butter in small amounts is safer than whole almonds since there's no choking risk. Check the label for xylitol, which is toxic to dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Almonds? Risks Explained | CanMyPetEat" description="Almonds are not recommended for dogs. While not toxic, they pose choking and digestive risks. Learn why." canonical="/can-dogs-eat/almonds" petType="dog" food="Almonds" safety="caution">
      <ArticleBody quickAnswer="Not recommended — while almonds aren't toxic like macadamia nuts, they are difficult for dogs to digest, can be a choking hazard, and may cause intestinal blockage. Salted or flavored almonds add additional risks." details="Dogs cannot chew almonds as thoroughly as humans, meaning they often swallow large pieces that can obstruct the esophagus, stomach, or intestines — especially in small breeds. Almonds are also high in fat, which can contribute to pancreatitis with regular consumption. Flavored almonds (garlic, onion, chocolate-coated) pose additional toxic risks. Even unsalted almonds can cause water retention and gastrointestinal distress." symptoms="Choking, vomiting, diarrhea, abdominal pain, loss of appetite, lethargy. Signs of pancreatitis: severe abdominal pain, repeated vomiting, decreased appetite." whatToDo="If your dog ate a few almonds, monitor closely for 24 hours. If your dog shows signs of obstruction (repeated vomiting, inability to defecate, abdominal pain), seek veterinary care immediately." safeAlternatives="Peanut butter (xylitol-free), plain cooked pumpkin, carrot sticks, and blueberries are safer treat options." faqs={faqs} />
    </ArticleLayout>
  );
}
