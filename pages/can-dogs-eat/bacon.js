import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat turkey bacon?", a: "It's slightly better than regular bacon (lower fat) but still very high in sodium. Not recommended as a regular treat." },
  { q: "Can a small piece of bacon hurt my dog?", a: "A tiny piece occasionally is unlikely to cause harm for a healthy dog. But it shouldn't become a habit due to the high fat and sodium content." },
  { q: "Can dogs eat bacon grease?", a: "No. Bacon grease is pure fat and one of the fastest ways to trigger pancreatitis in dogs. Never add it to their food." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Bacon? Not Recommended | CanMyPetEat" description="Bacon is very high in fat and salt, which can cause pancreatitis and sodium poisoning in dogs. Not recommended as a treat." canonical="/can-dogs-eat/bacon" petType="dog" food="Bacon" safety="caution">
      <ArticleBody
        quickAnswer="Not recommended. While bacon isn't toxic, it's one of the worst 'human foods' to share with your dog. It's extremely high in fat (which can trigger pancreatitis), loaded with sodium (risk of sodium poisoning), and often contains preservatives like nitrates. A tiny piece once in a while probably won't hurt, but it should never be a regular treat."
        details="Bacon is essentially a triple threat for dogs: high fat, high sodium, and processed with preservatives. The fat content is the biggest concern — pancreatitis (inflammation of the pancreas) is a serious, painful, and potentially life-threatening condition commonly triggered by high-fat foods. A single fatty meal can cause acute pancreatitis in susceptible dogs. The sodium content is also concerning: a single strip of bacon contains about 137mg of sodium, while a small dog only needs about 100mg per day total. Repeated high-sodium meals can lead to high blood pressure and heart disease. The nitrates used in curing bacon have also been linked to cancer in long-term studies."
        symptoms="Mild: vomiting, diarrhea, excessive thirst. Severe (pancreatitis): persistent vomiting, severe abdominal pain, hunched posture, fever, lethargy."
        whatToDo="If your dog stole a strip of bacon, don't panic — just monitor. If they ate a large amount, watch for signs of pancreatitis over the next 24-48 hours and contact your vet if symptoms develop."
        safeAlternatives="For a savory treat dogs love just as much, try small pieces of plain cooked chicken, lean turkey, or commercial bacon-flavored dog treats (which are formulated to be safe)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
