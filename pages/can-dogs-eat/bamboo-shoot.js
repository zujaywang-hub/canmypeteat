import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw bamboo shoots?", a: "No — raw bamboo shoots contain cyanogenic glycosides that release cyanide. Always cook thoroughly before feeding." },
  { q: "Can dogs eat canned bamboo shoots?", a: "Yes — canned bamboo shoots are pre-cooked and safe. Choose low-sodium varieties and rinse before serving." },
  { q: "Is bamboo safe for dogs to chew?", a: "Dried bamboo sticks may splinter. Bamboo plants themselves are generally non-toxic but the shoots need cooking." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Bamboo Shoots? Must Cook First | CanMyPetEat" description="Cooked bamboo shoots are safe for dogs but raw contains cyanide compounds. Learn proper preparation." canonical="/can-dogs-eat/bamboo-shoot" petType="dog" food="Bamboo Shoots" safety="caution">
      <ArticleBody quickAnswer="Cooked only — raw bamboo shoots contain cyanogenic glycosides that release cyanide when metabolized. Thorough cooking eliminates this danger. Cooked or canned bamboo shoots in small amounts are safe." details="Bamboo shoots are popular in Asian cuisine and can be shared with dogs when properly prepared. Raw bamboo shoots contain taxiphyllin, a cyanogenic glycoside that releases hydrogen cyanide during digestion. Cooking (boiling for 20+ minutes) effectively destroys these compounds. Canned bamboo shoots are already cooked and safe. Fresh bamboo shoots should be boiled thoroughly before serving. Provide plain, unseasoned, and cut into small pieces. Bamboo shoots are low in calories and provide some fiber." symptoms="Cooked: safe. Raw: potential cyanide toxicity — vomiting, weakness, difficulty breathing." whatToDo="If cooked/canned bamboo was eaten, no concerns. If raw bamboo shoots were consumed, monitor and contact vet if symptoms develop." safeAlternatives="Carrots, green beans, and cooked sweet potato are safer vegetable options." faqs={faqs} />
    </ArticleLayout>
  );
}
