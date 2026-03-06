import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat wild blackberries?", a: "Yes, if you're certain they're blackberries and not a toxic look-alike. Also ensure they haven't been sprayed with pesticides." },
  { q: "How many blackberries can a dog eat?", a: "A small handful for medium to large dogs. Like all fruit, moderation is key due to sugar content." },
  { q: "Are blackberry leaves safe for dogs?", a: "Blackberry leaves are not toxic, but the thorny bushes can scratch your dog's mouth and face." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Blackberries? Berry Safe Guide | CanMyPetEat" description="Blackberries are safe for dogs and packed with antioxidants. Learn serving sizes and foraging tips." canonical="/can-dogs-eat/blackberries" petType="dog" food="Blackberries" safety="safe">
      <ArticleBody quickAnswer="Yes — blackberries are safe and nutritious for dogs. They're rich in antioxidants, vitamins C and K, fiber, and omega-3 fatty acids. Feed in moderation as a treat." details="Blackberries are among the safest berries for dogs. They provide powerful antioxidants (anthocyanins), vitamins C and K, manganese, fiber, and even some omega-3 fatty acids. They're low in calories and sugar compared to many fruits. Fresh, frozen, or wild blackberries are all safe. The small seeds are not a concern. If foraging wild blackberries, ensure they haven't been treated with pesticides and that you've correctly identified them. Avoid blackberry jam, pie, or cobbler due to added sugar and other ingredients." symptoms="Very safe. Large quantities may cause mild soft stools or diarrhea." whatToDo="Blackberries are perfectly safe. No concerns at normal treat amounts." safeAlternatives="Blueberries, raspberries, strawberries, and cranberries are other safe berry options." faqs={faqs} />
    </ArticleLayout>
  );
}
