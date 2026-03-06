import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "What cheese is best for dogs?", a: "Low-fat options like mozzarella or cottage cheese are best. Avoid blue cheese (contains roquefortine C, which is toxic) and high-fat cheeses that could trigger pancreatitis." },
  { q: "Can dogs eat cream cheese?", a: "Plain cream cheese in small amounts is generally safe, but it's high in fat. Avoid flavored varieties that may contain garlic, onion, or xylitol." },
  { q: "How much cheese can I give my dog?", a: "Treats including cheese should make up no more than 10% of your dog's daily calories. For a medium dog, that's about 1-2 small cubes per day." },
];

export default function CanDogsEatCheese() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Cheese? Mostly Safe With Cautions | CanMyPetEat"
      description="Most dogs can eat cheese in moderation. It's a great training treat, but watch for lactose intolerance and avoid high-fat or flavored varieties."
      canonical="/can-dogs-eat/cheese"
      petType="dog"
      food="Cheese"
      safety="caution"
    >
      <ArticleBody
        quickAnswer="Yes, most dogs can eat cheese in small amounts — but with some important caveats. Many dogs are lactose intolerant, so cheese can cause digestive upset. High-fat cheeses can trigger pancreatitis, and some varieties (like blue cheese) are actually toxic. Use it as an occasional treat, not a regular food."
        details="Cheese is a popular dog treat and an excellent tool for hiding pills. It's high in protein, calcium, and vitamins A and B12. However, like most mammals, many dogs lose the ability to digest lactose efficiently as they age. Aged cheeses like cheddar, parmesan, and Swiss contain less lactose than fresh cheeses, making them better options for sensitive dogs. The main risks are: lactose intolerance (gas, bloating, diarrhea), high fat content (can trigger pancreatitis in susceptible dogs), and high sodium (problematic for dogs with heart or kidney issues). Blue cheeses like Roquefort, Stilton, and Gorgonzola contain roquefortine C, a mycotoxin that can cause vomiting, diarrhea, and seizures in dogs."
        symptoms="If your dog is lactose intolerant: gas, bloating, diarrhea, and stomach cramps. If too much fat: vomiting, diarrhea, lethargy, and potentially pancreatitis. If blue cheese: vomiting, diarrhea, tremors, seizures."
        whatToDo="If your dog ate a small amount of regular cheese and seems fine, just monitor them. If they ate blue cheese or a large amount, or if they show persistent vomiting or lethargy, contact your vet."
        safeAlternatives="For a lower-risk treat, try small pieces of plain cooked chicken, carrot sticks, or apple slices. If your dog loves cheese but is lactose intolerant, try lactose-free cheese or plain cottage cheese in very small amounts."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
