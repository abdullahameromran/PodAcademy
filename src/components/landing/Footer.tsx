import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1748103745897x593348561538088200/Untitled_logo_1_free-file%20%281%29.jpg"
                alt="PodAcademy Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="font-headline text-lg font-bold text-primary">PodAcademy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming textbooks into engaging audio experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary">How it Works</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} PodAcademy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
