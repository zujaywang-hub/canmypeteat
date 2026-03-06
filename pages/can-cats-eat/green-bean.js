import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat canned green beans?", a: "Only low-sodium or no-salt-added varieties. Regular canned green beans have too much sodium for cats." },
  { q: "Are green beans good for overweight cats?", a: "Yes — some vets recommend adding green beans to food as a low-calorie filler for cats on a diet." },
  { q: "Do cats actually eat green beans?", a: "Some cats enjoy the crunch, others are completely uninterested. Cats are obligate carnivores and generally prefer meat." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Green Beans? Diet-Friendly Treat | CanMyPetEat" description="Green beans are safe for cats and helpful for weight management. Learn preparation and serving tips." canonical="/can-cats-eat/green-bean" petType="cat" food="Green Beans" safety="safe">
      <ArticleBody quickAnswer="Yes — green beans are safe for cats, raw or cooked. They're low in calories and can help with weight management. Serve plain without butter, garlic, or seasoning." details="Green beans are non-toxic and can be a healthy addition for overweight cats. They provide fiber, vitamins A, C, and K, with very few calories. Some veterinarians recommend mixing a small amount of green beans into cat food as a low-calorie filler for cats who need to lose weight. Fresh, frozen, or canned (low-sodium only) green beans are all acceptable. Cut into small pieces for easier eating. Not all cats will be interested — as obligate carnivores, many prefer meat-based treats instead." symptoms="Generally very safe. Minimal risk of any adverse effects from plain green beans." whatToDo="Green beans are perfectly safe. No concerns needed." safeAlternatives="Cooked pumpkin, steamed carrots, cooked chicken, and commercial diet cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
