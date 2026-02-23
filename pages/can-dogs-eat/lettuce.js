import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Which lettuce is best for dogs?", a: "Romaine has the most nutrients. Iceberg is mostly water. All types are safe. Avoid salad dressings." },
  { q: "Can lettuce help overweight dogs?", a: "Yes — lettuce is almost zero calories and can be used as a low-calorie filler or treat for dogs on a diet." },
  { q: "Can dogs eat salad?", a: "Plain lettuce is fine, but salads typically contain onions, garlic, dressing, grapes, nuts, or other ingredients that may be harmful. Stick to plain lettuce only." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Lettuce? Zero-Calorie Snack | CanMyPetEat" description="Lettuce is safe for dogs and perfect for overweight pets. Learn which types are best and what to avoid." canonical="/can-dogs-eat/lettuce" petType="dog" food="Lettuce" safety="safe">
      <ArticleBody quickAnswer="Yes — all types of lettuce are safe for dogs. It's about 95% water with almost zero calories, making it a perfect treat for overweight dogs. Serve plain, washed, and cut into appropriate pieces." details="Lettuce is one of the safest foods you can give your dog. All varieties — romaine, iceberg, butter lettuce, arugula — are non-toxic. Romaine has the most nutritional value with vitamins A, K, and C, plus folate. Iceberg is mostly water with minimal nutrients but still perfectly safe. Lettuce is excellent for overweight dogs who need low-calorie treats. Wash thoroughly to remove pesticides, and cut or tear into pieces appropriate for your dog's size to prevent choking on large leaves. Never give your dog salad with dressing, croutons, onions, or other toppings." symptoms="Very safe. Large amounts may cause mild loose stools from water and fiber content." whatToDo="No concerns with plain lettuce. One of the safest snacks available." safeAlternatives="Cucumber, celery, green beans, and watermelon are other excellent low-calorie treats." faqs={faqs} />
    </ArticleLayout>
  );
}
