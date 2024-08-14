import Image from "next/image";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Skills from "../components/Skills";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="mx-auto px-6 py-12 md:px-16 lg:px-24">
      {profile.map((data) => (
        <div key={data._id}>
          <h1 className="text-left text-3xl md:text-4xl lg:text-5xl mb-8">About</h1>
          <section key={data._id} className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-2xl w-full flex gap-x-4 leading-relaxed">
              <div
                className="w-full md:w-1/4 h-1 hidden md:h-2 mx-auto mt-5 self-start"
                style={{
                  backgroundColor: "var(--vertical-bar-color, #FEC76A)",
                }}
              ></div>
              <span className="w-full md:w-3/4 text-justify">
                {data.shortBio}
              </span>
            </div>
          </section>
        </div>
      ))}

      <Skills />
    </main>
  );
}
