import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "How much chocolate is toxic to dogs?", a: "As little as 1 ounce of dark chocolate per pound of body weight can be lethal. Even small amounts of milk chocolate can cause vomiting and diarrhea. Baker's chocolate and cocoa powder are the most dangerous forms." },
  { q: "My dog ate a small piece of chocolate. Should I worry?", a: "It depends on the type and amount. A small piece of milk chocolate for a large dog may only cause mild stomach upset, but dark chocolate or cocoa is much more dangerous. When in doubt, call your vet or ASPCA Poison Control at (888) 426-4435." },
  { q: "How long after eating chocolate will a dog get sick?", a: "Symptoms typically appear within 6-12 hours of ingestion. Theobromine has a half-life of about 17.5 hours in dogs, so symptoms can last 24-72 hours." },
  { q: "What should I do if my dog ate chocolate?", a: "Call your vet immediately. Note the type of chocolate, approximate amount eaten, and your dog's weight. Do NOT induce vomiting unless instructed by a veterinarian." },
];

export default function CanDogsEatChocolate() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Chocolate? Why It's Dangerous | CanMyPetEat"
      description="Chocolate is toxic to dogs. It contains theobromine and caffeine, which dogs metabolize much slower than humans, leading to poisoning even in small amounts."
      canonical="/can-dogs-eat/chocolate"
      petType="dog"
      food="Chocolate"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="No — chocolate is toxic to dogs. It contains theobromine and caffeine, which dogs cannot metabolize efficiently. Even small amounts can cause serious illness, and large amounts can be fatal. Dark chocolate and baking cocoa are the most dangerous."
        details="The toxic compounds in chocolate are theobromine and caffeine, both belonging to a class of chemicals called methylxanthines. While humans can metabolize theobromine quickly (half-life of 2-3 hours), dogs process it much more slowly (half-life of ~17.5 hours), allowing it to build up to toxic levels. The toxicity depends on the type of chocolate: white chocolate has very little theobromine, milk chocolate contains moderate amounts, and dark chocolate and cocoa powder have the highest concentrations. A general rule: the darker and more bitter the chocolate, the more dangerous it is."
        symptoms="Vomiting and diarrhea (often within 2-4 hours), restlessness and hyperactivity, rapid breathing and elevated heart rate, excessive urination, muscle tremors and seizures, and in severe cases, cardiac failure and death."
        whatToDo="If your dog has eaten chocolate, call your veterinarian or ASPCA Poison Control at (888) 426-4435 immediately. Try to note: the type of chocolate (dark, milk, white, cocoa powder), the approximate amount consumed, your dog's weight, and the time of ingestion. Do not try to induce vomiting at home unless specifically directed by a vet."
        safeAlternatives="Carob is a dog-safe chocolate substitute that looks and tastes similar but contains no theobromine. Many pet stores sell carob-based dog treats. Other safe snack options include blueberries, apple slices (no seeds), and plain cooked sweet potato."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
