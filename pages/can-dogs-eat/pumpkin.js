import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat pumpkin pie?", a: "No. Pumpkin pie filling contains sugar, spices (nutmeg is toxic), and sometimes xylitol. Only use plain, pure pumpkin." },
  { q: "How much pumpkin should I give my dog?", a: "1-2 tablespoons for small dogs, 2-4 tablespoons for medium dogs, and up to 1/2 cup for large dogs. Start small and increase gradually." },
  { q: "Does pumpkin help with dog diarrhea?", a: "Yes! Pumpkin's high fiber content helps firm up loose stools. It also works for constipation — fiber goes both ways. It's a vet-recommended home remedy." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Pumpkin? Yes — A Vet Favorite | CanMyPetEat" description="Plain pumpkin is one of the best foods for dogs. It aids digestion, helps with diarrhea and constipation, and is packed with nutrients." canonical="/can-dogs-eat/pumpkin" petType="dog" food="Pumpkin" safety="safe">
      <ArticleBody
        quickAnswer="Yes — plain pumpkin is a superfood for dogs and one of the most vet-recommended supplements! It's high in fiber (great for both diarrhea AND constipation), packed with vitamins A, C, and E, and most dogs love the taste. Use plain canned pumpkin or fresh cooked pumpkin — NOT pumpkin pie filling."
        details="Pumpkin is the Swiss Army knife of dog nutrition. Its soluble fiber absorbs water, which helps firm up loose stools during bouts of diarrhea. Paradoxically, the same fiber also helps with constipation by adding bulk and moisture to hard stools. This makes pumpkin a go-to remedy for almost any digestive issue. Beyond digestion, pumpkin is rich in beta-carotene (converts to vitamin A for eye and immune health), vitamin C (antioxidant), vitamin E (skin and coat health), potassium, and iron. It's low in calories (about 40 per cup) and the high water content helps keep dogs hydrated. Many vets recommend adding a spoonful of pumpkin to a dog's regular food as a daily supplement."
        whatToDo="Use plain canned pumpkin (check label: ONLY ingredient should be pumpkin) or cook fresh pumpkin until soft. Serve at room temperature mixed into food or as a standalone treat. Can also freeze in ice cube trays for summer treats."
        safeAlternatives="Other great fiber-rich foods for dog digestion include sweet potato, butternut squash, and plain oatmeal."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
