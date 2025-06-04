import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'University Student',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'student portrait',
    quote: "PodAcademy has revolutionized how I study. I can actually absorb information while commuting!",
    rating: 5,
  },
  {
    name: 'John B.',
    role: 'Medical Student',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'student portrait',
    quote: "The 10-minute summaries are a lifesaver. I can quickly review chapters before exams.",
    rating: 5,
  },
  {
    name: 'Emily K.',
    role: 'Lifelong Learner',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'person portrait',
    quote: "Finally, a way to make dense academic texts accessible and engaging. Highly recommend!",
    rating: 4,
  },
];

// const universityLogos = [
//   { name: 'University A', src: 'https://placehold.co/150x50.png?text=Uni+A', hint: 'university logo' },
//   { name: 'University B', src: 'https://placehold.co/150x50.png?text=Uni+B', hint: 'university logo' },
//   { name: 'University C', src: 'https://placehold.co/150x50.png?text=Uni+C', hint: 'university logo' },
//   { name: 'University D', src: 'https://placehold.co/150x50.png?text=Uni+D', hint: 'university logo' },
// ];

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
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                  data-ai-hint={testimonial.imageHint}
                />
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

        {/* <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Trusted by Leading Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {universityLogos.map((logo, index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  objectFit="contain"
                  data-ai-hint={logo.hint}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SocialProofSection;
