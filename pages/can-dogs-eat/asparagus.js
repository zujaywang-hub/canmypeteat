import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw asparagus?", a: "It's safe but very tough and hard to digest raw. Cooking makes it much easier for dogs to eat and digest." },
  { q: "Is asparagus fern toxic to dogs?", a: "Yes! The asparagus fern (ornamental plant) is toxic to dogs, causing vomiting, diarrhea, and skin irritation. This is different from the vegetable." },
  { q: "Will asparagus make my dog's urine smell?", a: "Possibly — asparagus affects urine odor in dogs just as it does in humans." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Asparagus? Tough But Safe | CanMyPetEat" description="Asparagus is safe for dogs but tough to eat raw. Learn why cooking is better and about asparagus fern danger." canonical="/can-dogs-eat/asparagus" petType="dog" food="Asparagus" safety="safe">
      <ArticleBody quickAnswer="Yes — cooked asparagus is safe for dogs. It provides vitamins K, A, C, and fiber. Raw asparagus is tough and hard to digest. Cook until tender, cut into small pieces, and serve plain." details="Asparagus is non-toxic and nutritious for dogs, providing vitamins K, A, B9, C, E, and fiber. However, raw asparagus stalks are very tough and difficult for dogs to chew and digest, potentially causing choking or digestive issues. Steaming, boiling, or grilling until tender makes asparagus much more suitable. Cut into bite-sized pieces and serve without butter, oil, garlic, or seasoning. Important: the asparagus fern (Asparagus setaceus), a common ornamental houseplant, IS toxic to dogs — don't confuse it with the edible vegetable." symptoms="Cooked: very safe. Raw: potential choking, hard to digest. Asparagus fern plant: vomiting, diarrhea, skin irritation." whatToDo="Cooked plain asparagus is safe. If your dog ate asparagus fern (the plant), contact your vet." safeAlternatives="Green beans, broccoli, carrots, and zucchini are easier vegetables for dogs to eat." faqs={faqs} />
    </ArticleLayout>
  );
}
