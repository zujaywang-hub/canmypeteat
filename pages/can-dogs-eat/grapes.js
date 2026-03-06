import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can one grape kill a dog?", a: "While unlikely for a large dog, even a single grape has caused kidney failure in some small dogs. The toxic dose varies unpredictably between individual dogs, so no amount is considered safe." },
  { q: "Are raisins worse than grapes for dogs?", a: "Yes — raisins are dried grapes with concentrated toxins, making them more dangerous per weight. A smaller amount of raisins can cause the same damage as a larger amount of grapes." },
  { q: "What about grape juice or wine?", a: "All grape products should be avoided, including grape juice, wine, grape jelly, and foods containing grape extract. The toxic compound (believed to be tartaric acid) is present in all forms." },
];

export default function CanDogsEatGrapes() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Grapes? Extremely Dangerous | CanMyPetEat"
      description="Grapes and raisins are highly toxic to dogs and can cause acute kidney failure, even in small amounts. Never feed grapes to dogs."
      canonical="/can-dogs-eat/grapes"
      petType="dog"
      food="Grapes"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="Absolutely not — grapes and raisins are extremely toxic to dogs. Even a small amount can cause acute kidney failure, which can be fatal. This applies to all types: red, green, seedless, peeled, and dried (raisins, sultanas, currants)."
        details="The exact toxic substance in grapes was a mystery for decades, but recent research points to tartaric acid as the likely culprit. What makes grapes particularly dangerous is the unpredictable nature of the toxicity — some dogs can eat a few grapes with no apparent ill effects, while others develop severe kidney failure from just one or two. There is no known safe dose, and the variation in tartaric acid content between grape varieties and even individual grapes makes it impossible to predict which ones are more dangerous. Because of this unpredictability, veterinary guidance is clear: no grapes or grape products for dogs, ever."
        symptoms="Vomiting (usually within 2-6 hours), diarrhea, lethargy and weakness, loss of appetite, abdominal pain, decreased urination progressing to no urination, and acute kidney failure within 24-72 hours."
        whatToDo="This is a veterinary emergency. Call your vet or ASPCA Poison Control (888) 426-4435 immediately, even if your dog seems fine. Early treatment (within 2 hours) dramatically improves outcomes. A vet may induce vomiting and administer activated charcoal to prevent absorption. IV fluid therapy is typically started to protect the kidneys."
        safeAlternatives="For a sweet, bite-sized treat, try blueberries, watermelon chunks (seedless, no rind), banana slices, or apple pieces (no seeds or core). These give dogs the sweet flavor they enjoy without any risk."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
