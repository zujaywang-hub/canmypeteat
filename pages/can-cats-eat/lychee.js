import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are lychee seeds dangerous for cats?", a: "Yes — choking hazard and contain saponins. Always remove seed and skin completely." },
  { q: "Can cats eat canned lychee?", a: "Not recommended — too much sugar in syrup." },
  { q: "Do cats like lychee?", a: "Most cats are indifferent to lychee. Without sweet taste receptors, it holds no appeal." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Lychee? Seed Warning | CanMyPetEat" description="Lychee flesh is safe for cats in tiny amounts but seeds are toxic. Most cats aren't interested anyway." canonical="/can-cats-eat/lychee" petType="cat" food="Lychee" safety="caution">
      <ArticleBody quickAnswer="Peeled, seeded flesh only — in tiny amounts. Lychee seeds contain saponins and are a choking hazard. The skin is indigestible. Due to cats' small size, even one seed is dangerous. Most cats show no interest." details="Lychee flesh is not toxic to cats and provides some vitamin C. However, the preparation required makes it risky. The seed must be completely removed — it contains toxic saponins and is a choking/blockage hazard, especially for small cats. The rough skin is indigestible. Unripe lychees contain hypoglycin A which can cause dangerous blood sugar drops. Most cats won't eat lychee since they can't taste sweetness. If your cat is curious, a tiny piece of ripe, peeled, seeded flesh is safe." symptoms="Peeled flesh: safe. Seeds: choking, toxicity. Unripe: hypoglycemia risk." whatToDo="If flesh only was eaten, no concerns. If a seed was swallowed, contact your vet due to choking/blockage risk." safeAlternatives="Cantaloupe, cooked chicken, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
