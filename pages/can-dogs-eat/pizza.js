import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat pizza crust?", a: "Plain pizza crust is basically bread — not harmful in small amounts, but empty calories. The issue is toppings and sauce residue on the crust, which likely contain garlic." },
  { q: "My dog ate a slice of pizza. What should I do?", a: "One slice is unlikely to cause an emergency for a medium/large dog. Monitor for digestive upset. The main concern is garlic in the sauce — if your dog is small, contact your vet." },
  { q: "What pizza toppings are dangerous for dogs?", a: "Garlic and onion (in sauce and toppings), pepperoni/sausage (high fat and sodium), mushrooms (if wild), and anything with hot peppers." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Pizza? No — Multiple Hazards | CanMyPetEat" description="Pizza contains garlic, onion, high-fat cheese, processed meats, and excessive sodium — multiple risk factors that make it unsafe for dogs." canonical="/can-dogs-eat/pizza" petType="dog" food="Pizza" safety="caution">
      <ArticleBody
        quickAnswer="No — pizza combines several things that are bad for dogs. The sauce almost always contains garlic and onion (toxic). The cheese is high in fat and lactose. The crust is empty carbohydrates. And toppings like pepperoni, sausage, and ham are loaded with sodium and fat. While a single accidental bite of pizza probably won't be an emergency, it's not something you should intentionally share with your dog."
        details="Pizza is a perfect storm of dog-unfriendly ingredients. Let's break it down: The sauce — nearly every pizza sauce recipe includes garlic and often onion, both of which are toxic to dogs. Even a thin layer of sauce contains enough garlic to be concerning for small dogs. The cheese — high in fat (pancreatitis risk) and lactose (digestive upset for lactose-intolerant dogs). The processed meat toppings — pepperoni, sausage, and ham are extremely high in sodium and saturated fat, with added preservatives like nitrates. The crust — while the least dangerous component, it's essentially empty calories and some crusts contain garlic butter. Put it all together and pizza hits almost every 'foods to avoid' category for dogs."
        symptoms="Mild: digestive upset, excessive thirst, gas. Moderate: vomiting, diarrhea. Severe (if large amount): pancreatitis, garlic/onion toxicity."
        whatToDo="If your dog grabbed a bite of pizza, monitor for digestive upset. For small dogs or if they ate several slices, contact your vet — the garlic in the sauce is the main concern. Provide fresh water."
        safeAlternatives="Want to make a dog-friendly 'pizza'? Spread plain pumpkin puree on a rice cake, add tiny bits of plain cooked chicken, and top with a sprinkle of shredded mozzarella. It's a fun treat without the hazards."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
