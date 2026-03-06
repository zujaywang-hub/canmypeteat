import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Can cats eat apple skin?", a: "Yes, the skin is safe but harder to digest. Peeling is recommended for cats, especially kittens or seniors with sensitive stomachs." },
  { q: "Can cats eat apple seeds?", a: "No — apple seeds contain amygdalin, which releases cyanide when crushed. Always remove all seeds and the core before offering apple to your cat." },
  { q: "Do cats even like apples?", a: "Most cats are indifferent to apples since they can't taste sweetness. Some enjoy the crunchy texture. Don't worry if your cat isn't interested — they don't need fruit in their diet." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Apples? Yes, In Small Amounts | CanMyPetEat" description="Apples are safe for cats in small amounts. Remove seeds and core first. Learn the safe way to share apples with your cat." canonical="/can-cats-eat/apple" petType="cat" food="Apple" safety="safe">
      <ArticleBody quickAnswer="Yes — plain apple flesh is safe for cats in small amounts. Apples provide some fiber and vitamins A and C. However, cats are obligate carnivores and don't need fruit. Always remove seeds, core, and stem before serving, as apple seeds contain cyanide compounds." details="Apples are non-toxic to cats and can be offered as an occasional treat. The flesh contains fiber, vitamin A, and vitamin C, though cats produce their own vitamin C and don't benefit from dietary sources the same way humans do. Cats lack sweet taste receptors, so most cats won't be particularly attracted to apples. The real risk comes from seeds — they contain amygdalin which converts to hydrogen cyanide when digested. A few seeds won't cause acute toxicity, but it's best practice to always remove them. Apple skin is safe but can be tough for cats to digest, so peeling is recommended. Never give cats apple products with added sugar, cinnamon, or other seasonings." whatToDo="Wash the apple, remove the core, seeds, and stem completely. Peel the skin if desired. Cut into very small pieces (pea-sized) to prevent choking. Offer just 1-2 small pieces as an occasional treat — not a regular food." safeAlternatives="Other safe fruits for cats include blueberries (antioxidant-rich), watermelon (seedless, hydrating), and cantaloupe (many cats love the smell). Remember: meat-based treats are always more appropriate for cats." faqs={faqs} />
    </ArticleLayout>
  );
}
