import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "Can cats eat raw eggs?", a: "No. Raw eggs pose a risk of Salmonella and E. coli infection, and raw egg whites contain avidin which blocks biotin absorption. Always cook eggs before feeding them to your cat." },
  { q: "How much egg can a cat eat?", a: "A tablespoon or two of cooked egg a few times a week is plenty. One egg has about 70 calories — that's a significant portion of a cat's daily 200-250 calorie needs." },
  { q: "Can cats eat scrambled eggs with milk?", a: "Skip the milk — most cats are lactose intolerant. Plain scrambled eggs cooked without butter, oil, or seasoning are the way to go." },
];

export default function CanCatsEatEggs() {
  return (
    <ArticleLayout
      title="Can Cats Eat Eggs? Yes — A Great Protein Boost | CanMyPetEat"
      description="Cooked eggs are safe and nutritious for cats. They're an excellent source of protein and amino acids. Always serve fully cooked and plain."
      canonical="/can-cats-eat/eggs"
      petType="cat"
      food="Eggs"
      safety="safe"
    >
      <ArticleBody
        quickAnswer="Yes — cooked eggs are a safe and nutritious treat for cats! Eggs are an excellent source of complete protein, containing all the essential amino acids cats need, plus healthy fats and vitamins. Always serve them fully cooked (scrambled, hard-boiled, or poached) and plain — no butter, salt, or seasonings."
        details="Eggs are a nutrient-dense food that can benefit cats in moderation. They're one of the most bioavailable protein sources, meaning cats can absorb and use the protein very efficiently. Eggs contain taurine (essential for cats' heart and eye health), vitamin A, vitamin B12, riboflavin, and iron. The yolk provides healthy fats and fat-soluble vitamins. In the wild, cats would occasionally eat bird eggs, so they're a natural part of the feline diet. The key considerations are: always cook eggs to eliminate Salmonella risk, serve plain without any seasonings or oils, and keep portions small. One large egg contains about 70 calories — for a cat that needs only 200-250 calories per day, a whole egg is a substantial meal portion."
        whatToDo="Hard-boil an egg, let it cool, and chop a tablespoon or two into small pieces. Mix it into your cat's regular food or offer as a standalone treat. You can also scramble an egg in a non-stick pan without any oil or butter."
        safeAlternatives="Other protein-rich treats cats enjoy include small pieces of plain cooked chicken, plain cooked salmon or sardines (small amounts), and commercial freeze-dried meat treats."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
