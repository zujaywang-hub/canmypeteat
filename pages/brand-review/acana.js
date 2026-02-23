import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is ACANA as good as Orijen?", a: "ACANA has slightly less meat (50-75% vs 75-85%) and is more affordable. Both are made by Champion Petfoods with the same quality standards. ACANA is an excellent value for premium food." },
  { q: "Is ACANA good for cats?", a: "Yes — ACANA cat formulas have high meat content, no grains, and quality ingredients. One of the better options for obligate carnivores." },
  { q: "Has ACANA had any recalls?", a: "ACANA has had minimal recalls compared to many brands. Champion Petfoods maintains strict quality control in their own facilities." },
];
export default function Page() {
  return (
    <ArticleLayout title="ACANA Pet Food Review — Ingredient Analysis | CanMyPetEat" description="Detailed ingredient analysis of ACANA pet food. Rating: A-. Premium quality at a better price than Orijen." canonical="/brand-review/acana" petType="dog" food="ACANA (Brand)" safety="safe">
      <ArticleBody quickAnswer="Overall Rating: A- — ACANA is a premium pet food brand by Champion Petfoods (same makers as Orijen). With 50-75% animal ingredients, quality sourcing, and no grains, it offers excellent nutrition at a lower price point than Orijen." details="PROS: High meat content (50-75% animal ingredients). Made by Champion Petfoods in their own facilities. Uses fresh and raw animal ingredients. No grains, corn, wheat, soy, or artificial preservatives. Multiple formulas for different needs (regional recipes, singles for allergies, etc.). More affordable than Orijen while maintaining high quality. CONS: Still more expensive than mainstream brands. High protein may not suit all pets (kidney issues). Some recipes use legumes which are controversial. Limited availability in some areas. TYPICAL INGREDIENTS: Fresh chicken, chicken meal, turkey meal, whole red lentils, fresh chicken liver — real animal proteins dominate the ingredient list." symptoms="" whatToDo="ACANA is an excellent choice for healthy pets. Transition gradually over 7-14 days when switching from another food. The high protein content means starting slowly is especially important." safeAlternatives="Same quality tier: Orijen (A, higher meat content, higher price). Similar quality: Blue Buffalo Wilderness, Merrick, Taste of the Wild." faqs={faqs} />
    </ArticleLayout>
  );
}
