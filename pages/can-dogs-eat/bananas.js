import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can puppies eat bananas?", a: "Yes, puppies can eat small pieces of banana as an occasional treat. Start with very small amounts to make sure they tolerate it well." },
  { q: "Can dogs eat banana peels?", a: "While not toxic, banana peels are very difficult to digest and can cause intestinal blockage. Always remove the peel before giving banana to your dog." },
  { q: "How much banana can a dog eat?", a: "A few slices per day for a medium-large dog, or just a couple of small pieces for a small dog. Bananas are high in sugar, so moderation is key." },
];

export default function CanDogsEatBananas() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Bananas? Yes — A Healthy Treat | CanMyPetEat"
      description="Bananas are safe and nutritious for dogs in moderation. They're rich in potassium, vitamins, and fiber, making them a great natural treat."
      canonical="/can-dogs-eat/bananas"
      petType="dog"
      food="Bananas"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — bananas are a safe, healthy treat for dogs! They're packed with potassium, vitamin B6, vitamin C, and fiber. Most dogs love the sweet taste. Just feed them in moderation because bananas are high in natural sugar. Always remove the peel."
        details="Bananas are one of the best fruit treats you can give your dog. They're low in cholesterol and sodium, and the high potassium content supports healthy heart and kidney function. The fiber helps with digestive health, and the natural sugars provide a quick energy boost. Bananas also contain magnesium, which promotes bone health. Many dog owners use frozen banana slices as a refreshing summer treat — they're like a natural, healthy popsicle for dogs. You can also mash banana and stuff it in a Kong toy for longer-lasting entertainment. The main concern is sugar content: a medium banana contains about 14g of sugar, so keep portions small."
        whatToDo="Simply peel the banana, slice it into appropriate-sized pieces for your dog, and offer as a treat. For small dogs, start with just one or two small slices to see how they tolerate it."
        safeAlternatives="Other great fruit treats for dogs include blueberries (antioxidant-rich, low sugar), watermelon chunks (hydrating, seedless only), apple slices (remove seeds and core), and mango pieces (remove pit)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
