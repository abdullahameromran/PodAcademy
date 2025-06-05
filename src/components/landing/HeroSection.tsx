import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl flex items-center justify-center p-4 bg-muted/20">
          <svg 
            className="w-1/2 h-1/2" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-label="Animated graphic of sound bars"
            data-ai-hint="animated sound bars"
          >
            <rect x="20" y="70" width="10" height="30" fill="hsl(var(--primary))">
              <animate attributeName="height" values="30;50;20;40;30" dur="1.5s" repeatCount="indefinite" begin="0s" />
              <animate attributeName="y" values="70;50;80;60;70" dur="1.5s" repeatCount="indefinite" begin="0s" />
            </rect>
            <rect x="45" y="70" width="10" height="30" fill="hsl(var(--accent))">
              <animate attributeName="height" values="30;60;25;50;30" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
              <animate attributeName="y" values="70;40;75;50;70" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
            </rect>
            <rect x="70" y="70" width="10" height="30" fill="hsl(var(--primary))">
              <animate attributeName="height" values="30;40;20;55;30" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
              <animate attributeName="y" values="70;60;80;45;70" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
