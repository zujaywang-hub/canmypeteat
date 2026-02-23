import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat kiwi skin?", a: "The skin is technically safe but very tough and hard to digest. Always peel kiwi before giving to your dog." },
  { q: "Can dogs eat kiwi seeds?", a: "Yes, the tiny black seeds in kiwi are safe for dogs. No need to remove them." },
  { q: "How much kiwi can a dog eat?", a: "A few small slices for medium dogs. Kiwi is high in vitamin C and fiber, but too much can cause stomach upset." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Kiwi? Vitamin C Powerhouse | CanMyPetEat" description="Kiwi is safe for dogs and loaded with vitamin C. Learn how to prepare and serve it properly." canonical="/can-dogs-eat/kiwi" petType="dog" food="Kiwi" safety="safe">
      <ArticleBody quickAnswer="Yes — kiwi flesh is safe for dogs and packed with vitamin C, potassium, and fiber. Peel the skin (hard to digest), cut into small pieces, and serve in moderation." details="Kiwi is a nutrient-dense fruit that's safe for dogs. It contains more vitamin C per gram than oranges, plus potassium, fiber, and antioxidants. The tiny black seeds are safe to eat. However, the fuzzy skin is tough and can cause digestive issues or even blockage in small dogs, so always peel it. The high fiber content means too much kiwi can cause stomach upset and diarrhea. Introduce slowly and keep portions small. Whole kiwi can be a choking hazard for smaller dogs, so always cut into appropriate pieces." symptoms="Peeled flesh: generally very safe. Skin: potential digestive issues, blockage in small dogs. Too much: stomach upset, diarrhea." whatToDo="If your dog ate peeled kiwi, no worries. If your dog swallowed large pieces of kiwi skin, monitor for digestive discomfort." safeAlternatives="Blueberries, watermelon, strawberries, and banana are other safe fruit treats." faqs={faqs} />
    </ArticleLayout>
  );
}
