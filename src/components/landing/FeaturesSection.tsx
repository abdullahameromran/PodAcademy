import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Headphones, Clock, MapIcon as Map, FileText, Smartphone } from 'lucide-react'; // Using MapIcon as Map
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="h-8 w-8 text-theme-purple" />,
    title: 'AI-Powered Conversion',
    description: 'Our smart AI transforms your dense textbooks and syllabi into engaging, podcast-style audio lessons.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-theme-purple" />,
    title: 'Podcast-Style Learning',
    description: 'Enjoy conversational audio content that makes learning feel less like a chore and more like a discussion.',
  },
  {
    icon: <Clock className="h-8 w-8 text-theme-purple" />,
    title: '10-12 Minute Summaries',
    description: 'Get concise chapter summaries perfect for quick reviews or fitting study into a busy schedule.',
  },
  {
    icon: <Map className="h-8 w-8 text-theme-purple" />,
    title: 'Visual Mind Maps',
    description: 'Complement your audio learning with AI-generated mind maps to visualize connections and concepts.',
  },
  {
    icon: <FileText className="h-8 w-8 text-theme-purple" />,
    title: 'Practice Exams',
    description: 'Test your knowledge with AI-generated practice exams based on your study material.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-theme-purple" />,
    title: 'Mobile-First Design',
    description: 'Access PodAcademy on any device, anytime, anywhere. Perfect for on-the-go learning.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Unlock a Smarter Way to Study</h2>
          <p className="text-lg text-muted-foreground mt-2">
            PodAcademy offers a suite of tools designed to make learning more efficient and enjoyable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 active:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-theme-purple/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
