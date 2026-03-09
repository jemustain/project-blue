import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "caption", title: "Caption", type: "text" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
