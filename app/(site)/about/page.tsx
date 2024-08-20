import Image from "next/image";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import project from "@/schemaTypes/project";
import Skills from "../components/Skills";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <div>
      <main className="md:block hidden mx-auto md:px-16 lg:px-24 lg:py-32 md:py-24 px-6">
        {profile.map((data) => (
          <div key={data._id} className="relative md:pt-0">
            <h1 className="text-left">About</h1>
            <section key={data._id} className="flex justify-items-center">
              <div className="text-2xl w-full flex gap-x-4 leading-relaxed">
                <div
                  className="w-[25vw] h-[.5vh] mx-auto mt-5 self-start"
                  style={{
                    backgroundColor: "var(--vertical-bar-color, #FEC76A)",
                  }}
                ></div>
                <span className="text-justify">{data.shortBio}</span>
              </div>
            </section>
          </div>
        ))}

        <Skills />
      </main>
      <main className="block md:hidden px-6 py-10">
        {profile.map((data) => (
          <div key={data._id} className="relative md:pt-0">
            <span className="font-bold justify-center w-fit mx-auto flex text-4xl h1 border-b-3 border-b-primary-yellow">
              About
            </span>
            <section key={data._id} className="flex justify-items-center">
              <span className="text-justify text-xl w-full flex gap-x-4 leading-normal">
                {data.shortBio}
              </span>
            </section>
          </div>
        ))}

        <Skills />
      </main>
    </div>
  );
}
