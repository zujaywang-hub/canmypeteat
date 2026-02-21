import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat raw zucchini?", a: "Yes, but cooked is easier to digest. Raw zucchini is crunchy and some cats enjoy the texture." },
  { q: "Is zucchini good for overweight cats?", a: "Yes — extremely low in calories, it can be mixed with food as a low-calorie filler for cats needing to lose weight." },
  { q: "Can cats eat zucchini skin?", a: "Yes, the skin is safe. Wash thoroughly to remove pesticide residue." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Zucchini? Low-Cal Safe Treat | CanMyPetEat" description="Zucchini is safe for cats and very low in calories. Great for overweight cats on a diet." canonical="/can-cats-eat/zucchini" petType="cat" food="Zucchini" safety="safe">
      <ArticleBody quickAnswer="Yes — zucchini is safe for cats, raw or cooked. Very low in calories, it's one of the best vegetable options for overweight cats. Serve plain, washed, and cut into small pieces." details="Zucchini is non-toxic, extremely low in calories, and provides vitamins A, C, manganese, and potassium. Both raw and cooked are safe, though cooked is easier to digest. Some vets recommend adding small amounts of zucchini to food for overweight cats as a low-calorie filler. The skin is safe and contains additional fiber. Wash thoroughly and cut into appropriately small pieces. Avoid fried zucchini or preparations with butter, garlic, or seasoning. Not all cats will be interested — that's normal for obligate carnivores." symptoms="Very safe. Minimal risk at any reasonable amount." whatToDo="No concerns. Zucchini is one of the safest vegetables for cats." safeAlternatives="Cucumber, cooked pumpkin, lettuce, and steamed carrots are other safe low-calorie options." faqs={faqs} />
    </ArticleLayout>
  );
}
