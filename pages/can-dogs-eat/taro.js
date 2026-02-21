import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw taro?", a: "NEVER. Raw taro contains calcium oxalate crystals that cause severe mouth and throat burning, swelling, and potential breathing difficulty." },
  { q: "Can dogs eat taro chips?", a: "Not recommended — taro chips are deep-fried and often heavily salted. Plain cooked taro in small amounts is safer." },
  { q: "Is taro bubble tea safe for dogs?", a: "No — contains caffeine, sugar, milk (lactose), and tapioca pearls (choking hazard). Completely unsuitable for dogs." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Taro? Raw is Dangerous | CanMyPetEat" description="Cooked taro is safe but raw taro is toxic due to calcium oxalate crystals. Learn the critical difference." canonical="/can-dogs-eat/taro" petType="dog" food="Taro" safety="caution">
      <ArticleBody quickAnswer="Cooked only — fully cooked taro in small amounts is safe. RAW taro is TOXIC due to calcium oxalate crystals that cause intense burning and swelling of the mouth, throat, and GI tract. Always cook thoroughly." details="Taro root contains needle-like calcium oxalate crystals (raphides) that are destroyed by thorough cooking. Raw taro causes immediate intense burning, pain, and swelling upon contact with the mouth, tongue, and throat. This can be dangerous if swelling affects breathing. Once fully cooked (boiled, steamed, or baked), taro is safe and provides fiber, potassium, and vitamins. Serve plain without butter, sugar, or seasoning. Keep portions small as taro is starchy and high in carbs. Taro leaves are also toxic when raw but safe when cooked." symptoms="Raw: immediate intense mouth/throat burning, drooling, pawing at mouth, swollen tongue, difficulty swallowing, vomiting. Cooked: safe in small amounts." whatToDo="If your dog ate RAW taro and is drooling/pawing at mouth, offer water or milk to dilute the irritant and contact your vet if swelling is severe. If cooked taro was eaten, no concerns." safeAlternatives="Cooked sweet potato, cooked pumpkin, and plain rice are safer starchy options." faqs={faqs} />
    </ArticleLayout>
  );
}
