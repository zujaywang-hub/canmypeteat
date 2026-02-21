import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat passion fruit seeds?", a: "In tiny amounts they're generally safe, but may cause mild irritation." },
  { q: "Is passion fruit rind safe for cats?", a: "No — the rind may contain cyanogenic compounds and is hard to digest." },
  { q: "Do cats like passion fruit?", a: "Most cats avoid it due to the strong tart/acidic taste." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Passion Fruit? Tart Tropical Guide | CanMyPetEat" description="Passion fruit flesh is safe for cats in tiny amounts. Remove rind. Most cats dislike the tart taste." canonical="/can-cats-eat/passion-fruit" petType="cat" food="Passion Fruit" safety="safe">
      <ArticleBody quickAnswer="Yes — passion fruit flesh is safe for cats in tiny amounts. The pulp provides vitamin C and antioxidants. Remove the rind completely. Most cats dislike the tart taste." details="Passion fruit flesh and juice are non-toxic to cats. The pulp provides some vitamin C, fiber, and antioxidants. Seeds in small amounts are generally safe. The rind should be removed as it may contain cyanogenic compounds and is indigestible. The strongly tart/acidic taste means most cats naturally avoid passion fruit. If your cat is curious, a tiny taste is harmless but offers no essential nutrition for obligate carnivores." symptoms="Tiny amount: safe. Rind: potential GI issues. Too much: diarrhea from acidity." whatToDo="Passion fruit flesh is safe. No concerns at tiny amounts." safeAlternatives="Cantaloupe, cooked chicken, sardines, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
