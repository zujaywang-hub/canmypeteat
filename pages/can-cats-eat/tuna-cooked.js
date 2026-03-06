import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How should I cook tuna for my cat?", a: "Plain steamed, baked, or boiled with no seasoning. No oil, butter, garlic, or salt. Canned tuna in water is the easiest option." },
  { q: "Is fresh tuna better than canned for cats?", a: "Fresh cooked tuna is slightly better as you control the preparation. Both are acceptable as occasional treats. Avoid canned tuna in oil or with added salt." },
  { q: "Can I feed my cat tuna every day?", a: "No. Daily tuna risks mercury accumulation and nutritional deficiencies. Once or twice a week maximum." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Cooked Tuna? Best Practices | CanMyPetEat" description="Cooked tuna is safer than raw for cats. Learn proper preparation, frequency, and mercury concerns." canonical="/can-cats-eat/tuna-cooked" petType="cat" food="Cooked Tuna" safety="caution">
      <ArticleBody quickAnswer="As an occasional treat — yes. Cooked tuna is safer than raw (no thiaminase or bacteria risk) but still carries mercury concerns with regular feeding. Limit to once or twice weekly, plain, unseasoned." details="Cooking tuna eliminates the thiaminase enzyme present in raw fish that destroys vitamin B1, and kills harmful bacteria. This makes cooked tuna safer than raw. However, the mercury concern remains regardless of preparation method — tuna has the highest mercury levels of commonly consumed fish. Additionally, tuna alone is not nutritionally complete for cats. It lacks sufficient taurine, has improper mineral ratios, and can become addictive. For the safest preparation, steam, bake, or boil tuna with no oil, butter, or seasoning. Never use garlic, onion, or heavy spices." symptoms="Occasional small amounts: safe and enjoyable. Regular/daily: mercury accumulation, nutritional imbalance, potential tuna addiction." whatToDo="Occasional cooked tuna treats are fine. If your cat has been eating mainly tuna, gradually transition back to balanced cat food." safeAlternatives="Cooked salmon (lower mercury), sardines in water, cooked cod, and commercial fish-flavored cat food." faqs={faqs} />
    </ArticleLayout>
  );
}
