import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat raw sweet potato?", a: "No. Raw sweet potato is very hard to digest and can cause intestinal blockage. Always cook it first — boiled, baked, or steamed." },
  { q: "Is sweet potato better than regular potato for dogs?", a: "Yes. Sweet potatoes have more fiber, vitamins, and antioxidants than white potatoes, and they don't contain solanine (found in green/raw white potatoes)." },
  { q: "Can dogs eat sweet potato skin?", a: "Cooked sweet potato skin is safe but can be tough to digest. For dogs with sensitive stomachs, peel it first." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Sweet Potato? Yes — Highly Nutritious | CanMyPetEat" description="Cooked sweet potato is excellent for dogs. Rich in fiber, vitamins A and C, and antioxidants. A healthy alternative to processed treats." canonical="/can-dogs-eat/sweet-potato" petType="dog" food="Sweet Potato" safety="safe">
      <ArticleBody
        quickAnswer="Yes — cooked sweet potato is one of the most nutritious foods you can give your dog! It's packed with dietary fiber, beta-carotene, vitamins A, B6, and C, plus antioxidants. Many premium dog foods and treats feature sweet potato as a key ingredient. Just make sure to cook it first — raw sweet potato is hard to digest."
        details="Sweet potatoes are a nutritional powerhouse for dogs. They're one of the best natural sources of beta-carotene (which converts to vitamin A for immune and eye health), and they contain more fiber than white potatoes, making them excellent for digestive health. The complex carbohydrates provide sustained energy without blood sugar spikes. Sweet potatoes are also a common ingredient in grain-free dog foods as a healthy carbohydrate source. Dehydrated sweet potato slices have become a popular natural chew treat — they're chewy, tasty, and much healthier than rawhide. You can easily make your own by slicing sweet potato thin and baking at low temperature until dried."
        whatToDo="Wash, peel (optional), and cook by boiling, baking, or steaming until soft. Cut into appropriate-sized pieces. Serve plain — no butter, sugar, marshmallows, or seasonings. Can also mash and mix into regular food."
        safeAlternatives="Other nutritious cooked vegetables for dogs include regular pumpkin, butternut squash, carrots, and green beans."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
