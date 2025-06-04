import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get a taste of PodAcademy.',
    features: ['3 chapters/month', 'Basic AI conversion', 'Limited access to features'],
    cta: 'Start for Free',
    variant: 'outline' as 'outline' | 'default',
  },
  {
    name: 'Student',
    price: '$9.99',
    period: '/month',
    description: 'Perfect for individual students.',
    features: [
      'Unlimited chapters',
      'Advanced AI conversion',
      'Podcast-style learning',
      '10-12 minute summaries',
      'Visual mind maps',
      '50 AI-generated quizzes',
      'Email support',
    ],
    cta: 'Get Student Plan',
    variant: 'default' as 'outline' | 'default',
    popular: true,
  },
  {
    name: 'Enterprise', // Renamed from Premium
    price: '$19.99',
    period: '/month',
    description: 'For power users, educators, and organizations.',
    features: [
      'Everything in Student, plus:',
      'Unlimited AI-generated quizzes', // Unlimited based on "all is unlimited"
      'Priority support',
      'Early access to new features',
      // "Offline access" removed
    ],
    cta: 'Contact Sales', // CTA changed
    variant: 'outline' as 'outline' | 'default',
  },
];

const PricingSection = () => {
  const appUrl = 'http://app.podacademy101.online/';

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Flexible Pricing for Everyone</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Choose the plan that fits your learning style and budget.
          </p>
          <p className="text-sm text-muted-foreground mt-2">All paid plans come with a 30-day money-back guarantee.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 active:-translate-y-0.5 transition-all duration-300 ${
                tier.popular ? 'border-2 border-theme-purple relative' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-theme-purple to-theme-cyan text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button 
                  size="lg" 
                  className={`w-full ${tier.popular ? 'bg-gradient-to-r from-theme-purple to-theme-cyan text-primary-foreground hover:opacity-90' : ''}`} 
                  variant={tier.popular ? 'default' : tier.variant} 
                  asChild
                >
                  <Link href={tier.name === 'Enterprise' ? '/contact' : appUrl} target={tier.name === 'Enterprise' ? '_self' : '_blank'} rel="noopener noreferrer">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <p className="text-muted-foreground">Need a custom plan for your institution? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>.</p>
          </div>
      </div>
    </section>
  );
};

export default PricingSection;
