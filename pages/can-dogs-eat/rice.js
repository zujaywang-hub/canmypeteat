import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Is white or brown rice better for dogs?", a: "White rice is easier to digest and better for dogs with upset stomachs. Brown rice has more fiber and nutrients but is harder to digest. For a sick dog, always choose white rice." },
  { q: "How much rice can I feed my dog?", a: "Rice should be a supplement, not the main meal. A good ratio for a bland diet is 2 parts rice to 1 part plain boiled chicken. For regular meals, rice shouldn't exceed 10% of daily food." },
  { q: "Can diabetic dogs eat rice?", a: "Use caution — white rice has a high glycemic index and can spike blood sugar. Brown rice is a better option for diabetic dogs, but consult your vet for specific dietary guidance." },
];

export default function CanDogsEatRice() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Rice? Yes — A Vet-Recommended Food | CanMyPetEat"
      description="Rice is safe and even beneficial for dogs. White rice is a go-to remedy for upset stomachs, and it's a common ingredient in quality dog foods."
      canonical="/can-dogs-eat/rice"
      petType="dog"
      food="Rice"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — rice is perfectly safe for dogs and is actually recommended by veterinarians as part of a bland diet for dogs with upset stomachs. Plain cooked white rice is easy to digest, gentle on the stomach, and a good source of quick energy. It's also a common ingredient in many commercial dog foods."
        details="Rice is one of the most vet-recommended human foods for dogs. White rice is a simple carbohydrate that's easy to digest, making it ideal when your dog has gastrointestinal issues. The classic 'bland diet' prescribed by vets — boiled chicken and white rice — has helped countless dogs recover from stomach problems. Brown rice offers more nutritional value (fiber, B vitamins, minerals) but takes longer to digest because the outer hull is intact. For everyday supplementation in a healthy dog, either white or brown rice works fine. Always serve rice plain — no butter, salt, garlic, onion, or other seasonings."
        whatToDo="If your dog has an upset stomach, try the bland diet: mix 2 parts plain cooked white rice with 1 part plain boiled chicken breast (no skin, no bones). Feed small portions 3-4 times a day for 2-3 days, then gradually transition back to regular food."
        safeAlternatives="Other safe, easily digestible carbs for dogs include plain cooked oatmeal, plain cooked sweet potato, and plain cooked pumpkin (not pie filling). These can also be mixed with lean protein for a gentle meal."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
