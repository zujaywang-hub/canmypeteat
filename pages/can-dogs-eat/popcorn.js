import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat buttered popcorn?", a: "Not recommended. Butter adds unnecessary fat that can cause digestive upset or pancreatitis. Stick to plain air-popped popcorn." },
  { q: "Can dogs eat caramel popcorn?", a: "No. Caramel popcorn is loaded with sugar and may contain xylitol. The sticky coating can also cause dental problems." },
  { q: "Are unpopped kernels dangerous for dogs?", a: "Yes — unpopped kernels are a choking hazard and can crack teeth. Always remove unpopped kernels before sharing popcorn with your dog." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Popcorn? Plain Only | CanMyPetEat" description="Plain air-popped popcorn is safe for dogs as an occasional snack. Avoid butter, salt, caramel, and other toppings. Remove unpopped kernels." canonical="/can-dogs-eat/popcorn" petType="dog" food="Popcorn" safety="caution">
      <ArticleBody
        quickAnswer="Plain air-popped popcorn — yes, in small amounts. Buttered, salted, or flavored popcorn — no. The popcorn itself is a whole grain that's actually not bad for dogs, containing fiber, B vitamins, and minerals. But the toppings we love (butter, salt, caramel, cheese) can be harmful. Always remove unpopped kernels which are choking hazards."
        details="Popcorn is a whole grain and in its plain form, it's a low-calorie snack with some nutritional benefits including fiber, magnesium, and zinc. The problem is that most popcorn we eat is loaded with butter (high fat, pancreatitis risk), salt (sodium poisoning risk), or artificial flavors. Microwave popcorn is particularly bad because it often contains diacetyl and other chemicals. If you want to share popcorn with your dog, make it yourself: air-pop plain kernels, let them cool, remove all unpopped kernels, and offer a small handful. It's a fun, occasional snack — not a regular treat."
        symptoms="Buttered/salted popcorn: excessive thirst, digestive upset, potential pancreatitis. Unpopped kernels: choking, cracked teeth, digestive blockage."
        whatToDo="If your dog ate a few pieces of buttered popcorn, don't worry — monitor for any digestive upset. If they ate a large amount of heavily buttered/salted popcorn, watch for vomiting, diarrhea, or excessive thirst and contact your vet if symptoms persist."
        safeAlternatives="For a crunchy snack, try plain rice cakes (broken into pieces), carrot sticks, apple slices, or commercial dog training treats."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
