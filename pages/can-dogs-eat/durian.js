import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat durian seeds?", a: "NO — durian seeds are toxic and a choking/blockage hazard. Only the flesh, and only in very small amounts." },
  { q: "Will the smell bother my dog?", a: "Many dogs are actually attracted to durian's strong smell. However, the high fat content makes it a poor treat choice." },
  { q: "Can durian make a dog sick?", a: "The flesh itself isn't toxic, but the extremely high fat and sugar content can cause vomiting, diarrhea, and pancreatitis." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Durian? The King of Fruits | CanMyPetEat" description="Durian flesh isn't toxic but is very high in fat and sugar. Seeds are toxic. Learn the full guide." canonical="/can-dogs-eat/durian" petType="dog" food="Durian" safety="caution">
      <ArticleBody quickAnswer="Very small amounts of flesh only — durian flesh is not toxic but extremely high in fat and sugar, making it a poor treat choice. Seeds are TOXIC. The strong odor attracts many dogs but the nutritional profile makes it risky." details="Durian is nicknamed the 'king of fruits' but it's a questionable choice for dogs. The flesh contains vitamins C and B6, potassium, and fiber, but it's extremely high in both fat and sugar — higher than almost any other fruit. This combination increases the risk of pancreatitis and digestive upset. Durian seeds are toxic and must never be given to dogs. The hard, spiky shell is obviously dangerous. If your dog gets into durian, a small taste of flesh is unlikely to cause serious harm, but it shouldn't be a regular treat." symptoms="Small amount: likely safe. More than a taste: vomiting, diarrhea, bloating from high fat. Seeds: toxicity risk." whatToDo="A small taste of durian flesh is not an emergency. If your dog ate a large amount or seeds, contact your vet." safeAlternatives="Mango, papaya, watermelon, and blueberries are much safer tropical fruit options." faqs={faqs} />
    </ArticleLayout>
  );
}
