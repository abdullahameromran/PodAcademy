'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing textbook chapters into 10-12 minute audio experiences.
 *
 * - summarizeChapter - A function that summarizes a chapter of a textbook.
 * - AISummarizeChapterInput - The input type for the summarizeChapter function.
 * - AISummarizeChapterOutput - The return type for the summarizeChapter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISummarizeChapterInputSchema = z.object({
  chapterText: z.string().describe('The text content of the textbook chapter to summarize.'),
});
export type AISummarizeChapterInput = z.infer<typeof AISummarizeChapterInputSchema>;

const AISummarizeChapterOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the chapter, designed to be delivered in 10-12 minutes of audio.'),
});
export type AISummarizeChapterOutput = z.infer<typeof AISummarizeChapterOutputSchema>;

export async function summarizeChapter(input: AISummarizeChapterInput): Promise<AISummarizeChapterOutput> {
  return summarizeChapterFlow(input);
}

const summarizeChapterPrompt = ai.definePrompt({
  name: 'summarizeChapterPrompt',
  input: {schema: AISummarizeChapterInputSchema},
  output: {schema: AISummarizeChapterOutputSchema},
  prompt: `You are an expert in creating concise summaries of textbook chapters for busy students.  Your goal is to create a summary that can be delivered in an engaging audio format in approximately 10-12 minutes.

  Please provide a high-quality summary of the following chapter text:

  {{chapterText}}`,
});

const summarizeChapterFlow = ai.defineFlow(
  {
    name: 'summarizeChapterFlow',
    inputSchema: AISummarizeChapterInputSchema,
    outputSchema: AISummarizeChapterOutputSchema,
  },
  async input => {
    const {output} = await summarizeChapterPrompt(input);
    return output!;
  }
);
