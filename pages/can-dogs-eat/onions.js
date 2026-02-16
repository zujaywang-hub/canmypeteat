import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "How much onion is toxic to dogs?", a: "As little as 0.5% of a dog's body weight can be toxic. For a 30-pound dog, that's about 2.5 ounces — roughly half a medium onion. However, even smaller amounts consumed regularly can cause cumulative damage." },
  { q: "Are cooked onions safe for dogs?", a: "No. Cooking does not destroy the toxic compounds (thiosulphates) in onions. Fried, baked, boiled, dehydrated, or raw — all forms are equally dangerous." },
  { q: "What about onion powder in food?", a: "Onion powder is actually more potent than fresh onion because it's concentrated. Even small amounts of onion powder in seasonings, soups, or baby food can be harmful to dogs." },
];

export default function CanDogsEatOnions() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Onions? No — Highly Toxic | CanMyPetEat"
      description="Onions are toxic to dogs in all forms — raw, cooked, powdered, or dehydrated. They damage red blood cells and can cause life-threatening anemia."
      canonical="/can-dogs-eat/onions"
      petType="dog"
      food="Onions"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="No — onions are highly toxic to dogs. All parts of the onion plant (flesh, leaves, juice, powder) contain thiosulphates, compounds that damage red blood cells and cause hemolytic anemia. This applies to all forms: raw, cooked, fried, powdered, and dehydrated. Even small amounts eaten regularly can cause cumulative damage."
        details="Onions belong to the Allium family, which also includes garlic, leeks, shallots, chives, and scallions — all of which are toxic to dogs. The toxic compounds (organosulfoxides) are absorbed through the gastrointestinal tract and converted into oxidizing agents that attack red blood cells, forming Heinz bodies and causing the cells to rupture. This leads to hemolytic anemia, where the body destroys its own red blood cells faster than it can produce new ones. The damage is dose-dependent and cumulative, meaning small amounts over time are just as dangerous as one large dose. Japanese breeds like Akitas and Shiba Inus are particularly susceptible, but all dogs are at risk."
        symptoms="Symptoms may not appear for several days after ingestion. Watch for: lethargy and weakness, pale or yellowish gums, decreased appetite, vomiting and diarrhea, rapid breathing or panting, elevated heart rate, reddish or brown-colored urine, and collapse."
        whatToDo="If your dog ate onion, contact your veterinarian immediately. If ingestion was recent (within 1-2 hours), a vet may induce vomiting. Blood tests may be needed to monitor red blood cell counts. Severe cases may require blood transfusions and oxygen therapy. Keep the packaging of any food product your dog ate — the ingredient list helps your vet assess the risk."
        safeAlternatives="If you want to add flavor to your dog's food, try plain cooked carrots, green beans, or a small amount of plain cooked pumpkin. These are safe, nutritious, and most dogs enjoy them."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
