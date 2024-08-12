import { getJob, getSkills } from "@/sanity/sanity.query";
import { JobType, SkillType } from "@/types";
import Image from "next/image";

export default async function Skills() {
  const job: JobType[] = await getJob();
  const skills: SkillType[] = await getSkills();

  return (
    <div>
        <h1 className="">My Skills</h1>
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
  );
}
