import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat Thanksgiving turkey?", a: "Only plain, unseasoned white meat with skin and bones removed. Thanksgiving turkey is usually seasoned with garlic, onion, and butter — all harmful. Never give gravy." },
  { q: "Can dogs eat turkey skin?", a: "No. Turkey skin is very high in fat and often seasoned. It can cause pancreatitis." },
  { q: "Can dogs eat ground turkey?", a: "Yes — lean ground turkey cooked thoroughly without seasoning is a great protein source. Drain excess fat." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Turkey? Holiday Safety Guide | CanMyPetEat" description="Plain cooked turkey is safe for dogs but holiday turkey is risky. Learn what parts are safe and what to avoid." canonical="/can-dogs-eat/turkey" petType="dog" food="Turkey" safety="safe">
      <ArticleBody quickAnswer="Plain cooked turkey — yes, it's an excellent lean protein. Holiday/seasoned turkey — risky due to garlic, onion, butter, and spices. Always remove skin (high fat) and bones (splinter danger). Serve plain white meat only." details="Turkey is a lean, high-quality protein that's commonly used in premium dog foods. Plain cooked turkey breast provides protein, B vitamins, zinc, and selenium with less fat than dark meat. However, holiday turkey presents several hazards: it's typically seasoned with garlic, onion, and herbs that can be toxic; the skin is loaded with butter and fat; and cooked turkey bones are extremely dangerous as they splinter easily. If you want to share turkey with your dog, set aside some plain, unseasoned breast meat before adding seasonings during cooking." symptoms="Plain turkey: very safe. Seasoned turkey: potential garlic/onion toxicity, GI upset. Turkey skin: vomiting, pancreatitis. Cooked bones: choking, intestinal puncture." whatToDo="If your dog ate plain turkey, great! If your dog ate seasoned turkey with garlic/onion, monitor for toxicity symptoms. If your dog swallowed turkey bones, contact your vet." safeAlternatives="Plain chicken breast, lean beef, cooked salmon, and lean ground turkey are other safe protein choices." faqs={faqs} />
    </ArticleLayout>
  );
}
