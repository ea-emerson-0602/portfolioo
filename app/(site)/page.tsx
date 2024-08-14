// "use client";

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { FaGithub, FaTwitter, FaLinkedin, FaTwitch } from "react-icons/fa";
import { IconType } from "react-icons";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import SmoothScrollButton from "./components/ui/SmoothScrollButton";
import Link from "next/link";
import { Button } from "./components/ui/button";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    twitter: FaTwitter,
    twitch: FaTwitch,
    linkedin: FaLinkedin,
  };

  return profile.map((data) => (
    <main className="max-w-full mx-auto mt-0" key={data._id}>
      <section
        id="/"
        className="w-full h-screen flex flex-col-reverse lg:flex-row-reverse lg:items-center items-start lg:justify-center justify-between px-4 py-10"
        style={{
          backgroundImage: `url(${data.profileImage.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.9), 0px 20px 20px -20px #31333B"
        }}
      >
        <div className="flex flex-col lg:flex-row justify-around items-center w-full">
          <span className="w-full lg:w-1/2 text-center lg:text-left mb-8">
            I&apos;m
            <span className="text-primary-yellow text-4xl lg:text-7xl">
              {" "}
              {data.fullName}
            </span>
            <p>{data.headline}</p>
            <div>
              <SmoothScrollButton/>
            </div>
          </span>

          <div
            className="relative rounded-2xl mb-4 w-full lg:w-1/2 h-96 bg-top overflow-hidden"
            aria-label={data.profileImage.alt}
          >
            <ul className="absolute bottom-4 right-4 flex flex-col items-end gap-y-4">
              <div
                className="h-24 w-[2px] mb-4 m-auto"
                style={{
                  backgroundColor: "var(--vertical-bar-color, #FEC76A)",
                }}
              ></div>
              {Object.entries(data.socialLinks)
                .sort()
                .map(([key, value], id) => {
                  const IconComponent = socialIcons[key.toLowerCase()];
                  return (
                    <li key={id}>
                      <a
                        href={value}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-primary-yellow text-white duration-300"
                      >
                        {IconComponent ? (
                          <IconComponent className="text-xl" />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="bg-about-grey">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  ));
}
