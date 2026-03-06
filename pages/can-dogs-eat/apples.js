import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can dogs eat apple seeds?", a: "No. Apple seeds contain amygdalin, which releases cyanide when crushed. A few seeds likely won't cause harm, but it's best practice to always remove the core and seeds." },
  { q: "Can dogs eat apple skin?", a: "Yes! Apple skin is safe and contains additional fiber and nutrients. Just wash the apple first to remove any pesticide residue." },
  { q: "Are green apples safe for dogs?", a: "Yes, all apple varieties — red, green, yellow — are safe for dogs. Green apples are more tart but equally nutritious." },
];

export default function CanDogsEatApples() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Apples? Yes — A Crunchy Healthy Treat | CanMyPetEat"
      description="Apples are safe and nutritious for dogs. They're rich in vitamins A and C, fiber, and make a satisfying crunchy treat. Just remove the seeds and core."
      canonical="/can-dogs-eat/apples"
      petType="dog"
      food="Apples"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — apples are a great treat for dogs! They're crunchy, sweet, and packed with vitamins A and C, fiber, and antioxidants. Apples are also low in fat and protein, making them an ideal treat for senior dogs. Just remember to remove the core and seeds before serving."
        details="Apples are one of the most widely recommended fruits for dogs. The crunch helps clean teeth and freshen breath (though they're not a replacement for proper dental care). They're low in calories — a medium apple has about 95 calories — and the fiber content supports healthy digestion. The vitamin A supports immune function and skin health, while vitamin C is an antioxidant that may help reduce inflammation. Frozen apple slices make excellent teething treats for puppies, and dehydrated apple chips (unsweetened, no additives) are a great shelf-stable training treat. The only parts to avoid are the seeds (contain small amounts of cyanide-producing compounds) and the core (choking hazard)."
        whatToDo="Wash the apple, cut it into slices, remove the core and all seeds, then cut into appropriate-sized pieces for your dog. Small dogs get small pieces. You can serve them fresh, frozen, or dehydrated."
        safeAlternatives="Other great crunchy treats for dogs include carrot sticks, cucumber slices, celery pieces, and pear slices (also remove seeds and core)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
