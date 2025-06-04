import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
            Transform Textbooks into Engaging Audio Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            AI-powered study system that converts any syllabus into podcast-style conversations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="bg-gradient-to-r from-theme-purple to-theme-cyan text-primary-foreground hover:opacity-90 transition-opacity shadow-lg px-8 py-6 text-lg" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Student with headphones, books transforming into audio waves"
            layout="fill"
            objectFit="cover"
            data-ai-hint="student headphones audio waves"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
