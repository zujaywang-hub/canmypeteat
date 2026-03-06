import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw salmon?", a: "NO. Raw salmon can contain Neorickettsia helminthoeca parasite which causes 'salmon poisoning disease' — fatal in 90% of untreated dogs. Always cook salmon thoroughly." },
  { q: "Can dogs eat salmon skin?", a: "Cooked salmon skin is safe and actually rich in omega-3s. Just make sure it's fully cooked and not seasoned." },
  { q: "How much salmon can I give my dog?", a: "As a treat: a piece about the size of your thumb, 1-2 times per week. As a meal component: about 100g per 10 lbs of body weight." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Salmon? Yes — But NEVER Raw | CanMyPetEat" description="Cooked salmon is excellent for dogs, rich in omega-3 fatty acids for skin, coat, and brain health. Raw salmon is potentially fatal — always cook thoroughly." canonical="/can-dogs-eat/salmon" petType="dog" food="Salmon" safety="safe">
      <ArticleBody
        quickAnswer="Cooked salmon — absolutely yes, it's one of the best foods for dogs! Raw salmon — NEVER. Cooked salmon is rich in omega-3 fatty acids that support skin, coat, joint, brain, and immune health. But raw or undercooked salmon (especially Pacific salmon) can carry a parasite that causes 'salmon poisoning disease,' which is fatal in about 90% of untreated dogs."
        details="Salmon is arguably the single best protein you can add to your dog's diet. The omega-3 fatty acids (EPA and DHA) provide a remarkable range of benefits: they reduce inflammation (helping with arthritis and allergies), promote a shiny coat and healthy skin, support brain development in puppies, maintain cognitive function in senior dogs, and boost immune function. Many premium dog foods feature salmon as a primary protein. The critical safety rule is thorough cooking — salmon poisoning disease is caused by Neorickettsia helminthoeca, a rickettsial organism carried by a fluke parasite in raw salmon. It's found primarily in Pacific salmon from the West Coast of North America. Symptoms appear within 6 days and the disease is fatal without treatment. Cooking to 145°F (63°C) kills the parasite completely."
        symptoms="Raw salmon poisoning: vomiting, diarrhea, fever, swollen lymph nodes, weakness, dehydration — appears within 6 days and is fatal without treatment."
        whatToDo="Bake, grill, poach, or steam salmon until it reaches 145°F (63°C) internal temperature. Remove all bones. Serve plain without oil, lemon, butter, or seasonings. Canned salmon (boneless, in water) is also a convenient option."
        safeAlternatives="Other omega-3 rich fish for dogs include sardines (low mercury, great choice), mackerel, anchovies, and whitefish."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
