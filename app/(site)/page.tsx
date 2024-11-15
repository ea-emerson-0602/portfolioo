import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { FaGithub, FaTwitter, FaLinkedin, FaTwitch } from "react-icons/fa";
import { IconType } from "react-icons";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import SmoothScrollButton from "./components/ui/SmoothScrollButton";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    twitter: FaTwitter,
    twitch: FaTwitch,
    linkedin: FaLinkedin,
  };

  return profile.map((data) => (
    <main className="mx-auto overflow-x-hidden py-16" key={data._id}>
<section
  id="/"
  className="w-full lg:h-[100vh] lg:flex-row flex-col lg:items-center lg:justify-center lg:px-28 px-8 md:px-16 py-10 hidden lg:flex"
  style={{
    backgroundImage: `url(${data.profileImage.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "0px 10px 20px -10px rgba(0, 0, 0, 0.9), 0px 20px 20px -20px #31333B",
  }}
>
  <div
    key={data._id}
    className="flex lg:justify-around mx-auto items-center w-full lg:flex-row flex-col"
  >
    <span className="lg:w-[30vw] lg:max-w-[35vw] w-full lg:text-4xl text-3xl lg:leading-tight mb-8">
      I&apos;m
      <span className="h1 text-primary-yellow lg:text-7xl text-4xl">
        {" "}
        {data.fullName}
      </span>
      <p>{data.headline}</p>
      <div>
        <SmoothScrollButton />
      </div>
    </span>

    {/* Desktop View */}
    <div
      className="lg:relative rounded-2xl mb-4 lg:w-[50vw] lg:max-w-[60vw] w-full h-[60vh] bg-top hidden lg:block"
      aria-label={data.profileImage.alt}
    >
      <ul className="lg:absolute bottom-4 right-4 flex flex-col items-end gap-y-4">
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

<section
  id="/"
  className="w-full lg:h-[100vh] flex lg:flex-row flex-col lg:items-center lg:justify-center lg:px-28 px-8 md:px-16 py-10 lg:hidden"
  style={{
    backgroundImage: `url(${data.mobileProfileImage.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "0px 10px 20px -10px rgba(0, 0, 0, 0.9), 0px 20px 20px -20px #31333B",
  }}
>
  <div
    key={data._id}
    className="flex lg:justify-around mx-auto items-center w-full lg:flex-row flex-col"
  >
    <span className="lg:w-[30vw] lg:max-w-[35vw] w-full lg:text-4xl text-3xl lg:leading-tight mb-8">
      I&apos;m
      <span className="h1 text-primary-yellow lg:text-7xl text-4xl">
        {" "}
        {data.fullName}
      </span>
      <p>{data.headline}</p>
      <div>
        <SmoothScrollButton />
      </div>
    </span>

    {/* Mobile and Tablet View */}
    <div
      className="rounded-lg mb-4 w-full bg-center block lg:hidden"
      aria-label={data.profileImage.alt}
      style={{
        height: "auto", // Adjust height to fit content
        backgroundSize: "contain", // Resize background image
      }}
    >
      <ul className="flex flex-row items-center gap-x-4">
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
                  className="hover:text-primary-yellow active:text-primary-yellow text-white duration-300"
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
      <section id="projectss">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  ));
}
