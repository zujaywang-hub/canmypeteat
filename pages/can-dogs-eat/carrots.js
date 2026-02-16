import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can dogs eat raw carrots?", a: "Yes! Raw carrots are a great crunchy snack and help clean teeth. Cut them into appropriate-sized pieces to prevent choking." },
  { q: "Are carrots good for overweight dogs?", a: "Absolutely. Carrots are very low in calories (about 25 calories per medium carrot) and high in fiber, making them one of the best diet-friendly treats." },
  { q: "Can puppies eat carrots?", a: "Yes, and frozen carrots can even help soothe teething pain in puppies. Just make sure pieces are small enough to prevent choking." },
];

export default function CanDogsEatCarrots() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Carrots? Yes — One of the Best Dog Treats | CanMyPetEat"
      description="Carrots are one of the healthiest treats for dogs. Low in calories, high in fiber and beta-carotene, and great for dental health."
      canonical="/can-dogs-eat/carrots"
      petType="dog"
      food="Carrots"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — carrots are one of the best treats you can give your dog! They're low in calories, high in fiber and beta-carotene (vitamin A), and the crunchy texture helps clean teeth. They're safe raw or cooked, and most dogs love them. Vets frequently recommend carrots as a healthy, affordable treat."
        details="Carrots are a veterinary favorite for good reason. A medium carrot has only about 25 calories, making them perfect for weight management. They're rich in beta-carotene (which converts to vitamin A for eye health and immune function), fiber (digestive health), potassium, and antioxidants. The crunchy texture of raw carrots provides a natural toothbrush effect, scraping plaque off teeth as your dog chews. Cooked carrots are softer and may be easier to digest — cooking also makes the beta-carotene more bioavailable. Both forms are nutritious. Baby carrots, carrot sticks, shredded carrots mixed into food, or frozen carrot chunks as summer treats — there are many ways to incorporate this superfood into your dog's diet."
        whatToDo="For raw carrots: wash, peel if desired, and cut into appropriate-sized pieces. Baby carrots work great for medium and large dogs. For small dogs, cut into thin slices or small chunks. Cooked carrots: steam or boil until tender, serve plain without butter or seasoning."
        safeAlternatives="Other great low-calorie veggie treats for dogs include green beans (steamed or raw), cucumber slices, zucchini pieces, and celery sticks (cut small to avoid stringy pieces causing issues)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
