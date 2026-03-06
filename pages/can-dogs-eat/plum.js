import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are plum pits as dangerous as peach pits?", a: "Yes — plum pits contain the same cyanide compounds and pose the same choking and blockage risks. Always remove the pit completely." },
  { q: "Can dogs eat dried plums (prunes)?", a: "Not recommended. Prunes are very high in sugar and fiber, which can cause significant diarrhea and stomach upset in dogs." },
  { q: "My dog ate a plum from the ground. Should I worry?", a: "If the plum was fresh and your dog likely swallowed the pit, monitor for choking and digestive distress. Fermented fallen fruit also contains alcohol. Contact your vet if concerned." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Plums? Pit & Cyanide Warning | CanMyPetEat" description="Plum flesh is safe for dogs but pits contain cyanide and cause blockage. Learn proper preparation." canonical="/can-dogs-eat/plum" petType="dog" food="Plum" safety="caution">
      <ArticleBody quickAnswer="Flesh only — plum flesh is safe in small amounts, but the pit, stem, and leaves contain cyanide compounds. The pit is also a choking and blockage hazard. Given the risks, safer fruit options exist." details="Plum flesh provides vitamins A and C, fiber, and antioxidants. However, like peaches and cherries, plum pits contain amygdalin which releases hydrogen cyanide when broken down. The pit also poses a serious choking and intestinal blockage risk, especially for smaller dogs. Plum leaves and stems are also toxic. Fallen plums in yards can ferment, producing alcohol that's dangerous if consumed. Prunes (dried plums) are extremely high in sugar and fiber, likely causing severe diarrhea. Due to these multiple risks, most vets recommend choosing safer fruits instead." symptoms="Flesh: safe. Pit: choking, blockage, cyanide risk if crushed. Fermented plums: alcohol poisoning symptoms. Prunes: severe diarrhea." whatToDo="If your dog ate plum flesh only, no concerns. If a pit was swallowed, monitor closely for 24-48 hours and contact your vet if vomiting or distress occurs." safeAlternatives="Blueberries, watermelon, banana, and apple slices (no seeds) are much safer fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
