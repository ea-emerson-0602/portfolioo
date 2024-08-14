// import Image from "next/image";
// "use server"
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Projectss() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl lg:pt-32 pt-12 md:pt-24 mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative group flex items-center justify-center bg-cover bg-center h-64 rounded-lg"
            style={{ backgroundImage: `url(${project.logo})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300">
              <h2 className="text-white text-2xl font-semibold mb-2">
                {project.name}
              </h2>
              <p className="text-white text-sm mb-4">{project.tagline}</p>
              <Link href={`/projects/${project.slug}`}>
                <button className="text-white bg-primary-yellow py-2 px-4 rounded-md">
                  See More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
     
    </main>
  );
}
