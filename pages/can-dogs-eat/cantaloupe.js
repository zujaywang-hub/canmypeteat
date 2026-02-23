import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat cantaloupe rind?", a: "No. The rind is tough, hard to digest, and can cause intestinal blockage. Only serve the orange flesh." },
  { q: "Is cantaloupe good for overweight dogs?", a: "Yes — it's about 90% water and low in calories, making it a great hydrating treat for dogs on a diet." },
  { q: "How much cantaloupe can a dog eat?", a: "A few small cubes as a treat. High sugar content means moderation is key, especially for diabetic dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Cantaloupe? Hydrating Summer Treat | CanMyPetEat" description="Cantaloupe is safe and hydrating for dogs. Learn proper serving size and what parts to avoid." canonical="/can-dogs-eat/cantaloupe" petType="dog" food="Cantaloupe" safety="safe">
      <ArticleBody quickAnswer="Yes — cantaloupe is safe, hydrating, and nutritious for dogs. It's rich in vitamins A and C, beta-carotene, and potassium while being low in calories. Remove rind and seeds before serving." details="Cantaloupe is about 90% water, making it an excellent hydrating treat especially in summer. It provides beta-carotene (which converts to vitamin A), vitamin C, potassium, and fiber. The low calorie content makes it ideal for overweight dogs. Always remove the rind (choking and blockage hazard) and seeds. Cut into small bite-sized pieces appropriate for your dog's size. Due to the natural sugar content, feed in moderation and avoid giving cantaloupe to diabetic dogs without vet approval." symptoms="Generally very safe. Overconsumption may cause diarrhea or soft stools from sugar and fiber content." whatToDo="Cantaloupe flesh is very safe. If your dog ate rind pieces, monitor for signs of digestive distress or blockage." safeAlternatives="Watermelon (no seeds), blueberries, cucumber, and apple slices (no seeds) are other great hydrating treats." faqs={faqs} />
    </ArticleLayout>
  );
}
