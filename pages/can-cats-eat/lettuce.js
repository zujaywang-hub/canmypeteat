import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Why does my cat eat lettuce?", a: "Some cats enjoy the crunchy texture or the water content. Eating small amounts of greens is a normal behavior — in the wild, cats occasionally consume plant material." },
  { q: "Is iceberg lettuce safe for cats?", a: "Yes, but it's mostly water with minimal nutrition. Romaine and leaf lettuce have slightly more nutritional value." },
  { q: "Can lettuce replace cat grass?", a: "Lettuce can serve a similar purpose — providing safe greens to nibble on. Cat grass is purpose-grown and may be more appealing to some cats." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Lettuce? Safe Green Snack | CanMyPetEat" description="Lettuce is safe for cats and can be a hydrating low-calorie snack. Learn which types are best." canonical="/can-cats-eat/lettuce" petType="cat" food="Lettuce" safety="safe">
      <ArticleBody quickAnswer="Yes — lettuce is safe for cats. It's mostly water with very few calories, making it a harmless snack. Some cats enjoy the crunchy texture. Wash thoroughly before serving." details="Lettuce is non-toxic and safe for cats to nibble on. It's approximately 95% water, making it essentially a hydrating, zero-calorie snack. While it provides minimal nutrition for obligate carnivores, it's completely harmless and can provide enrichment for cats who enjoy it. Romaine lettuce has slightly more nutritional value than iceberg. Some cats seem to crave greens — this may be related to their instinct to consume small amounts of plant material for fiber. Lettuce can serve as a safe alternative to potentially toxic houseplants. Always wash thoroughly to remove pesticide residue." symptoms="Very safe. Large amounts may cause mild soft stools due to water and fiber content." whatToDo="Lettuce is completely safe. Let your cat enjoy it if they're interested." safeAlternatives="Cat grass (wheatgrass), small amounts of steamed broccoli, and catnip are other safe greens for cats." faqs={faqs} />
    </ArticleLayout>
  );
}
