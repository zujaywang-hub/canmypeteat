import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can dogs eat ramen noodles?", a: "Not recommended. Ramen noodles are high in sodium, and the seasoning packets often contain garlic and onion powder. Plain cooked noodles without seasoning are safer." },
  { q: "Can dogs eat pasta with sauce?", a: "Plain pasta only. Most sauces contain garlic, onion, heavy cream, or excessive salt — all problematic for dogs. Tomato sauce may also cause stomach upset." },
  { q: "Are noodles nutritious for dogs?", a: "No. Noodles are essentially empty calories for dogs — mostly refined carbohydrates with minimal nutritional value. They should only be a rare treat, not a regular food." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Noodles? Plain vs Seasoned | CanMyPetEat" description="Plain cooked noodles are safe for dogs in small amounts. Learn which types and sauces to avoid." canonical="/can-dogs-eat/noodles" petType="dog" food="Noodles" safety="caution">
      <ArticleBody quickAnswer="Plain cooked noodles — yes, in small amounts. Seasoned, sauced, or flavored noodles — no. Plain cooked pasta or noodles are not toxic but offer virtually no nutritional value for dogs. The danger comes from sauces and seasonings." details="Plain cooked wheat, rice, or egg noodles are not harmful to dogs and can settle an upset stomach in a pinch. However, they're essentially empty carbohydrates with no meaningful nutrition for dogs. The real danger comes from what's ON the noodles: garlic and onion in pasta sauce are toxic, cream sauces are too high in fat, ramen seasoning packets are loaded with sodium and often contain garlic/onion powder, and some noodles may contain eggs that could trigger allergies. Dogs with wheat or gluten sensitivities should avoid wheat-based noodles entirely." symptoms="Plain noodles: no symptoms expected. Seasoned noodles: vomiting, diarrhea, excessive thirst (from sodium), and potential garlic/onion toxicity symptoms." whatToDo="If your dog ate plain noodles, no concern. If your dog ate seasoned ramen or pasta with garlic sauce, monitor for digestive upset and watch for signs of garlic/onion toxicity (lethargy, pale gums)." safeAlternatives="Plain cooked rice, plain cooked sweet potato, and plain cooked quinoa are more nutritious carbohydrate options for dogs." faqs={faqs} />
    </ArticleLayout>
  );
}
