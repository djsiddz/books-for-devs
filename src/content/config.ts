// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const booksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    authorName: z.string(),
    publisher: z.string(),
    publicationDate: z.string().transform((str) => new Date(str)),
    printLength: z.number(),
    amazonINLink: z.string(),
    coverImage: z.string(),
    description: z.string(),
    readingStatus: z.enum(["Currently Reading 👓", "Read ✅", "Wishlisted ⭐", "Next Up ⏭️"]).optional(),
    recommended: z.boolean().optional(),
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'books': booksCollection,
};
