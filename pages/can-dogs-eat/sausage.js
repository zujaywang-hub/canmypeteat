import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat breakfast sausage?", a: "Not recommended. Breakfast sausage is high in fat, salt, and often contains garlic and onion powder, both of which are toxic to dogs." },
  { q: "My dog ate a sausage off the grill. Is that okay?", a: "A single plain sausage probably won't cause serious harm to a large dog, but watch for digestive upset. The concern is repeated exposure and the high fat and sodium content." },
  { q: "What meats are safe for dogs?", a: "Plain cooked chicken, turkey, lean beef, and salmon are all safe. Always serve without seasoning, bones, or skin." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Sausage? Why It's Risky | CanMyPetEat" description="Sausage is not recommended for dogs due to high fat, salt, and potentially toxic seasonings like garlic and onion." canonical="/can-dogs-eat/sausage" petType="dog" food="Sausage" safety="caution">
      <ArticleBody quickAnswer="Not recommended — sausage is high in fat, sodium, and often contains garlic powder, onion powder, and other seasonings that are toxic to dogs. A tiny piece occasionally won't likely cause harm, but it should not be a regular treat." details="Sausages are highly processed meats loaded with fat (often 30-50% fat), excessive sodium, and preservatives like sodium nitrite. Most sausages contain garlic and onion powder in their seasoning blends, both of which belong to the allium family and are toxic to dogs — damaging red blood cells and potentially causing anemia. The high fat content also puts dogs at risk of pancreatitis, a painful and potentially life-threatening inflammation of the pancreas." symptoms="Mild: vomiting, diarrhea, excessive thirst, gas. Serious (from garlic/onion content or pancreatitis): lethargy, abdominal pain, pale gums, loss of appetite, weakness." whatToDo="If your dog ate a small amount of sausage, monitor for digestive upset. If your dog consumed a large quantity or shows signs of pancreatitis (repeated vomiting, severe abdominal pain), contact your vet." safeAlternatives="Plain cooked chicken breast, lean ground turkey, boiled beef, and cooked salmon are healthier protein options without the harmful additives." faqs={faqs} />
    </ArticleLayout>
  );
}
