import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Are cats more sensitive to onions than dogs?", a: "Yes. Cats are 2-3 times more susceptible to onion toxicity than dogs. Their red blood cells are more vulnerable to oxidative damage from the toxic compounds in onions." },
  { q: "Can cats eat food cooked with onions?", a: "No. The toxic compounds survive cooking and dissolve into sauces, soups, and gravies. If a dish was cooked with onions, it's unsafe for cats even if you remove the onion pieces." },
  { q: "What about baby food with onion powder?", a: "Many baby foods contain onion powder and should never be given to cats. Always read the ingredient label carefully. Even small amounts of onion powder can be dangerous because it's concentrated." },
];

export default function CanCatsEatOnions() {
  return (
    <ArticleLayout
      title="Can Cats Eat Onions? No — Extremely Toxic to Cats | CanMyPetEat"
      description="Onions are extremely toxic to cats — even more so than to dogs. All forms of onion can cause life-threatening anemia in cats."
      canonical="/can-cats-eat/onions"
      petType="cat"
      food="Onions"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="Absolutely not — onions are extremely toxic to cats, and cats are even more sensitive to onion toxicity than dogs. All forms of onion (raw, cooked, powdered, dehydrated) and all members of the Allium family (garlic, leeks, chives, shallots) are dangerous. Even small amounts can cause life-threatening hemolytic anemia."
        details="Cats are particularly vulnerable to onion toxicity because their red blood cells are more susceptible to oxidative damage than those of other species. The toxic compounds in onions (organosulfoxides) are absorbed and converted into highly reactive oxidants that attack hemoglobin in red blood cells, forming structures called Heinz bodies. These damaged cells are then destroyed by the spleen, leading to hemolytic anemia — a condition where the body destroys red blood cells faster than it can replace them. As little as 5 grams of onion per kilogram of body weight can be toxic to cats. For a 4kg (9lb) cat, that's only about 20 grams — less than half a small onion. The damage is cumulative, meaning even tiny amounts consumed regularly can lead to chronic anemia. Common hidden sources include: baby food (often contains onion powder), soup mixes, pizza sauce, gravy, and many pre-made meals."
        symptoms="Symptoms may take 1-5 days to appear: lethargy and weakness, pale or yellowish gums, rapid or labored breathing, decreased appetite, dark reddish-brown urine, vomiting, diarrhea, and elevated heart rate."
        whatToDo="If your cat ate any amount of onion, contact your vet immediately. Even if your cat seems fine, blood tests may be needed to detect red blood cell damage before symptoms appear. Severe cases may require blood transfusions and hospitalization. Don't wait for symptoms — early intervention is critical."
        safeAlternatives="If you want to add flavor to homemade cat food, try a small amount of plain cooked chicken broth (make sure it contains no onion, garlic, or excessive salt), or a tiny bit of nutritional yeast, which many cats enjoy."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
