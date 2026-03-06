import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat coconut oil?", a: "In small amounts, yes. Coconut oil may support skin and coat health. Start with 1/4 teaspoon for small dogs. Too much causes diarrhea." },
  { q: "Can dogs drink coconut water?", a: "Not recommended. Coconut water is high in potassium and can cause stomach upset. Plain water is always the best choice." },
  { q: "Is coconut shell dangerous for dogs?", a: "Yes. Coconut shell is very hard and can damage teeth, cause choking, or create intestinal blockage. Keep it away from dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Coconut? Flesh, Oil & Water Guide | CanMyPetEat" description="Coconut flesh is safe for dogs in small amounts. Learn about coconut oil benefits and why coconut water should be avoided." canonical="/can-dogs-eat/coconut" petType="dog" food="Coconut" safety="caution">
      <ArticleBody quickAnswer="Coconut flesh — yes, in small amounts. Coconut oil — yes, sparingly. Coconut water — not recommended (high potassium). Coconut shell — dangerous." details="Fresh coconut flesh contains healthy medium-chain triglycerides (MCTs), fiber, and minerals. In small amounts, it can support skin health and provide a tasty treat. Coconut oil has anti-inflammatory and antibacterial properties and is sometimes used to improve coat condition. However, coconut is high in fat and calories, so portions should be small to avoid weight gain and digestive upset. Coconut water is too high in potassium for dogs and should be avoided. The hard shell can damage teeth and cause intestinal blockage." symptoms="Small amounts of flesh: generally safe. Too much: diarrhea, soft stools, bloating from high fat content. Coconut water: stomach upset from high potassium." whatToDo="If your dog ate a small amount of coconut flesh, no worries. If your dog consumed coconut shell pieces, monitor for signs of obstruction and contact your vet if you notice vomiting or loss of appetite." safeAlternatives="Pumpkin, sweet potato, and watermelon are healthier treat options with less fat content." faqs={faqs} />
    </ArticleLayout>
  );
}
