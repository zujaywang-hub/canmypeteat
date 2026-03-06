import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat pear skin?", a: "Yes, pear skin is safe and contains extra fiber. Just wash thoroughly to remove any pesticide residue." },
  { q: "Are pear seeds dangerous for dogs?", a: "Yes — pear seeds contain amygdalin which releases cyanide when metabolized. Always remove the core and all seeds." },
  { q: "Can dogs eat canned pears?", a: "Not recommended. Canned pears are packed in sugary syrup which is unhealthy for dogs. Fresh pears only." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Pears? Vitamin-Rich Treat | CanMyPetEat" description="Pears are safe for dogs when seeds and core are removed. Learn proper preparation and serving size." canonical="/can-dogs-eat/pear" petType="dog" food="Pear" safety="safe">
      <ArticleBody quickAnswer="Yes — fresh pear flesh is safe and nutritious for dogs. Pears provide vitamins C and K, fiber, and copper. Always remove the seeds, core, and stem, as the seeds contain cyanide compounds." details="Pears are a sweet, fiber-rich treat that most dogs enjoy. They contain vitamins C and K, copper, and dietary fiber that supports digestive health. The skin is safe to eat and provides additional fiber. However, pear seeds contain amygdalin, which converts to hydrogen cyanide — always remove the entire core. Avoid canned pears as they're packed in sugar syrup. Cut fresh pears into small bite-sized pieces to prevent choking. Due to sugar content, keep portions moderate." symptoms="Flesh: generally very safe. Seeds: potential cyanide toxicity if multiple seeds are crushed and consumed. Too much: diarrhea from sugar and fiber." whatToDo="If your dog ate pear flesh, no concerns. If your dog ate the core with seeds, monitor for any signs of distress, though a few seeds are unlikely to cause problems for a larger dog." safeAlternatives="Apple slices (no seeds), watermelon, blueberries, and banana are other safe fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
