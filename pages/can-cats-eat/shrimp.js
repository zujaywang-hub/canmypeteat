import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat raw shrimp?", a: "Not recommended. Raw shrimp may contain bacteria and parasites. Always cook shrimp thoroughly before giving to your cat." },
  { q: "Can cats eat shrimp shells?", a: "No. Shrimp shells can cause choking and are difficult to digest. Always peel shrimp completely before offering to your cat." },
  { q: "How often can cats eat shrimp?", a: "Shrimp should be an occasional treat only — once or twice a week at most, in small amounts alongside their regular balanced diet." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Shrimp? Seafood Safety Guide | CanMyPetEat" description="Cooked shrimp is safe for cats and most love it. Learn how to prepare it safely and how much to feed." canonical="/can-cats-eat/shrimp" petType="cat" food="Shrimp" safety="safe">
      <ArticleBody quickAnswer="Yes — most cats love shrimp, and cooked, peeled, deveined shrimp is a safe and healthy treat. It's high in protein and low in calories. Always serve plain without seasoning." details="Shrimp is an excellent occasional treat for cats. It's high in protein, low in calories, and contains omega-3 fatty acids, vitamin B12, and phosphorus. Most cats go crazy for the taste and smell of shrimp. However, always cook shrimp thoroughly to kill bacteria and parasites — steamed or boiled is best. Remove the shell, tail, and vein completely. Never serve fried shrimp or shrimp with garlic butter, cocktail sauce, or seasonings. Shrimp is relatively low in mercury compared to larger fish like tuna." symptoms="Cooked, plain shrimp: generally very safe. Raw shrimp: potential vomiting, diarrhea from bacteria. Allergic reaction (rare): itching, swelling, difficulty breathing." whatToDo="If your cat ate plain cooked shrimp, no worries. If your cat ate shrimp with garlic seasoning, monitor for signs of garlic toxicity. If allergic reaction occurs, seek immediate vet care." safeAlternatives="Cooked salmon, sardines in water, cooked chicken, and commercial fish-flavored cat treats are other great protein-rich options." faqs={faqs} />
    </ArticleLayout>
  );
}
