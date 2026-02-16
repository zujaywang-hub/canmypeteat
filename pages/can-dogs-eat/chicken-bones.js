import { ArticleLayout, ArticleBody } from "../../lib/article";

const faqs = [
  { q: "What about raw chicken bones?", a: "Raw bones are generally softer and less likely to splinter than cooked bones. Many vets consider raw chicken necks and wings acceptable, but there's still a risk of bacterial contamination and choking. Always supervise." },
  { q: "My dog ate a chicken bone. What should I do?", a: "Don't panic. Monitor closely for 24-72 hours. Watch for vomiting, diarrhea, bloody stool, lethargy, loss of appetite, or signs of abdominal pain. If you notice any of these, go to the vet immediately." },
  { q: "Can dogs eat chicken meat without bones?", a: "Absolutely! Plain cooked chicken (boneless, skinless) is one of the best protein sources for dogs and is a common ingredient in quality dog foods." },
];

export default function CanDogsEatChickenBones() {
  return (
    <ArticleLayout
      title="Can Dogs Eat Chicken Bones? No — Serious Danger | CanMyPetEat"
      description="Cooked chicken bones are dangerous for dogs. They splinter easily and can cause choking, internal punctures, and intestinal blockage."
      canonical="/can-dogs-eat/chicken-bones"
      petType="dog"
      food="Chicken Bones"
      safety="toxic"
    >
      <ArticleBody
        quickAnswer="No — cooked chicken bones are dangerous for dogs. When cooked, chicken bones become brittle and splinter into sharp fragments that can cause choking, puncture the throat or digestive tract, or create intestinal blockages. Never give your dog cooked chicken bones of any kind — this includes rotisserie chicken, fried chicken, and boiled chicken bones."
        details="Cooking fundamentally changes the structure of bones. Raw bones are relatively flexible and will crush when chewed, but cooking removes moisture and denatures the collagen, making bones hard, dry, and prone to splintering into sharp shards. These splinters can cause damage at every point of the digestive tract: they can lodge in the throat causing choking, puncture the esophagus, stomach, or intestines, or form a mass that blocks the intestinal tract. Cooked chicken bones are particularly dangerous because of their small size and thin structure — they splinter easily even under light chewing pressure. Rib bones, wing bones, and leg bones are all equally hazardous when cooked."
        symptoms="If your dog ate a cooked chicken bone, watch for: choking or gagging, drooling, vomiting (may contain blood), bloody or very dark stool, abdominal pain or bloating, straining to defecate, loss of appetite, and lethargy."
        whatToDo="If your dog is actively choking, this is an emergency — head to the vet immediately. If your dog swallowed a cooked bone and isn't choking, do NOT induce vomiting (the bone could cause more damage coming back up). Feed your dog some plain bread or pumpkin to help cushion the bone as it passes. Monitor closely for 48-72 hours and go to the vet if you notice any symptoms."
        safeAlternatives="For dogs that love to chew, try raw marrow bones (ask your butcher), bully sticks, frozen Kongs stuffed with peanut butter, or vet-approved dental chews. For protein, plain cooked boneless chicken breast is one of the best foods for dogs."
        faqs={faqs}
      />
    </ArticleLayout>
  );
}
