import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Is chocolate more toxic to cats than dogs?", a: "Yes. Cats are more sensitive to theobromine than dogs, and their smaller size means less chocolate is needed to reach toxic levels. However, cats are less likely to eat chocolate because they can't taste sweetness." },
  { q: "My cat licked chocolate. Should I worry?", a: "A tiny lick is unlikely to cause harm, but monitor your cat for any symptoms. If they consumed more than a lick, contact your vet." },
  { q: "What types of chocolate are most dangerous to cats?", a: "Dark chocolate, baking chocolate, and cocoa powder have the highest theobromine concentrations and are most dangerous. White chocolate has very little theobromine but is still unhealthy due to fat and sugar content." },
];

export default function CanCatsEatChocolate() {
  return (
    <ArticleLayout
      title="Can Cats Eat Chocolate? No — Even More Toxic Than for Dogs | CanMyPetEat"
      description="Chocolate is highly toxic to cats. Cats are even more sensitive to theobromine than dogs. Keep all chocolate products away from your cat."
      canonical="/can-cats-eat/chocolate"
      petType="cat"
      food="Chocolate"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="No — chocolate is toxic to cats and even more dangerous for them than for dogs. Cats are more sensitive to theobromine (the toxic compound in chocolate) and their small body size means even tiny amounts can cause serious poisoning. The good news: cats can't taste sweetness, so they're less likely to eat chocolate voluntarily — but accidents happen."
        details="Like dogs, cats cannot efficiently metabolize theobromine and caffeine, the two toxic methylxanthines in chocolate. However, cats are even more susceptible due to their smaller size and potentially different metabolism. As little as 200mg of theobromine can be dangerous for cats. For reference, dark chocolate contains about 130-450mg of theobromine per ounce — meaning less than an ounce of dark chocolate could be toxic to a cat. While cats lack sweet taste receptors (making them less attracted to chocolate than dogs), they may still be drawn to milk chocolate, chocolate ice cream, or chocolate milk due to the fat content. Chocolate-covered items left on counters, baking supplies, and cocoa mulch in gardens are common exposure risks."
        symptoms="Restlessness and hyperactivity, vomiting and diarrhea, rapid breathing, increased heart rate, muscle tremors, excessive urination, and in severe cases, seizures, cardiac arrhythmia, and death."
        whatToDo="If your cat ate any amount of chocolate, call your vet or ASPCA Poison Control (888) 426-4435 immediately. Because cats are so small, even small amounts warrant a call. Note the type and approximate amount of chocolate consumed. Do not try to induce vomiting without veterinary guidance."
        safeAlternatives="Cats don't crave sweets, so there's no need for a chocolate substitute. For treats, try small pieces of cooked chicken, commercial cat treats, or a tiny amount of plain cooked fish. Catnip is a great way to give your cat an exciting treat experience without any food risk."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
