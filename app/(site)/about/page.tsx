import { getProfile, getSkills } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Skills from "../components/Skills";
import Link from "next/link";
import { DownloadIcon } from "@heroicons/react/outline";
import { Button } from "../components/ui/button";

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
            <Button className="mt-12 text-primary-yellow bg-transparent border-3 border-primary-yellow text-xl font-semibold py-6 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-primary-yellow hover:text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50 ">
              <Link
                href={data.resumeURL}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-4"
              >
                <DownloadIcon className="w-10 h-auto" /> Resume
              </Link>
            </Button>
          </div>
        ))}

        <Skills />
      </main>
      <main className="block md:hidden px-6 py-10">
        {profile.map((data) => (
          <div key={data._id} className="relative md:pt-0 flex flex-col">
            <span className="font-bold justify-center w-fit mx-auto flex text-4xl h1 border-b-3 border-b-primary-yellow">
              About
            </span>
            <section key={data._id} className="flex justify-items-center">
              <span className="text-justify text-xl w-full flex gap-x-4 leading-normal">
                {data.shortBio}
              </span>
            </section>
            {/* <div className="flex justify-center"> */}
            <Button className="my-6 mx-auto w-fit text-primary-yellow bg-transparent border-3 border-primary-yellow text-xl font-semibold py-6 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-primary-yellow hover:text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50">
              <Link
                href={data.resumeURL}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-4"
              >
                <DownloadIcon className="w-10 h-auto" /> Resume
              </Link>
            </Button>
            {/* </div> */}
          </div>
        ))}

        <Skills />
      </main>
    </div>
  );
}
