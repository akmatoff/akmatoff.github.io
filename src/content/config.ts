import { defineCollection, z } from "astro:content";

const general = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    description: z.string(),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    position: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.string(),
  }),
});

export const collections = { general, experience };
