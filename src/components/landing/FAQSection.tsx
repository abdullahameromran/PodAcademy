import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How accurate is the AI conversion?',
    answer:
      'Our AI is trained on a vast dataset of educational materials and uses advanced natural language processing techniques to ensure high accuracy and contextual understanding. While it\'s very accurate, we always recommend cross-referencing critical information.',
  },
  {
    question: 'What textbook and document formats are supported?',
    answer:
      'PodAcademy supports a variety of common formats, including PDF, DOCX, TXT, and EPUB. We are continuously working to expand compatibility.',
  },
  {
    question: 'Can I use PodAcademy content offline?',
    answer:
      'Yes, our Premium plan allows you to download audio lessons and other materials for offline access, so you can study even without an internet connection.',
  },
  {
    question: 'How long does it take to convert a textbook chapter?',
    answer:
      'Conversion times can vary depending on the length and complexity of the chapter. Typically, a standard chapter is processed and ready within a few minutes.',
  },
  {
    question: 'Is my uploaded data secure?',
    answer:
      'Absolutely. We prioritize data security and privacy. Your uploaded materials are encrypted and handled with strict confidentiality. Please see our Privacy Policy for more details.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Have questions? We've got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
              <AccordionTrigger className="py-6 text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
