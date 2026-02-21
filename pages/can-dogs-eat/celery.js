import { ArticleLayout, ArticleBody } from "../../lib/article";
const faqs = [
  { q: "How should I prepare celery for my dog?", a: "Wash thoroughly and cut into small bite-sized pieces. The strings in celery can be a choking hazard, especially for small dogs, so cut across the fibers." },
  { q: "How much celery can a dog eat?", a: "Treats including celery should make up no more than 10% of your dog's daily calories. A few small pieces as a snack is appropriate." },
  { q: "Can celery help with dog breath?", a: "Yes! The crunchy texture helps clean teeth and the natural compounds can help freshen breath." },
];
export default function Page() {
  return (
    <ArticleLayout title="Can Dogs Eat Celery? Benefits & Tips | CanMyPetEat" description="Yes, celery is safe and healthy for dogs. Low calorie and great for overweight pets. Learn how to serve it safely." canonical="/can-dogs-eat/celery" petType="dog" food="Celery" safety="safe">
      <ArticleBody quickAnswer="Yes — celery is safe and healthy for dogs. It's extremely low in calories, contains vitamins A, C, and K, and the crunchy texture can help clean teeth and freshen breath." details="Celery is made up of about 95% water, making it an excellent hydrating snack. It's very low in calories, making it ideal for overweight dogs who still deserve treats. Celery contains vitamins A, C, and K, folate, potassium, and manganese. The crunchy texture provides a natural teeth-cleaning effect. Always cut celery into small pieces to prevent choking on the fibrous strings, especially for small dogs." symptoms="Celery is very safe. In rare cases, too much may cause mild digestive upset or increased urination due to the high water content." whatToDo="No concerns needed — celery is one of the safest vegetables for dogs. If your dog has trouble with the strings, try cutting pieces very small." safeAlternatives="Other great low-calorie veggie treats include cucumber, green beans, and carrots." faqs={faqs} />
    </ArticleLayout>
  );
}
