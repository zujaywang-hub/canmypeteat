import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat broccoli stems?", a: "Yes, but cut them into small pieces. Stems are tougher than florets and can be a choking hazard, especially for small dogs." },
  { q: "Is raw or cooked broccoli better for dogs?", a: "Both are safe. Steamed broccoli is easiest to digest. Raw broccoli retains more nutrients but may cause more gas." },
  { q: "How much broccoli is too much for dogs?", a: "Broccoli should be less than 10% of daily food intake. The isothiocyanates in broccoli can cause gastric irritation in large amounts." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Broccoli? Benefits & Gas Warning | CanMyPetEat" description="Broccoli is safe for dogs in small amounts but can cause gas. Learn the right amount and preparation." canonical="/can-dogs-eat/broccoli" petType="dog" food="Broccoli" safety="safe">
      <ArticleBody quickAnswer="Yes — broccoli is safe and nutritious for dogs in small amounts. It provides fiber, vitamins C and K, and is low in calories. Keep portions small as large amounts can cause gas and gastric irritation." details="Broccoli is an excellent low-calorie vegetable treat for dogs. It's rich in vitamin C, vitamin K, fiber, and potassium. Both raw and cooked (steamed is best) are safe. However, broccoli florets contain isothiocyanates, which can cause mild to moderate gastric irritation in dogs if consumed in large quantities. The general guideline is that broccoli should make up no more than 10% of a dog's daily intake. Cut into appropriately sized pieces to prevent choking. Never serve with butter, cheese sauce, or seasoning." symptoms="Small amounts: safe, possibly mild gas. Over 10% of diet: significant gas, bloating, gastric irritation. Very large amounts: potentially dangerous gastric distress." whatToDo="If your dog ate a moderate amount of broccoli, just watch for gas and stomach upset. No emergency action needed." safeAlternatives="Green beans, carrots, cucumber, and cooked sweet potato are other great low-calorie veggie treats." faqs={faqs} />
    </ArticleLayout>
  );
}
