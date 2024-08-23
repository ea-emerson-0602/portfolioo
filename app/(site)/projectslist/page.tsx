import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <div className="mx-auto md:px-16 lg:px-24 lg:py-32 md:py-24 px-6">
    <main className="md:block hidden ">
      <h1>Featured projects</h1>

        <section className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative group flex items-center justify-center cursor-pointer bg-cover bg-center h-[400px] rounded-lg"
              style={{ backgroundImage: `url(${project.logo})` }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 p-4">
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

      <main className=" block md:hidden px-6">
        <span className="font-bold flex justify-center text-center text-4xl h1 my-8">
          Featured projects
        </span>

        <section className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project._id}
                className="relative group flex flex-col items-center justify-center cursor-pointer bg-cover bg-center mb-12 rounded-lg"
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={400}
                  height={400}
                />
                <h2 className="text-white text-center mx-auto text-xl font-semibold mb-2">
                  {project.name}
                </h2>
                <p className="text-white text-sm mb-4">{project.tagline}</p>
                <Link href={`/projects/${project.slug}`}>
                  <button className="text-white bg-primary-yellow py-2 px-4 rounded-md">
                    See More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
