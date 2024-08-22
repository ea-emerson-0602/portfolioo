import { getSkills } from "@/sanity/sanity.query";
import { SkillType } from "@/types";
import Image from "next/image";

export default async function Skills() {
  const skills: SkillType[] = await getSkills();

  return (
    <div className="flex flex-col items-center">
      <h1 className="md:block hidden text-center my-4">My Skills</h1>
      <h1 className="block md:hidden font-bold justify-center text-4xl py-4">My Skills</h1>

      {/* Skills View */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.skillDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer flex-col items-center justify-center py-4 md:py-6 lg:py-8 bg-skills-grey hover:bg-primary-yellow rounded-3xl
            w-[calc(50%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2.5rem)]"
          >
            <Image
              src={skill.logo}
              width={80}
              height={80}
              alt={skill.name}
              className="rounded-lg transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-lg font-semibold mb-4 text-center">
              {skill.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
