import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <div>
      <main className="md:block hidden lg:pt-32 md:pt-24 mx-auto md:px-16 px-6">
        <h1 className="font-bold mb-12 lg:leading-[3.7rem] leading-tight text-center">
          Featured projects
        </h1>

        <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {projects.slice(0, 2).map((project) => (
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
        <Link className="mt-6 mx-auto flex justify-center" href={"/projectss"}>
          <Button className="text-primary-yellow bg-transparent border-3 border-primary-yellow text-xl font-semibold py-2 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-primary-yellow hover:text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50">
            View More
          </Button>
        </Link>
      </main>

      <main className=" block md:hidden px-6">
        <span className="font-bold text-center text-4xl h1">
          Featured projects
        </span>

        <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project._id}
              className="relative group flex flex-col items-center justify-center cursor-pointer bg-cover bg-center h-[400px] rounded-lg"
            >
              <Image
                src={project.logo}
                alt={project.name}
                width={400}
                height={400}
              />
              {/* <div className="relative opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 p-4"> */}
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
            // </div>
          ))}
        </section>
        <Link className="mt-6 mx-auto flex justify-center" href={"/projectss"}>
          <Button className="text-primary-yellow bg-transparent border-3 border-primary-yellow text-xl font-semibold py-2 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-primary-yellow hover:text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50">
            View More
          </Button>
        </Link>
      </main>
    </div>
  );
}
