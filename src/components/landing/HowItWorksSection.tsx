import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, Cpu, PlayCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    title: 'Upload Your Material',
    description: 'Simply upload your syllabus, textbook chapters, or any text-based study material.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'AI Generates Content',
    description: 'Our advanced AI processes the material and creates podcast-style conversations and summaries.',
  },
  {
    icon: <PlayCircle className="h-10 w-10 text-primary" />,
    title: 'Study Anywhere, Anytime',
    description: 'Access your audio lessons, mind maps, and practice exams on any device, on the go.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Simple Steps</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Transforming your study routine with PodAcademy is quick and easy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {step.icon}
                </div>
                <CardTitle className="text-2xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
