import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Is tofu a good protein source for dogs?", a: "Tofu provides plant protein but isn't as complete as animal protein for dogs. It can supplement but shouldn't replace meat in a dog's diet." },
  { q: "Can dogs be allergic to tofu?", a: "Yes — soy is a common allergen in dogs. If your dog hasn't had soy before, introduce tofu slowly and watch for reactions." },
  { q: "Can dogs eat fried tofu?", a: "Not recommended. Fried tofu is high in oil and often seasoned. Plain cooked tofu is the safe option." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Tofu? Soy Protein Guide | CanMyPetEat" description="Tofu is safe for dogs in small amounts. Learn about soy allergies and when tofu might help." canonical="/can-dogs-eat/tofu" petType="dog" food="Tofu" safety="safe">
      <ArticleBody quickAnswer="Yes — plain tofu is safe for dogs in small amounts. It provides plant protein, iron, and calcium. Particularly useful for dogs with meat protein allergies. However, some dogs are allergic to soy." details="Tofu is made from soybeans and is non-toxic to dogs. It provides protein, iron, calcium, and isoflavones. For dogs with allergies to common meat proteins (chicken, beef), tofu can be a useful alternative protein source. Serve plain — no garlic, soy sauce, or spicy seasonings. Silken, firm, or extra-firm tofu are all safe. Avoid fried tofu, mapo tofu, or any seasoned preparations. Introduce slowly as soy is a known allergen for some dogs. Tofu should complement a balanced diet, not replace animal protein entirely, as dogs need complete amino acids from animal sources." symptoms="Most dogs: safe. Soy-allergic dogs: itching, skin issues, digestive upset, ear infections." whatToDo="If your dog ate plain tofu, no concerns. Watch for allergy signs if it's a first-time food." safeAlternatives="Lean cooked chicken, turkey, or fish are better primary protein sources. Cottage cheese and eggs are other non-meat protein options." faqs={faqs} />
    </ArticleLayout>
  );
}
