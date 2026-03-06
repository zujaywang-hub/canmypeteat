import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are green beans good for overweight dogs?", a: "Yes! Many vets recommend the 'green bean diet' — replacing up to 50% of kibble with green beans to help dogs lose weight while feeling full." },
  { q: "Can dogs eat canned green beans?", a: "Yes, but choose low-sodium or no-salt-added canned green beans. Regular canned green beans have too much sodium." },
  { q: "Can dogs eat raw green beans?", a: "Yes, raw green beans are safe and provide a satisfying crunch. Just cut into appropriate sizes to prevent choking." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Green Beans? The Best Diet Treat | CanMyPetEat" description="Green beans are one of the healthiest treats for dogs. Low calorie, high fiber, and vet-recommended for weight loss." canonical="/can-dogs-eat/green-beans" petType="dog" food="Green Beans" safety="safe">
      <ArticleBody quickAnswer="Yes — green beans are one of the best vegetable treats for dogs. They're low in calories, high in fiber, and rich in vitamins. Fresh, frozen, or canned (low-sodium) are all safe. A vet-favorite for weight management." details="Green beans are among the most recommended vegetables for dogs by veterinarians. They're packed with vitamins A, C, K, and B6, plus iron, calcium, and fiber — all with minimal calories. The 'green bean diet' is a popular vet-approved weight management technique where up to 50% of a dog's regular food is replaced with green beans. They can be served raw (crunchy treat), steamed, boiled, or from a can (low-sodium only). Avoid green beans prepared with butter, garlic, onions, or heavy seasonings. Cut into appropriate sizes for your dog." symptoms="Green beans are very safe. Excessive amounts may cause mild gas or loose stools from fiber content." whatToDo="No concerns with green beans. They're one of the safest foods you can give your dog." safeAlternatives="Carrots, cucumber, celery, and cooked pumpkin are other excellent low-calorie vegetable treats." faqs={faqs} />
    </ArticleLayout>
  );
}
