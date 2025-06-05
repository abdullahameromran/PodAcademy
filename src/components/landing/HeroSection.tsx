import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const appUrl = 'http://app.podacademy101.online/';
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
              <Link href={appUrl} target="_blank" rel="noopener noreferrer">Start Your Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="#how-it-works">Watch Demo</Link>
            </Button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-2xl flex items-center justify-center p-4 bg-muted/20">
          <Image
            src="https://storage.googleapis.com/generative-ai-for-developers/imageClassification/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%A4%BA%E4%BE%8B%E5%9B%BE%E7%89%87_1724209981377.png"
            alt="Man wearing headphones, enjoying audio content for PodAcademy"
            width={900}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="man headphones"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
