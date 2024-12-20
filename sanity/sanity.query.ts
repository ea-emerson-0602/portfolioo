// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      mobileProfileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

    // sanity/sanity.query.ts

    export async function getJob() {
        return client.fetch(
          groq`*[_type == "job"]{
            _id,
            name,
            jobTitle,
            "logo": logo.asset->url,
            url,
            description,
            startDate,
            endDate,
          }`
        );
      }

      // sanity/sanity.query.ts

export async function getProjects() {
  return client.fetch(
   groq`*[_type == "project"] | order(createdAt desc){
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`);
}

// sanity/sanity.query.ts

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skill"]{
      _id, 
      name,
      "logo": logo.asset->url,
      skillDocUrl
    }`
  );
}
