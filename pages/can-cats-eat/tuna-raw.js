import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Why do cats love tuna so much?", a: "Cats are attracted to the strong smell and high protein content of tuna. The amino acid profile closely matches what cats crave. However, this preference can become an unhealthy addiction." },
  { q: "Can cats eat canned tuna in oil?", a: "Not recommended. The added oil significantly increases fat and calorie content. Choose tuna canned in water if you want to give your cat an occasional treat." },
  { q: "How often can I give my cat tuna?", a: "No more than once or twice a week, in small amounts. Tuna should never replace balanced cat food due to mercury concerns and nutritional imbalances." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Raw Tuna? Mercury & Thiaminase Risks | CanMyPetEat" description="Raw tuna is risky for cats due to thiaminase and mercury. Cooked tuna in moderation is safer. Learn the full guide." canonical="/can-cats-eat/tuna-raw" petType="cat" food="Raw Tuna" safety="caution">
      <ArticleBody quickAnswer="Raw tuna — not recommended due to thiaminase enzyme and bacteria. Cooked tuna — okay as occasional treat only. Tuna is not nutritionally complete for cats and has high mercury content. Never make it a staple food." details="Raw fish including tuna contains thiaminase, an enzyme that destroys thiamine (vitamin B1). Thiamine deficiency in cats can cause serious neurological problems. Raw tuna also carries risk of bacterial contamination. Even cooked tuna poses problems if fed regularly: it's high in mercury, can become addictive (cats may refuse other food), lacks essential nutrients like taurine in sufficient amounts, and doesn't provide the balanced nutrition cats need. The high protein and strong smell make tuna irresistible to most cats, but this preference shouldn't dictate their diet." symptoms="Raw tuna bacteria: vomiting, diarrhea, fever. Long-term tuna diet: thiamine deficiency (loss of appetite, neurological issues, seizures), mercury accumulation, malnutrition." whatToDo="If your cat ate a small amount of raw tuna, monitor for digestive upset. If your cat has been eating primarily tuna for weeks and shows neurological symptoms, see your vet for thiamine and nutritional testing." safeAlternatives="Cooked salmon (occasional), cooked chicken breast, commercial cat treats with fish flavor, and high-quality fish-based wet cat food provide the taste cats love with proper nutrition." faqs={faqs} />
    </ArticleLayout>
  );
}
