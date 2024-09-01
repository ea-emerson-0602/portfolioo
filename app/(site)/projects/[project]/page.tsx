"use server";
import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "../../icons/project.png";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "add-a-fallback-project-image-here",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    // <main className="lg:pt-32 pt-12 md:pt-24 mx-auto lg:px-16 px-8">
    <div className="mx-auto md:px-16 lg:px-24 lg:py-32 md:py-24 ">
      <main className="md:block hidden max-w-3xl mx-auto ">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-primary-yellow text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </main>
      <section className=" block md:hidden px-6 py-10 mx-auto">
        <div className="flex flex-col items-start justify-between mb-4">
          <h1 className="font-bold h1 text-4xl text-center mx-auto ">{project.name}</h1>

          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-primary-yellow text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50 border border-transparent rounded-md px-4 my-4"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 my-8 leading-7 text-zinc-300">
          <PortableText value={project.description} />
        </div>
      </section>
    </div>
  );
}
