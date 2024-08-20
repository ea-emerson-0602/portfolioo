import { getSkills } from "@/sanity/sanity.query";
import { SkillType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Skills() {
  const skills: SkillType[] = await getSkills();

  return (
    <div>
      <div className="hidden md:block">
      <h1>
        My Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex cursor-pointer flex-col items-center justify-center py-10 bg-skills-grey hover:bg-primary-yellow rounded-3xl"
          >
            <Image
              src={skill.logo}
              width={100}
              height={100}
              alt={skill.name}
              className="rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-xl font-semibold mb-4 text-center">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="block md:hidden px-6 py-10">
    <span className="font-bold justify-center flex text-4xl h1 pb-4">My Skills</span>
      <div className="grid grid-cols-2 gap-6 ">
        {skills.map((skill) => (
          <Link href={skill.skillDocUrl!=null ? skill.skillDocUrl : "/"} target="blank"
            key={skill.name}
            className="flex cursor-pointer flex-col items-center justify-center py-4 bg-skills-grey hover:bg-primary-yellow rounded-3xl"
          >
            <Image
              src={skill.logo}
              width={80}
              height={80}
              alt={skill.name}
              className="rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-xl font-semibold mb-4 text-center">
              {skill.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
