// app/about/page.tsx

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
    <main className="mx-auto md:px-16 lg:px-24 lg:py-32 py-12 md:py-24 px-6">
      {profile.map((data) => (
        <>
          <h1 className="">About</h1>
          <section key={data._id} className="flex gap-x-6 justify-items-center">
            <div className=" text-2xl w-full flex text-zinc-400 leading-relaxed">
              <div
                className="w-24 h-[2px] mx-auto"
                style={{
                  backgroundColor: "var(--vertical-bar-color, #FEC76A)",
                }}
              ></div>
              {data.shortBio}
            </div>
          </section>
        </>
      ))}

      <Skills />
    </main>
  );
}
