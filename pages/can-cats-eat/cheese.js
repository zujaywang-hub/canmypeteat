import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Why do cats like cheese if they're lactose intolerant?", a: "Cats are attracted to the high fat and protein content in cheese, not the lactose. They enjoy the rich taste and smell, even though their bodies can't properly digest the lactose component." },
  { q: "Can I use cheese to give my cat medicine?", a: "A tiny amount of cheese can work as a pill pocket. Use low-lactose cheeses like aged cheddar or Swiss. But if your cat has any digestive issues, ask your vet for alternatives." },
  { q: "What about lactose-free cheese for cats?", a: "Lactose-free cheese is a better option than regular cheese, but it's still high in fat and salt. It should still only be an occasional tiny treat." },
];

export default function CanCatsEatCheese() {
  return (
    <ArticleLayout
      title="Can Cats Eat Cheese? Only Tiny Amounts | CanMyPetEat"
      description="Most cats are lactose intolerant, so cheese can cause digestive upset. A tiny piece occasionally is usually fine, but it shouldn't be a regular treat."
      canonical="/can-cats-eat/cheese"
      petType="cat"
      food="Cheese"
      safety="caution"
    >
      <ArticleBody
        quickAnswer="In tiny amounts, occasionally — most cats can tolerate a small nibble. But most adult cats are lactose intolerant, so cheese can cause digestive problems like diarrhea, gas, and stomach cramps. If you do give cheese, keep it to a pea-sized piece and choose low-lactose varieties like aged cheddar or Swiss."
        details="Despite the popular image of cats and dairy, the reality is that most adult cats cannot digest lactose properly. Kittens produce plenty of lactase (the enzyme that breaks down lactose) to digest their mother's milk, but most cats lose this ability as they mature. When a lactose-intolerant cat eats cheese, the undigested lactose ferments in the gut, causing gas, bloating, and diarrhea. Beyond lactose, cheese is also high in fat and calories — a one-inch cube of cheddar has about 115 calories, which is nearly half of a typical cat's daily caloric needs. Regular cheese consumption can quickly lead to obesity. That said, aged/hard cheeses (cheddar, parmesan, Swiss, Gouda) contain significantly less lactose than soft cheeses (mozzarella, cream cheese, cottage cheese) and are better tolerated by most cats."
        symptoms="Diarrhea, gas and bloating, stomach cramps, vomiting. Symptoms usually appear within 8-12 hours of consumption. If your cat eats cheese regularly and is overweight, the high caloric density could be a contributing factor."
        whatToDo="If your cat ate a small piece of cheese and is acting normally, just monitor them. If they develop persistent diarrhea or vomiting, withhold food for a few hours and offer water. If symptoms continue beyond 24 hours, consult your vet."
        safeAlternatives="For a high-protein treat cats love, try small pieces of plain cooked chicken or turkey, commercial cat treats, freeze-dried meat treats, or a tiny amount of plain cooked fish. These are all better tolerated and more nutritionally appropriate for cats."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
