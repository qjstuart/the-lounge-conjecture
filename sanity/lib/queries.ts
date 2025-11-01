import { defineQuery } from "next-sanity";

// GROQ query to fetch all people
export const PEOPLE_QUERY = defineQuery(`*[_type == "person"]{
  _id,
  name,
  slug,
  image
}`);

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
