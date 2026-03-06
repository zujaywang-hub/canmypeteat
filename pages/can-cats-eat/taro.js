import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat raw taro?", a: "ABSOLUTELY NOT. Raw taro contains calcium oxalate crystals causing severe oral pain. Cats are especially vulnerable due to small size." },
  { q: "Can cats eat taro ice cream?", a: "No — contains dairy (lactose), sugar, and may have raw taro components." },
  { q: "What if my cat chewed on a taro plant?", a: "Rinse mouth gently with water. If severe drooling or swelling occurs, contact your vet immediately." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Taro? Raw Taro is Toxic | CanMyPetEat" description="Raw taro is toxic to cats. Cooked taro is safe in tiny amounts. Learn the dangers and safe preparation." canonical="/can-cats-eat/taro" petType="cat" food="Taro" safety="caution">
      <ArticleBody quickAnswer="Cooked only, in tiny amounts — raw taro is TOXIC to cats due to calcium oxalate crystals causing severe mouth/throat burning and swelling. Cats are especially vulnerable due to their small size. Fully cooked taro is safe but offers little nutritional value for obligate carnivores." details="Raw taro contains needle-like calcium oxalate crystals that cause immediate intense pain and inflammation upon contact with the mouth. For cats, this is especially dangerous because their small airways mean even mild swelling can cause breathing difficulty. The taro plant (commonly grown as a houseplant in some regions) poses the same risk — keep it away from cats. Thoroughly cooking taro destroys the crystals, making it safe. However, cats gain no meaningful nutrition from taro, so there's little reason to offer it." symptoms="Raw: intense mouth pain, drooling, swollen tongue/lips, difficulty swallowing, vomiting. Severe: airway swelling. Cooked: safe." whatToDo="If your cat chewed raw taro: rinse mouth with water, offer water to drink, and seek vet care if swelling is significant or breathing is affected." safeAlternatives="Cooked pumpkin, cooked chicken, and commercial cat treats are much better options." faqs={faqs} />
    </ArticleLayout>
  );
}
