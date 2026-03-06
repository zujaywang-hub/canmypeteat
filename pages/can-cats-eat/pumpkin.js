import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can pumpkin help my cat with hairballs?", a: "Yes! The fiber in pumpkin helps move hair through the digestive tract more efficiently, reducing hairball formation." },
  { q: "How much pumpkin should I give my cat?", a: "Start with 1/2 teaspoon mixed into food, gradually increasing to 1-2 teaspoons per day if tolerated well." },
  { q: "Can cats eat pumpkin seeds?", a: "Plain, unsalted, roasted pumpkin seeds are safe in very small amounts and may even help with intestinal parasites. Crush them first." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Pumpkin? Yes — Great for Digestion | CanMyPetEat" description="Plain pumpkin is excellent for cats. The fiber aids digestion, helps with constipation and diarrhea, and can even reduce hairballs." canonical="/can-cats-eat/pumpkin" petType="cat" food="Pumpkin" safety="safe">
      <ArticleBody
        quickAnswer="Yes — plain pumpkin is one of the best supplemental foods for cats! It's high in fiber which helps with both diarrhea and constipation, can reduce hairball formation, and provides vitamins A and C. Use plain canned pumpkin (NOT pumpkin pie filling) or fresh cooked pumpkin. Many vets recommend pumpkin as a natural digestive aid for cats."
        details="Pumpkin is a veterinary favorite for cats with digestive issues. The soluble fiber absorbs excess water in the intestines (helping with diarrhea) while also adding bulk to stool (helping with constipation). For cats prone to hairballs, regular pumpkin supplementation helps move ingested fur through the digestive tract more efficiently. Pumpkin is also relatively low in calories (about 40 per cup), making it a safe supplement for overweight cats. The beta-carotene content supports immune health and vision. Most cats tolerate pumpkin well, though some may need time to adjust to the taste. Mixing it into wet food is usually the easiest approach."
        whatToDo="Start with 1/2 teaspoon of plain canned pumpkin mixed into your cat's wet food. If tolerated, you can increase to 1-2 teaspoons daily. Make sure the can says 100% pumpkin — NOT pumpkin pie filling (which contains sugar and spices including toxic nutmeg)."
        safeAlternatives="Other fiber sources for cats include plain cooked sweet potato (small amounts) and psyllium husk (vet-directed dosing)."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
