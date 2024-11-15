import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    
    // defineField({
    //   name: "createdAt",
    //   title: "Created At",
    //   type: "datetime",
    //   options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    //   initialValue: () => new Date().toISOString(), // Automatically set current timestamp
    // }),
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      description: "Timestamp of when the project was created",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", timeStep: 1 },
    },
  ],
};

export default project;
