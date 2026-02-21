import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat corn on the cob?", a: "NO. While corn kernels are safe, the cob is extremely dangerous. Corn cobs are the perfect size to block a dog's intestine and are one of the most common causes of emergency surgery in dogs." },
  { q: "Is corn in dog food good or bad?", a: "Corn in commercial dog food is a controversial topic. It provides carbohydrates and some nutrients, but many nutritionists consider it a low-quality filler. Some dogs are allergic to corn." },
  { q: "Can dogs eat popcorn?", a: "Plain, air-popped popcorn without butter or salt is safe in small amounts. Avoid kernels as they can damage teeth or cause choking." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Corn? Cob Dangers Explained | CanMyPetEat" description="Corn kernels are safe for dogs, but corn cobs are extremely dangerous. Learn the important difference." canonical="/can-dogs-eat/corn" petType="dog" food="Corn" safety="caution">
      <ArticleBody quickAnswer="Corn kernels — yes, in moderation. Corn cobs — absolutely NOT. Plain corn kernels off the cob are safe and found in many dog foods, but corn cobs are one of the most common causes of intestinal blockage in dogs." details="Corn itself is not toxic to dogs and provides carbohydrates, fiber, and some vitamins. However, corn cobs are extremely dangerous because dogs tend to swallow large chunks that can completely obstruct the intestine, often requiring emergency surgery. Corn is also a common allergen for dogs, causing itching, ear infections, and digestive issues. If you feed corn, remove all kernels from the cob and serve plain without butter or salt." symptoms="Corn kernels: generally safe; may cause allergic reactions in sensitive dogs. Corn cobs: vomiting, loss of appetite, abdominal pain, constipation, lethargy — signs of intestinal obstruction requiring emergency vet care." whatToDo="If your dog ate corn kernels, no worry. If your dog swallowed a corn cob or large pieces of cob, contact your vet immediately — this is a medical emergency that may require surgery." safeAlternatives="Green beans, carrots, plain peas, and sweet potato are all nutritious vegetable treats that are safer than corn." faqs={faqs} />
    </ArticleLayout>
  );
}
