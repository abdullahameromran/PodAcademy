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
            className="w-3/5 h-3/5"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Animated graphic of sound wave equalizer"
            data-ai-hint="sound wave equalizer audio"
          >
            {/* Baseline for bottom of bars is y=95 */}
            {/* Bar 1 */}
            <rect x="15" width="10" rx="2.5" ry="2.5" fill="hsl(var(--primary))">
              {/* Initial: height=5, y=90 */}
              <animate attributeName="height" values="5;60;20;70;30;50;5" dur="1.9s" repeatCount="indefinite" begin="0s" />
              <animate attributeName="y"      values="90;35;75;25;65;45;90" dur="1.9s" repeatCount="indefinite" begin="0s" /> {/* y = 95 - height */}
            </rect>
            {/* Bar 2 */}
            <rect x="30" width="10" rx="2.5" ry="2.5" fill="hsl(var(--accent))">
              <animate attributeName="height" values="5;70;25;60;35;40;5" dur="1.9s" repeatCount="indefinite" begin="0.15s" />
              <animate attributeName="y"      values="90;25;70;35;60;55;90" dur="1.9s" repeatCount="indefinite" begin="0.15s" />
            </rect>
            {/* Bar 3 */}
            <rect x="45" width="10" rx="2.5" ry="2.5" fill="hsl(var(--primary))">
              <animate attributeName="height" values="5;50;40;75;20;65;5" dur="1.9s" repeatCount="indefinite" begin="0.3s" />
              <animate attributeName="y"      values="90;45;55;20;75;30;90" dur="1.9s" repeatCount="indefinite" begin="0.3s" />
            </rect>
            {/* Bar 4 */}
            <rect x="60" width="10" rx="2.5" ry="2.5" fill="hsl(var(--accent))">
              <animate attributeName="height" values="5;65;20;70;30;45;5" dur="1.9s" repeatCount="indefinite" begin="0.45s" />
              <animate attributeName="y"      values="90;30;75;25;65;50;90" dur="1.9s" repeatCount="indefinite" begin="0.45s" />
            </rect>
            {/* Bar 5 */}
            <rect x="75" width="10" rx="2.5" ry="2.5" fill="hsl(var(--primary))">
              <animate attributeName="height" values="5;55;30;60;25;70;5" dur="1.9s" repeatCount="indefinite" begin="0.6s" />
              <animate attributeName="y"      values="90;40;65;35;70;25;90" dur="1.9s" repeatCount="indefinite" begin="0.6s" />
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
