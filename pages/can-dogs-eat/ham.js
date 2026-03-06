import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat deli ham?", a: "Not recommended. Deli ham is extremely high in sodium and often contains preservatives, nitrates, and sometimes garlic or onion seasoning." },
  { q: "Can dogs eat ham bones?", a: "No. Cooked ham bones are very hard and can crack teeth, splinter, and cause choking or internal damage." },
  { q: "My dog ate a piece of ham. Should I worry?", a: "A small piece of ham is unlikely to cause problems. Just watch for excessive thirst, vomiting, or diarrhea. Don't make it a habit." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Ham? Not Recommended | CanMyPetEat" description="Ham is very high in sodium and fat, making it a poor choice for dogs. It can cause pancreatitis and sodium poisoning." canonical="/can-dogs-eat/ham" petType="dog" food="Ham" safety="caution">
      <ArticleBody
        quickAnswer="Not recommended. While ham isn't toxic to dogs, it's one of the saltiest and fattiest meats you could give them. A single slice of deli ham can contain 300-400mg of sodium — that's more than a small dog's entire daily allowance. The high fat content also puts dogs at risk for pancreatitis. An occasional tiny piece probably won't cause harm, but ham should not be a regular treat."
        details="Ham is problematic for dogs for several reasons. First, it's cured with large amounts of salt (sodium chloride) and often sugar, creating a sodium bomb for your pet. Second, it's high in fat, which is the primary trigger for pancreatitis in dogs. Third, many hams are glazed with brown sugar, honey, or contain cloves and other spices. Fourth, processed ham products (deli slices, canned ham) often contain sodium nitrite, phosphates, and other preservatives that aren't healthy for dogs long-term. Holiday ham is a particularly common culprit for emergency vet visits — well-meaning family members slip ham to dogs under the table, and the combination of salt and fat causes acute digestive distress or pancreatitis."
        symptoms="Mild: excessive thirst, urination, digestive upset. Moderate: vomiting, diarrhea. Severe (from large amounts): pancreatitis, sodium poisoning with tremors and seizures."
        whatToDo="If your dog ate a small piece, just provide fresh water and monitor. If they ate a large quantity of ham, watch for vomiting, lethargy, or signs of pancreatitis over the next 24-48 hours and contact your vet if symptoms develop."
        safeAlternatives="For a protein treat your dog will enjoy just as much, try plain cooked chicken breast, lean turkey, or freeze-dried single-ingredient meat treats."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
