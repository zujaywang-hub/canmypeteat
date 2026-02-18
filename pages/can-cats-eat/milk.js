import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Why do cats like milk if they're lactose intolerant?", a: "Cats are attracted to milk's fat content and protein, not the lactose. Kittens need milk, so the preference may be instinctive, but adult cats lose the ability to digest it." },
  { q: "Can kittens drink cow milk?", a: "Not recommended. Even kittens digest cow's milk poorly. Use specially formulated kitten milk replacer (KMR) instead." },
  { q: "What about lactose-free milk for cats?", a: "Lactose-free milk is a better option but still high in calories and not nutritionally necessary. Cat-specific milk products are available at pet stores." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Drink Milk? Not Recommended | CanMyPetEat" description="Despite the popular image, most adult cats are lactose intolerant. Milk causes digestive upset including diarrhea, gas, and stomach cramps." canonical="/can-cats-eat/milk" petType="cat" food="Milk" safety="caution">
      <ArticleBody
        quickAnswer="Despite the classic image of a cat happily lapping up a saucer of milk, most adult cats are actually lactose intolerant. Cow's milk can cause diarrhea, gas, bloating, and stomach cramps. The ability to digest lactose decreases after weaning — by adulthood, most cats cannot process it properly."
        details="Kittens produce plenty of lactase (the enzyme that breaks down lactose in milk) to digest their mother's milk. But as they mature and wean, most cats gradually produce less and less lactase. By adulthood, the majority of cats cannot efficiently digest lactose. When a lactose-intolerant cat drinks milk, the undigested lactose passes into the intestines where bacteria ferment it, producing gas and pulling water into the gut — resulting in bloating, flatulence, and diarrhea. Beyond lactose, cow's milk doesn't match a cat's nutritional needs — it has too much fat, not enough protein, and none of the taurine cats require. The calorie content is also a concern: a saucer of milk for a cat is roughly equivalent to several slices of pizza for a human in terms of relative calorie intake."
        symptoms="Diarrhea (often within 8-12 hours), gas and bloating, stomach cramps, vomiting. Some cats may show no symptoms with very small amounts."
        whatToDo="If your cat drank some milk and develops diarrhea, withhold milk permanently and provide fresh water. Symptoms usually resolve within 24 hours. If diarrhea persists, consult your vet."
        safeAlternatives="Fresh water is the only liquid cats need. If you want to give a special drink, try cat-specific milk products (available at pet stores, formulated to be lactose-free) or a small amount of plain bone broth (no onion/garlic/salt)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
