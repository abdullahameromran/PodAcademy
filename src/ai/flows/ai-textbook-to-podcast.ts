// use server'

/**
 * @fileOverview Converts textbooks into podcast-style conversations using AI.
 *
 * - aiTextbookToPodcast - A function that initiates the textbook to podcast conversion.
 * - AITextbookToPodcastInput - The input type for the aiTextbookToPodcast function.
 * - AITextbookToPodcastOutput - The return type for the aiTextbookToPodcast function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AITextbookToPodcastInputSchema = z.object({
  textbookContent: z
    .string()
    .describe('The content of the textbook or syllabus to be converted.'),
});
export type AITextbookToPodcastInput = z.infer<typeof AITextbookToPodcastInputSchema>;

const AITextbookToPodcastOutputSchema = z.object({
  podcastScript: z
    .string()
    .describe('The generated script for the podcast-style conversation.'),
});
export type AITextbookToPodcastOutput = z.infer<typeof AITextbookToPodcastOutputSchema>;

export async function aiTextbookToPodcast(
  input: AITextbookToPodcastInput
): Promise<AITextbookToPodcastOutput> {
  return aiTextbookToPodcastFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTextbookToPodcastPrompt',
  input: {schema: AITextbookToPodcastInputSchema},
  output: {schema: AITextbookToPodcastOutputSchema},
  prompt: `You are an AI expert in converting textbook content into engaging podcast-style conversations.

  Based on the following textbook content, generate a script for a podcast that covers the key concepts in an easy and conversational manner.

  Textbook Content: {{{textbookContent}}}
  `,
});

const aiTextbookToPodcastFlow = ai.defineFlow(
  {
    name: 'aiTextbookToPodcastFlow',
    inputSchema: AITextbookToPodcastInputSchema,
    outputSchema: AITextbookToPodcastOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
