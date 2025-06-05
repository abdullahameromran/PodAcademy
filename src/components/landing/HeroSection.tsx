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
            src="https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1749118093196x719140327044314200/ChatGPT%20Image%20Jun%205%2C%202025%2C%2001_03_14%20PM.png?_gl=1*1vju3g5*_gcl_au*MTI2MjE4NjI2Ni4xNzQ4ODg5ODkw*_ga*NzcyMjA1NzA1LjE3NDEwODcxMDg.*_ga_BFPVR2DEE2*czE3NDkxMTgwNjkkbzg3JGcxJHQxNzQ5MTE4MDgwJGo0OSRsMCRoMA.."
            alt="Students engaging with PodAcademy's AI-powered audio learning platform."
            width={900}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="students podcasting"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
