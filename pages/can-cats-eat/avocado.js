import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is avocado in cat food safe?", a: "Some premium cat foods contain avocado oil or avocado meal, which are processed to remove persin. These are generally considered safe in commercial formulations." },
  { q: "What part of avocado is most dangerous?", a: "The pit, skin, and leaves contain the highest concentrations of persin. The flesh has the least, but still enough to potentially cause problems." },
  { q: "My cat licked some guacamole. Should I worry?", a: "Guacamole contains both avocado and usually garlic/onion, which are toxic to cats. Monitor your cat closely and contact your vet if symptoms develop." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Avocado? Persin Toxicity Explained | CanMyPetEat" description="Avocado contains persin which can be harmful to cats. Learn about the risks and what to do if your cat eats avocado." canonical="/can-cats-eat/avocado" petType="cat" food="Avocado" safety="caution">
      <ArticleBody quickAnswer="Not recommended — avocado contains persin, a fungicidal toxin that can cause vomiting and diarrhea in cats. While cats are less sensitive than some other animals, the pit is also a serious choking and obstruction hazard." details="Persin is present in all parts of the avocado plant — fruit, pit, skin, and leaves. While cats are more resistant to persin than birds or horses, it can still cause gastrointestinal upset. The flesh contains the least persin, but the high fat content can also lead to stomach issues and potentially pancreatitis. The large pit poses a serious choking hazard and can cause life-threatening intestinal blockage if swallowed. Some commercial cat foods contain processed avocado ingredients (oil or meal) which have had persin removed — these are generally considered safe." symptoms="Vomiting, diarrhea, abdominal discomfort. High fat content may cause pancreatitis with symptoms of severe vomiting, loss of appetite, and lethargy. Pit: choking, intestinal blockage." whatToDo="If your cat ate a small amount of avocado flesh, monitor for digestive upset. If your cat swallowed avocado pit or large pieces, contact your vet immediately. If your cat ate guacamole (contains garlic/onion), seek vet advice promptly." safeAlternatives="Cooked pumpkin, small pieces of banana, cooked chicken, and commercial cat treats are safer options." faqs={faqs} />
    </ArticleLayout>
  );
}
