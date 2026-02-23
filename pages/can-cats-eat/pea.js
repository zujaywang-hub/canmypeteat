import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "Are peas in cat food good or bad?", a: "Peas are commonly used in grain-free cat foods as a carbohydrate source. In moderation, they're fine, but cats don't need plant-based protein — meat should be the primary protein source." },
  { q: "Can cats eat frozen peas?", a: "Yes, thawed frozen peas are safe. Some cats enjoy batting them around as toys before eating them." },
  { q: "Can cats eat pea pods?", a: "Sugar snap pea pods are safe but tough to digest. The peas inside are easier for cats to eat and digest." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Cats Eat Peas? Common Cat Food Ingredient | CanMyPetEat" description="Peas are safe for cats and found in many cat foods. Learn about peas as treats and in commercial diets." canonical="/can-cats-eat/pea" petType="cat" food="Peas" safety="safe">
      <ArticleBody quickAnswer="Yes — peas are safe for cats in small amounts. They provide fiber, vitamins, and plant protein. Many grain-free cat foods use peas as a carbohydrate source. Serve plain, cooked or thawed frozen." details="Peas are non-toxic to cats and a common ingredient in commercial cat foods, especially grain-free formulas. They provide fiber, vitamins A, C, K, and B vitamins, plus some plant-based protein. Fresh, frozen (thawed), or cooked peas are all safe. Some cats enjoy chasing round peas across the floor before eating them — making peas both a treat and enrichment activity. However, cats are obligate carnivores and should get their primary protein from meat. Avoid canned peas (high sodium) and seasoned peas." symptoms="Generally very safe. Large amounts may cause mild gas or digestive upset." whatToDo="Peas are safe. No concerns needed for small amounts." safeAlternatives="Cooked pumpkin, steamed carrots, cooked chicken, and commercial cat treats." faqs={faqs} />
    </ArticleLayout>
  );
}
