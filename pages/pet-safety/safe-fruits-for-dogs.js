import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "What's the healthiest fruit for dogs?", a: "Blueberries are often considered the healthiest — packed with antioxidants, low in sugar, and small enough to be a perfect training treat." },
  { q: "How much fruit can a dog eat daily?", a: "Fruit should be no more than 10% of your dog's daily calorie intake. A few pieces as a treat is plenty." },
  { q: "Are frozen fruits safe for dogs?", a: "Yes — frozen blueberries, watermelon, banana, and strawberries make great summer treats." },
];
export default function Page() {
  return (
    <ArticleLayout title="10 Best Fruits for Dogs — Safe & Healthy Guide | CanMyPetEat" description="Complete guide to the safest and most nutritious fruits for dogs. Plus which fruits to always avoid." canonical="/pet-safety/safe-fruits-for-dogs" petType="dog" food="Safe Fruits Guide" safety="safe">
      <ArticleBody quickAnswer="The top 10 safest fruits for dogs: 1) Blueberries (antioxidant king), 2) Watermelon (hydrating), 3) Bananas (potassium), 4) Apples (no seeds), 5) Strawberries (vitamin C), 6) Cantaloupe (beta-carotene), 7) Cranberries (UTI support), 8) Pears (fiber), 9) Raspberries (anti-inflammatory), 10) Mango (no pit). ALWAYS AVOID: Grapes and raisins (kidney failure)." details="BEST FRUITS FOR DOGS: 1) BLUEBERRIES — packed with antioxidants, perfect size for training treats, low sugar. 2) WATERMELON — 92% water, perfect for hydration, remove seeds and rind. 3) BANANAS — rich in potassium and vitamin B6, feed in moderation (high sugar). 4) APPLES — vitamin C and fiber, ALWAYS remove seeds and core. 5) STRAWBERRIES — vitamin C and enzyme that whitens teeth. 6) CANTALOUPE — beta-carotene and vitamin A, low calorie. 7) CRANBERRIES — may support urinary health, tart taste. 8) PEARS — fiber and vitamins C/K, remove seeds. 9) RASPBERRIES — anti-inflammatory, great for senior dogs. 10) MANGO — vitamins A/C/E, always remove pit. FRUITS TO ALWAYS AVOID: Grapes and raisins (acute kidney failure), cherries (cyanide in pits), unripe tomatoes, and star fruit." symptoms="" whatToDo="Always wash fruit, remove pits/seeds/rinds, cut into appropriate sizes, and feed in moderation. Use our CanMyPetEat tool at canmypeteat.app to check any fruit instantly." safeAlternatives="For dogs who don't enjoy fruit, vegetables like carrots, green beans, and cucumber provide similar nutritional benefits." faqs={faqs} />
    </ArticleLayout>
  );
}
