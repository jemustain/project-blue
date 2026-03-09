import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text" }),
    defineField({ name: "image", title: "Background Image", type: "image", options: { hotspot: true } }),
  ],
});
