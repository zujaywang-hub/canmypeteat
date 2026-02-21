import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are longan seeds dangerous for cats?", a: "Yes — choking hazard and contain saponins. Always peel and remove seeds completely." },
  { q: "Can cats eat dried longan?", a: "No — dried longan is too concentrated in sugar for cats." },
  { q: "Is longan tea safe for cats?", a: "No — longan tea contains sugar and may have other ingredients. Plain water is always best." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Longan? Sweet but Risky | CanMyPetEat" description="Longan flesh is safe for cats in tiny amounts but seeds are dangerous. Very high sugar." canonical="/can-cats-eat/longan" petType="cat" food="Longan" safety="caution">
      <ArticleBody quickAnswer="Peeled, seeded flesh only — in tiny amounts. Longan is extremely high in sugar and the seeds are dangerous (choking, saponins). Most cats show no interest in this fruit." details="Longan flesh is not toxic to cats but is one of the sweetest fruits available, making it a poor choice for obligate carnivores. The seed must be removed — it's a choking and blockage hazard and contains saponins. The skin is indigestible. If your cat is curious about longan, one small piece of peeled, seeded flesh is safe but provides no nutritional value they can't get better from meat. Avoid dried longan (sugar concentrate) and longan drinks." symptoms="Tiny amount of flesh: safe. Seeds: choking, blockage, toxicity. Too much: diarrhea from sugar." whatToDo="If flesh only was eaten, no concerns. If a seed was swallowed, monitor and contact vet." safeAlternatives="Cooked chicken, cantaloupe, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
