import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can cats eat canned tuna meant for humans?", a: "Occasionally and in small amounts, yes — but only tuna packed in water, not oil. Human canned tuna lacks essential nutrients cats need and has too much sodium for regular feeding." },
  { q: "Can cats get addicted to tuna?", a: "Yes, 'tuna addiction' is a real phenomenon in cats. Some cats become so fixated on tuna that they refuse other food. This is dangerous because an all-tuna diet leads to serious nutritional deficiencies." },
  { q: "Is tuna-flavored cat food safe?", a: "Yes — commercial tuna-flavored cat food is formulated to be nutritionally complete, unlike plain tuna. It's a much better option than feeding human tuna regularly." },
];

export default function CanCatsEatTuna() {
  return (
    <ArticleLayout
      title="Can Cats Eat Tuna? Yes, But With Important Limits | CanMyPetEat"
      description="Cats can eat small amounts of tuna as an occasional treat, but it should never be a regular diet. Too much tuna causes mercury buildup and nutritional deficiencies."
      canonical="/can-cats-eat/tuna"
      petType="cat"
      food="Tuna"
      safety="caution"
    >
      <ArticleBody
        quickAnswer="In small amounts, occasionally — yes. But tuna should never be a staple of your cat's diet. Most cats love tuna, but regular consumption poses real risks: mercury accumulation, nutritional deficiencies (tuna lacks taurine and other nutrients cats need), and potential 'tuna addiction' where cats refuse all other food."
        details="Cats are famously attracted to tuna — the strong smell and rich flavor make it irresistible to most felines. A small amount as an occasional treat is fine, but problems arise when tuna becomes a regular part of the diet. First, tuna accumulates mercury from the ocean, and cats are small enough that even moderate consumption can lead to mercury poisoning over time. Second, plain tuna doesn't contain adequate taurine — an essential amino acid that cats cannot produce on their own, and taurine deficiency leads to heart disease, vision problems, and reproductive issues. Third, canned tuna packed in oil is too high in unsaturated fats, which can lead to steatitis (a painful inflammatory condition). If you want to treat your cat to tuna, use tuna packed in water, give only a tablespoon or so at a time, and limit it to once or twice a week at most."
        symptoms="From occasional small amounts: usually none. From regular/excessive consumption: loss of appetite, weight loss, poor coordination, skin problems (from mercury), heart problems and vision changes (from taurine deficiency), and painful inflammation of body fat (steatitis from excess unsaturated fats)."
        whatToDo="If your cat has been eating primarily tuna, transition them gradually to a nutritionally complete cat food. Mix decreasing amounts of tuna with increasing amounts of quality cat food over 7-10 days. If your cat shows any neurological symptoms, see a vet for mercury testing."
        safeAlternatives="For fish-loving cats, commercial tuna-flavored cat food is the best option — it's formulated to be nutritionally complete. Small amounts of cooked salmon or sardines (rich in omega-3s and lower in mercury than tuna) are also good occasional treats."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
