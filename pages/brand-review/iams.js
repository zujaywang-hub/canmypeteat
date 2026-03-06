import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is IAMS a good cat food?", a: "IAMS is a solid mid-range option. It uses real chicken as the first ingredient in most formulas and provides decent nutrition at a reasonable price." },
  { q: "Is IAMS better than Purina?", a: "IAMS is generally comparable to Purina ONE. Both are mid-range options with real meat as the first ingredient. IAMS has a slight edge in some formulas." },
  { q: "Has IAMS had quality issues?", a: "IAMS has had some recalls over the years, but maintains generally consistent quality. It's now owned by Mars Petcare." },
];
export default function Page() {
  return (
    <ArticleLayout title="IAMS Cat & Dog Food Review — Ingredient Analysis | CanMyPetEat" description="Detailed ingredient analysis of IAMS pet food. Rating: B. A solid mid-range option with real meat." canonical="/brand-review/iams" petType="dog" food="IAMS (Brand)" safety="safe">
      <ArticleBody quickAnswer="Overall Rating: B — IAMS is a reliable mid-range pet food brand owned by Mars. Real chicken or lamb is typically the first ingredient. A reasonable everyday food that balances quality and affordability." details="PROS: Real meat (chicken or lamb) is the first ingredient in most formulas. Tailored nutrition for different life stages and sizes. ProActive Health line offers good targeted nutrition. Reasonable price for the ingredient quality. Widely available in most stores. CONS: Some formulas include corn meal and chicken by-product meal. Contains beet pulp (filler, though it does provide fiber). Not as high in meat content as premium brands. Some formulas use dried egg product rather than whole eggs. TYPICAL INGREDIENTS: Chicken, corn meal, chicken by-product meal, dried beet pulp, natural flavor — real chicken leads, but fillers follow. Overall a solid choice for budget-conscious pet owners who want better than the cheapest options." symptoms="" whatToDo="IAMS is a reasonable everyday food. Use our CanMyPetEat tool to check specific formulas by pasting the ingredient list from the bag." safeAlternatives="Similar tier: Purina ONE (B). Step up: Hill's Science Diet (B+), Blue Buffalo (A-). Premium: ACANA (A-), Orijen (A)." faqs={faqs} />
    </ArticleLayout>
  );
}
