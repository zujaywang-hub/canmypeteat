import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "How many strawberries can a dog eat?", a: "For small dogs, 1-2 strawberries. Medium dogs can have 3-4, and large dogs up to 5-6. Cut them into small pieces to prevent choking." },
  { q: "Can dogs eat strawberry leaves?", a: "Strawberry leaves aren't toxic but can be difficult to digest. It's best to remove the green top before feeding." },
  { q: "Are frozen strawberries safe for dogs?", a: "Yes! Frozen strawberries are a great refreshing treat. Just cut them into appropriate sizes first, as frozen whole strawberries can be a choking hazard." },
];

export default function CanDogsEatStrawberries() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Strawberries? Yes — Sweet & Nutritious | CanMyPetEat"
      description="Strawberries are safe for dogs and packed with antioxidants, vitamin C, and fiber. A great occasional treat in moderation."
      canonical="/can-dogs-eat/strawberries"
      petType="dog"
      food="Strawberries"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — strawberries are safe and healthy for dogs! They're full of antioxidants, vitamin C, fiber, and even contain an enzyme that can help whiten your dog's teeth. Feed them fresh or frozen, cut into small pieces, as a moderate treat."
        details="Strawberries are a nutritional powerhouse that dogs can enjoy safely. They're rich in vitamin C (immune support), manganese (bone health), folate (cell growth), and potassium (heart health). They also contain high levels of antioxidants that may help reduce inflammation and support overall health. An interesting bonus: strawberries contain malic acid, an enzyme that can help whiten teeth naturally. However, strawberries do contain natural sugar (about 7g per cup), so they should be given in moderation, especially for dogs that are overweight or diabetic. Always serve plain — never give dogs strawberries from canned fruit cocktail (too much sugar/syrup) or strawberry-flavored products (may contain xylitol or artificial sweeteners)."
        whatToDo="Wash strawberries thoroughly, remove the green stem, and cut into pieces appropriate for your dog's size. Small pieces for small dogs to prevent choking."
        safeAlternatives="Other berry options safe for dogs include blueberries (lower in sugar, high in antioxidants), raspberries (in small amounts — they contain trace xylitol naturally), and cranberries (tart but safe)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
