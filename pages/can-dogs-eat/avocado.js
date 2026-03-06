import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can avocado kill a dog?", a: "It's unlikely from the flesh alone, but the pit is a serious choking and obstruction hazard. Large amounts of persin from skin, leaves, or pit can cause more severe symptoms." },
  { q: "What about avocado in dog food?", a: "Some premium dog foods contain avocado oil or avocado meal, which have had persin removed and are generally considered safe. This is different from feeding raw avocado." },
  { q: "My dog ate an avocado pit. What should I do?", a: "Contact your vet immediately. The pit is a choking hazard and can cause serious intestinal blockage that may require surgery to remove." },
];

export default function CanDogsEatAvocado() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Avocado? Use Caution | CanMyPetEat"
      description="Avocado flesh in small amounts is unlikely to harm dogs, but it contains persin which can cause digestive upset. The pit is a serious choking hazard."
      canonical="/can-dogs-eat/avocado"
      petType="dog"
      food="Avocado"
      safety="caution"
    >
      <ArticleBody
        quickAnswer="It's complicated. Small amounts of avocado flesh are unlikely to seriously harm your dog, but avocados contain persin — a fungicidal toxin that can cause vomiting and diarrhea. The bigger danger is the large pit, which is a serious choking and intestinal blockage hazard. When in doubt, it's best to skip the avocado."
        details="Persin is found in the avocado's leaves, skin, pit, and to a lesser extent, the flesh. Dogs are more resistant to persin than many other animals (birds and horses are highly sensitive), and a small amount of avocado flesh will likely only cause mild digestive upset if anything. However, the high fat content (about 15% by weight) can trigger pancreatitis in susceptible dogs, especially if they eat a large amount. The most acute danger is the pit — it's the perfect size to lodge in a dog's esophagus or intestine, potentially requiring emergency surgery. If you grow avocado trees, also be aware that the bark, leaves, and immature fruit have higher persin concentrations."
        symptoms="From flesh: mild vomiting, diarrhea, stomach discomfort. From the pit: choking, gagging, vomiting, abdominal pain, loss of appetite, constipation (signs of blockage). From large amounts: pancreatitis symptoms including severe vomiting, lethargy, and abdominal pain."
        whatToDo="If your dog ate a small amount of avocado flesh, monitor for digestive upset but don't panic. If your dog swallowed the pit or a large amount of avocado, contact your vet — the pit can cause life-threatening blockage. Watch for signs of pancreatitis over the next 24-48 hours."
        safeAlternatives="For healthy fats in your dog's diet, try plain cooked salmon (rich in omega-3s), a drizzle of fish oil on their food, or a spoonful of coconut oil. For a creamy treat texture, try mashed banana or plain pumpkin puree."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
