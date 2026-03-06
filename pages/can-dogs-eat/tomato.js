import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat cherry tomatoes?", a: "Ripe cherry tomatoes are safe in moderation. Just make sure they're fully red/ripe, and cut them in half to prevent choking." },
  { q: "Can dogs eat tomato sauce?", a: "Not recommended. Most tomato sauces contain garlic, onion, salt, sugar, and spices — all problematic for dogs." },
  { q: "My dog ate a green tomato. What should I do?", a: "Monitor for vomiting, diarrhea, or lethargy. A small amount likely won't cause serious harm, but contact your vet if symptoms develop." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Tomatoes? Ripe Only — Green Parts Are Toxic | CanMyPetEat" description="Ripe red tomatoes are safe for dogs in small amounts. Green tomatoes, stems, and leaves contain solanine and tomatine which are toxic." canonical="/can-dogs-eat/tomato" petType="dog" food="Tomatoes" safety="caution">
      <ArticleBody
        quickAnswer="Ripe, red tomatoes are safe for dogs in small amounts. But green tomatoes, stems, leaves, and the plant itself contain solanine and tomatine — toxic compounds that can cause gastrointestinal and neurological problems. If you have tomato plants in your garden, keep your dog away from them."
        details="Tomatoes are a member of the nightshade family, and the unripe (green) parts contain two harmful compounds: solanine and tomatine. As tomatoes ripen and turn red, these compounds decrease to negligible levels, making ripe tomatoes safe for dogs. The flesh of a ripe red tomato is actually nutritious — it contains lycopene (an antioxidant), vitamin C, potassium, and fiber. However, tomato-based products like ketchup, pasta sauce, and salsa are not recommended because they typically contain garlic, onion, salt, sugar, and spices. If you want to give your dog tomato, stick to plain, ripe, fresh tomato in small amounts."
        symptoms="Green tomato/plant ingestion: drooling, vomiting, diarrhea, lethargy, weakness, confusion, slow heart rate. Ripe tomato: safe, no symptoms in normal amounts."
        whatToDo="If your dog ate ripe tomato, no worries. If they ate green tomato or chewed on a tomato plant, monitor closely and contact your vet if symptoms develop. Bring a sample of what they ate if possible."
        safeAlternatives="For a similar nutritional profile without the nightshade concern, try red bell pepper (rich in vitamin C and lycopene), carrots, or pumpkin."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
