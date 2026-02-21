import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How much honey can I give my dog?", a: "Less than one teaspoon per day for small dogs, up to one tablespoon for large dogs. Honey is very high in sugar." },
  { q: "Can puppies eat honey?", a: "No. Puppies under one year should not eat raw honey because it may contain botulism spores that their immature immune systems cannot handle." },
  { q: "Does honey help with dog allergies?", a: "Some owners report that local raw honey helps with seasonal allergies, but scientific evidence is limited. Consult your vet before using honey as an allergy treatment." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Honey? Benefits & Risks | CanMyPetEat" description="Honey is safe for adult dogs in small amounts. Learn about benefits, risks, and why puppies should avoid it." canonical="/can-dogs-eat/honey" petType="dog" food="Honey" safety="caution">
      <ArticleBody quickAnswer="Yes, in small amounts — raw honey is safe for healthy adult dogs and contains natural vitamins and antioxidants. However, it's very high in sugar, should be avoided by puppies, and is not suitable for diabetic or overweight dogs." details="Honey contains natural sugars, small amounts of vitamins (B, C, D, E, K), minerals, and antioxidants. Some dog owners use local raw honey to help with seasonal allergies, though scientific evidence for this is limited. Manuka honey has natural antibacterial properties and is sometimes applied topically to minor wounds. However, honey is essentially pure sugar — too much can cause obesity, dental problems, and blood sugar spikes. Never give honey to puppies under 12 months, as raw honey may contain Clostridium botulinum spores." symptoms="Small amounts: generally safe. Excessive consumption: obesity, dental problems, diarrhea. Puppies: risk of botulism (weakness, difficulty breathing, paralysis)." whatToDo="If your adult dog ate a small amount of honey, no concern needed. If a puppy consumed honey and shows signs of weakness or difficulty moving, contact your vet immediately." safeAlternatives="Mashed banana, plain pumpkin puree, and blueberries provide natural sweetness with more nutritional value and less sugar." faqs={faqs} />
    </ArticleLayout>
  );
}
