import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Which peanut butter brands are safe for dogs?", a: "Most major brands like Jif, Skippy, and Peter Pan are safe. Always check the label for xylitol (also called birch sugar). Natural peanut butters with just peanuts and salt are the best choice." },
  { q: "Can dogs eat crunchy peanut butter?", a: "Yes, both smooth and crunchy are safe as long as they don't contain xylitol. Some dogs prefer the texture of crunchy peanut butter." },
  { q: "How much peanut butter can a dog have?", a: "A tablespoon for a medium dog is a good limit. Peanut butter is calorie-dense (about 90 calories per tablespoon), so it should be an occasional treat, not a daily staple." },
];

export default function CanDogsEatPeanutButter() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Peanut Butter? Yes — But Check for Xylitol | CanMyPetEat"
      description="Most peanut butter is safe for dogs and makes an excellent treat. However, some brands contain xylitol, which is extremely toxic to dogs. Always check the label."
      canonical="/can-dogs-eat/peanut-butter"
      petType="dog"
      food="Peanut Butter"
      safety="caution"
    >
      <ArticleBody
        quickAnswer="Yes, most peanut butter is safe for dogs — but you MUST check the label first. Some peanut butter brands contain xylitol (also labeled as 'birch sugar' or 'natural sweetener'), which is extremely toxic to dogs. If the label is xylitol-free, peanut butter is a fantastic, protein-rich treat that most dogs absolutely love."
        details="Peanut butter is one of the most popular dog treats for good reason. It's high in protein, healthy fats, and vitamins B and E. It's perfect for stuffing Kong toys, hiding medication, or as a training reward. The critical safety issue is xylitol — a sugar alcohol used as a sweetener that's completely safe for humans but can be lethal for dogs. Xylitol causes a massive release of insulin in dogs, leading to dangerous hypoglycemia (low blood sugar) within 10-60 minutes, and can cause liver failure within days. When choosing peanut butter for your dog, look for brands with simple ingredients: just peanuts, and maybe salt. Avoid 'sugar-free,' 'low-sugar,' or 'no added sugar' varieties, as these are most likely to contain xylitol. Natural or organic peanut butters are generally the safest bet."
        symptoms="If your dog ate peanut butter WITH xylitol: vomiting, weakness, staggering, collapse, seizures, and liver failure. This is a life-threatening emergency. If they ate regular (xylitol-free) peanut butter: generally no symptoms, though large amounts may cause mild digestive upset or pancreatitis due to high fat content."
        whatToDo="If your dog ate peanut butter containing xylitol, rush to the emergency vet immediately — this is a time-sensitive emergency. If it's regular peanut butter and your dog ate a large amount, monitor for vomiting or diarrhea and contact your vet if symptoms persist."
        safeAlternatives="If you want to avoid the xylitol risk entirely, try mashed banana, plain pumpkin puree, or plain cottage cheese as Kong stuffers or treat alternatives. You can also make your own dog-safe peanut butter by blending plain roasted peanuts."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
