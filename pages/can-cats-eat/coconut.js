import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is coconut oil good for cats?", a: "In very small amounts, coconut oil may help with hairballs and dry skin. Too much causes diarrhea and weight gain. Start with 1/4 teaspoon." },
  { q: "Can cats drink coconut milk?", a: "Small amounts of pure coconut milk are generally safe, but it's high in fat. Avoid sweetened or flavored coconut milk products." },
  { q: "Can cats eat coconut yogurt?", a: "Plain unsweetened coconut yogurt in tiny amounts is generally safe. Check for added sweeteners, especially xylitol." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Coconut? Oil, Milk & Flesh Guide | CanMyPetEat" description="Coconut flesh is safe for cats in small amounts. Learn about coconut oil, milk, and what to avoid." canonical="/can-cats-eat/coconut" petType="cat" food="Coconut" safety="caution">
      <ArticleBody quickAnswer="Small amounts of coconut flesh are safe. Coconut oil in tiny doses may help hairballs. Coconut water is not recommended (high potassium). The shell is dangerous. Always feed sparingly due to high fat content." details="Coconut flesh contains medium-chain triglycerides (MCTs) which are easily digestible fats. In very small amounts, coconut or coconut oil may help with hairballs by lubricating the digestive tract, and support skin and coat health. However, coconut is very high in fat and calories — too much will cause diarrhea and contribute to obesity. Coconut water is high in potassium and not recommended. Coconut shell fragments are sharp and dangerous. If using coconut oil, start with just 1/4 teaspoon and increase slowly. Not all cats tolerate coconut well." symptoms="Small amounts: usually fine. Too much: diarrhea, vomiting, weight gain. Coconut water: stomach upset from potassium." whatToDo="If your cat ate a small amount of coconut, monitor for digestive upset. If diarrhea occurs, discontinue coconut." safeAlternatives="For hairball help, commercial hairball remedies or a small amount of plain pumpkin are safer options." faqs={faqs} />
    </ArticleLayout>
  );
}
