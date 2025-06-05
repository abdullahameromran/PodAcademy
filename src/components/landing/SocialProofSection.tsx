
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'University Student',
    quote: "PodAcademy has revolutionized how I study. I can actually absorb information while commuting!",
    rating: 5,
  },
  {
    name: 'John B.',
    role: 'Medical Student',
    quote: "The 10-minute summaries are a lifesaver. I can quickly review chapters before exams.",
    rating: 5,
  },
  {
    name: 'Emily K.',
    role: 'Lifelong Learner',
    quote: "Finally, a way to make dense academic texts accessible and engaging. Highly recommend!",
    rating: 4,
  },
];

const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : '';
  const lastNameInitial = nameParts.length > 1 && nameParts[1] ? nameParts[1][0] : '';
  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Students & Educators</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Join over <span className="font-semibold text-primary">50,000 users</span> who have transformed their learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-auto border-t pt-4">
                <Avatar>
                  {/* AvatarImage can be used if you have actual images later */}
                  {/* <AvatarImage src="https://github.com/shadcn.png" alt={testimonial.name} /> */}
                  <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-theme-yellow fill-theme-yellow" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-muted-foreground/50" />
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
