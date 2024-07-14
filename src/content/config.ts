import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    updatedDate: z.string().datetime().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
