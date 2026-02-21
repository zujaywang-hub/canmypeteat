import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw shrimp?", a: "No. Raw shrimp can contain harmful bacteria and parasites. Always serve shrimp fully cooked, peeled, and deveined." },
  { q: "How much shrimp can a dog eat?", a: "Shrimp should be an occasional treat only. A few small shrimp for a medium dog is plenty. Too much can cause digestive upset." },
  { q: "Can dogs eat shrimp tails?", a: "No. Shrimp shells and tails are a choking hazard and can cause intestinal blockage. Always remove them completely." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Shrimp? Safety Guide | CanMyPetEat" description="Yes, dogs can eat cooked shrimp in moderation. Learn how to safely prepare shrimp for your dog." canonical="/can-dogs-eat/shrimp" petType="dog" food="Shrimp" safety="safe">
      <ArticleBody quickAnswer="Yes — cooked, peeled, and deveined shrimp is safe for dogs in moderation. Shrimp is low in calories and high in protein, making it a healthy occasional treat." details="Shrimp is an excellent source of protein, phosphorus, vitamin B12, and niacin while being low in fat and calories. However, it must be fully cooked to kill harmful bacteria and parasites. Always remove the shell, tail, and vein before feeding to your dog. Avoid fried shrimp or shrimp cooked with garlic, butter, or seasonings. Plain steamed or boiled shrimp is the safest option." symptoms="Raw shrimp: vomiting, diarrhea, fever from bacterial contamination. Shells/tails: choking, intestinal blockage." whatToDo="If your dog ate raw shrimp, monitor for signs of illness over 24-48 hours. If your dog swallowed shell fragments and shows signs of distress, contact your vet." safeAlternatives="Other safe seafood options include cooked salmon, cooked cod, cooked tilapia, and sardines canned in water." faqs={faqs} />
    </ArticleLayout>
  );
}
