import { defineType, defineField } from "sanity";

export const products = defineType({
  name: "products",
  title: "Products",
  type: "document",

  fields: [
    defineField({
      name: "Title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "Paragraph",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "Title",
      },
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
