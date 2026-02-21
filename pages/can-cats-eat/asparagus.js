import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is asparagus fern toxic to cats?", a: "YES — the asparagus fern (ornamental plant) is toxic to cats, causing vomiting, diarrhea, and skin irritation. Don't confuse it with the edible vegetable." },
  { q: "Can cats eat raw asparagus?", a: "Raw asparagus is very tough for cats. If offering, cook until soft and cut into small pieces." },
  { q: "Do cats need vegetables?", a: "No. Cats are obligate carnivores and get all their nutrition from meat. Vegetables are optional treats at best." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Asparagus? Safe but Unnecessary | CanMyPetEat" description="Cooked asparagus is safe for cats but offers little benefit. Beware of toxic asparagus fern plants." canonical="/can-cats-eat/asparagus" petType="cat" food="Asparagus" safety="safe">
      <ArticleBody quickAnswer="Yes — cooked asparagus is safe for cats, though most cats show little interest. It provides some vitamins and fiber but is not necessary for obligate carnivores. Important: the asparagus FERN (houseplant) is TOXIC to cats." details="The edible asparagus vegetable is non-toxic to cats. Cooked asparagus provides vitamins K, A, C, and folate. However, cats are obligate carnivores with no need for vegetables, and most cats won't eat asparagus willingly. If your cat shows interest, steam until tender, cut into small pieces, and serve plain. Raw asparagus is too tough for cats. Critical warning: the asparagus fern (Asparagus setaceus/densiflorus), a common ornamental houseplant, is toxic to cats and can cause skin irritation on contact and GI upset if ingested." symptoms="Cooked vegetable: safe, no concerns. Asparagus fern plant: vomiting, diarrhea, abdominal pain, skin irritation." whatToDo="Cooked asparagus is safe. If your cat ate asparagus fern (the plant), contact your vet." safeAlternatives="Cooked pumpkin, steamed carrots, and cat grass are safer plant-based options." faqs={faqs} />
    </ArticleLayout>
  );
}
