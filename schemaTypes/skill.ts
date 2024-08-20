import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const skill = {
  name: "skill",
  title: "Skill",
  description: "skill Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the skill",
    },

    {
      name: "logo",
      title: "Skill Logo",
      type: "image",
    },
    {
      name: "skillDocUrl",
      title: "Skill Doc URL",
      type: "url",
    },
    
  ],
};

export default skill;
