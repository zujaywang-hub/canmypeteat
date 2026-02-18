import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat mango skin?", a: "Not recommended. Mango skin is tough, hard to digest, and contains urushiol (the same irritant found in poison ivy) which can cause an allergic reaction." },
  { q: "Can dogs eat dried mango?", a: "Plain dried mango without added sugar is safe in very small amounts, but it's very concentrated in sugar. Fresh is always better." },
  { q: "Can dogs eat the mango pit?", a: "No — the mango pit is a serious choking and intestinal blockage hazard. It also contains small amounts of cyanide. Always remove completely." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Mango? Yes — Sweet & Vitamin-Rich | CanMyPetEat" description="Mango flesh is safe and nutritious for dogs. Rich in vitamins A, B6, C, and E. Always remove the pit and skin before serving." canonical="/can-dogs-eat/mango" petType="dog" food="Mango" safety="safe">
      <ArticleBody
        quickAnswer="Yes — mango flesh is a safe, delicious treat for dogs! It's packed with vitamins A, B6, C, and E, plus fiber and antioxidants. Just make sure to remove the pit (choking/blockage hazard and contains cyanide) and peel the skin (hard to digest and can cause allergic reactions). Cut the flesh into small, manageable pieces."
        details="Mango is one of the most nutrient-dense fruits you can share with your dog. The high vitamin A content supports eye health and immune function, vitamin C acts as an antioxidant, vitamin E supports skin and coat health, and vitamin B6 aids metabolism and brain function. The fiber content supports healthy digestion. However, mango is also high in natural sugar (about 14g per 100g), so it should be given in moderation — especially for overweight or diabetic dogs. The pit is the main hazard: it's large enough to cause intestinal blockage in most dogs, and if cracked open, the seed inside contains amygdalin which releases cyanide."
        whatToDo="Peel the mango, cut the flesh away from the pit, and dice into small cubes appropriate for your dog's size. Serve fresh or freeze mango chunks for a refreshing summer treat."
        safeAlternatives="Other tropical fruits safe for dogs include papaya (remove seeds), banana, and pineapple chunks (remove skin and core)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
