import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cranberries help with dog UTIs?", a: "Some studies suggest cranberries may help prevent UTIs by preventing bacteria from adhering to the bladder wall. However, they're not a substitute for veterinary treatment of active UTIs." },
  { q: "Can dogs eat dried cranberries?", a: "Plain dried cranberries in small amounts are okay, but most commercial dried cranberries (Craisins) contain added sugar. Check the label." },
  { q: "Can dogs eat cranberry sauce?", a: "No. Cranberry sauce is loaded with sugar and may contain other ingredients like grapes or raisins that are toxic to dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Cranberries? UTI Prevention | CanMyPetEat" description="Cranberries are safe for dogs and may support urinary health. Learn about fresh vs dried and what to avoid." canonical="/can-dogs-eat/cranberries" petType="dog" food="Cranberries" safety="safe">
      <ArticleBody quickAnswer="Yes — fresh cranberries are safe for dogs in moderation. They contain antioxidants and may support urinary tract health. Avoid cranberry sauce (too much sugar) and check dried cranberries for added sugar." details="Cranberries are safe and provide antioxidants, vitamin C, manganese, and fiber. They contain proanthocyanidins, which may help prevent bacteria from adhering to the urinary tract wall — potentially reducing UTI risk. Fresh cranberries are the best option, though their tartness means many dogs don't enjoy them. Frozen cranberries can be a fun treat. Plain dried cranberries are acceptable in small amounts, but most commercial dried cranberries contain significant added sugar. Never give cranberry sauce — it's essentially sugar with cranberries and may contain harmful ingredients." symptoms="Generally very safe. Too many may cause stomach upset due to acidity. Dried cranberries with sugar: potential GI upset." whatToDo="Fresh or plain dried cranberries are safe. If your dog ate cranberry sauce, check ingredients for grapes/raisins (toxic) and monitor for sugar-related GI upset." safeAlternatives="Blueberries, strawberries, and watermelon are other antioxidant-rich fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
