import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
  ],
});
