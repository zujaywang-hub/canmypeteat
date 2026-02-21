import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat canned tuna?", a: "Yes, in small amounts. Choose tuna canned in water, not oil. Avoid tuna with added salt or seasonings." },
  { q: "How often can dogs eat tuna?", a: "Tuna should be an occasional treat only — once a week at most. Regular consumption can lead to mercury buildup." },
  { q: "Is tuna better than salmon for dogs?", a: "Salmon is generally a better choice because it has lower mercury levels and higher omega-3 content. Both should be cooked before serving." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Tuna? Mercury Risks Explained | CanMyPetEat" description="Dogs can eat tuna in moderation, but mercury content is a concern. Learn safe serving guidelines." canonical="/can-dogs-eat/tuna" petType="dog" food="Tuna" safety="caution">
      <ArticleBody quickAnswer="In moderation — tuna is not toxic to dogs, but it has the highest mercury content of commonly consumed fish. Small amounts occasionally are fine, but it should never be a regular part of your dog's diet." details="Tuna is rich in protein, omega-3 fatty acids, and vitamins. However, tuna accumulates mercury at higher rates than smaller fish because they are large predators at the top of the food chain. Mercury poisoning in dogs can damage the kidneys and nervous system over time. If you want to feed fish, salmon, sardines, or cod are safer options with lower mercury levels." symptoms="Small amounts: generally no symptoms. Long-term frequent consumption: mercury poisoning symptoms include loss of coordination, hair loss, tremors, anxiety, kidney damage, and vision problems." whatToDo="If your dog ate a small amount of tuna, there's no immediate cause for concern. If your dog has been eating tuna regularly and shows neurological symptoms, see your vet for mercury testing." safeAlternatives="Cooked salmon, sardines canned in water, cooked cod, and cooked tilapia are all lower in mercury and rich in omega-3s." faqs={faqs} />
    </ArticleLayout>
  );
}
