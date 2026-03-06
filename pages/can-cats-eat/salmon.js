import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat raw salmon?", a: "Not recommended. Raw salmon can contain parasites and bacteria. It also contains an enzyme (thiaminase) that breaks down thiamine (vitamin B1), leading to deficiency with regular raw feeding." },
  { q: "Can cats eat canned salmon?", a: "Occasionally, yes — choose canned salmon in water, not oil. Check for added salt. It shouldn't replace balanced cat food." },
  { q: "How much salmon can I give my cat?", a: "A tablespoon-sized portion once or twice a week is plenty. Salmon should be a treat, not a staple." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Salmon? Yes — A Great Occasional Treat | CanMyPetEat" description="Cooked salmon is an excellent treat for cats, rich in omega-3 fatty acids and protein. Serve cooked, plain, and in moderation." canonical="/can-cats-eat/salmon" petType="cat" food="Salmon" safety="safe">
      <ArticleBody
        quickAnswer="Yes — cooked salmon is a fantastic treat for cats! It's rich in high-quality protein and omega-3 fatty acids that support skin, coat, joint, and brain health. Most cats absolutely love the taste and smell of salmon. Just make sure it's fully cooked, served plain, and given in moderation — it shouldn't replace balanced cat food."
        details="Salmon is one of the best fish treats you can give your cat. The omega-3 fatty acids (EPA and DHA) provide anti-inflammatory benefits, promote a glossy coat, and support brain health. The high-quality protein aligns well with cats' carnivorous dietary needs. Many premium cat foods feature salmon as a primary protein source. However, there are important caveats: always cook salmon thoroughly (raw salmon contains thiaminase which destroys vitamin B1, and may harbor parasites). Don't feed salmon exclusively — cats need a varied diet with proper taurine and other nutrients. Canned salmon in water is a convenient option, but check sodium content. Smoked salmon is too high in salt for cats."
        whatToDo="Bake, steam, or poach salmon until fully cooked (145°F/63°C). Remove all bones. Flake into small pieces. Serve plain — no lemon, butter, dill, or seasoning. Offer a tablespoon-sized portion as a treat."
        safeAlternatives="Other great fish treats for cats include sardines (lower in mercury), cooked cod, cooked tilapia, and cooked shrimp (remove shell)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
