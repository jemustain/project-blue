import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import post from "./post";
import about from "./about";
import galleryImage from "./galleryImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, post, about, galleryImage],
};
