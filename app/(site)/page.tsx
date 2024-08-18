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
    <main className="max-w-[100vw] mx-auto mt-0 "  key={data._id}>
      <section
        id="/"
        className=" w-full lg:h-[100vh] flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between px-28 object-cover  py-10"
        style={{
          backgroundImage: `url(${data.profileImage.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.9), 0px 20px 20px -20px #31333B"
        }}
      >
        <div
          key={data._id}
          className="flex justify-around items-center w-full lg:flex-row flex-col"
        >
          <span className="lg:w-[30vw] lg:max-w-[35vw] w-full lg:text-4xl text-3xl lg:leading-tight mb-8">
            I&apos;m
            <span className="h1 text-primary-yellow lg:text-7xl text-4xl">
              {" "}
              {data.fullName}
            </span>
            <p>{data.headline}</p>
            <div>
              <SmoothScrollButton/>
            </div>
          </span>

          <div
            className="relative rounded-2xl mb-4 lg:w-[50vw] lg:max-w-[60vw] w-full h-[60vh] bg-top "
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
