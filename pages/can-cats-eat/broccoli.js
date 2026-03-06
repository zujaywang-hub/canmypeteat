import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat raw broccoli?", a: "Raw broccoli is safe but much harder for cats to digest. Lightly steaming is recommended — it softens the fiber and makes nutrients more bioavailable while keeping it plain." },
  { q: "Why does my cat like broccoli?", a: "Some cats are attracted to the texture or the green color. Cats may also enjoy chewing on the floret tops. If your cat likes it, small amounts of plain cooked broccoli are a fine treat." },
  { q: "Can broccoli cause gas in cats?", a: "Yes — broccoli contains raffinose and fiber that can cause gas and bloating in cats, especially if they eat too much. Keep portions very small." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Broccoli? Yes, In Small Amounts | CanMyPetEat" description="Broccoli is safe for cats in small, cooked portions. Learn the benefits and how to serve it properly." canonical="/can-cats-eat/broccoli" petType="cat" food="Broccoli" safety="safe">
      <ArticleBody quickAnswer="Yes — plain cooked broccoli is safe for cats in small amounts. It provides fiber, vitamins C and K, and some antioxidants. However, too much can cause gas and digestive upset. Serve steamed or boiled, without any butter, oil, garlic, or seasonings." details="Broccoli is non-toxic to cats and can be a healthy occasional addition. It contains vitamin C, vitamin K, potassium, and dietary fiber. Some studies suggest the sulforaphane in broccoli has anti-cancer properties. However, cats are obligate carnivores and cannot extract nutrients from plant matter as efficiently as omnivores. Broccoli should never replace meat-based nutrition. The fiber content, while beneficial in tiny amounts for digestion, can cause gas, bloating, and loose stools if overfed. Broccoli florets are easier for cats to eat than stems. Always cook it plain — common broccoli preparations with cheese, butter, or garlic are dangerous for cats." whatToDo="Lightly steam or boil a small broccoli floret until soft. Let it cool completely. Cut or mash into small, manageable pieces. Offer a teaspoon-sized portion as a treat. No butter, oil, cheese, garlic, or seasoning." safeAlternatives="Other safe vegetables for cats include cooked carrots, steamed green beans, plain pumpkin (great for digestion), and cucumber slices. But remember — meat-based treats are always more nutritionally appropriate." faqs={faqs} />
    </ArticleLayout>
  );
}
