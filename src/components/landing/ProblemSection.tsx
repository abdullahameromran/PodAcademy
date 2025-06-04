import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, BookOpenCheck, Clock, Zap } from 'lucide-react';

const ProblemSection = () => {
  const painPoints = [
    { title: 'Information Overload', description: 'Struggling to digest dense textbook material effectively.', icon: <BookOpenCheck className="h-6 w-6 text-primary" /> },
    { title: 'Retention Issues', description: 'Difficulty remembering key concepts from traditional study.', icon: <Zap className="h-6 w-6 text-primary" /> },
    { title: 'Time Constraints', description: 'Not enough hours in the day for lengthy reading sessions.', icon: <Clock className="h-6 w-6 text-primary" /> },
  ];

  return (
    <section id="problem" className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tired of overwhelming textbooks and boring lectures?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Traditional study methods aren't for everyone. <span className="font-semibold text-primary">73% of students</span> struggle with them.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
