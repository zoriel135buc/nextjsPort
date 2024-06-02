import React from "react";
import Image from "next/image";
import { useIsMobile } from "@functional/useIsMobile";
import Button from "@ui/Button";
import Logo from "@logos/mylogo1.png";
import Logophoto from "@logos/myphoto.jpg";

function Landing() {
  const technologies = [
    "React.js",
    "Html & CSS",
    "Node js",
    "SQL",
    "Next.js",
    "JavaScript",
    "Git",
    "Bootstrap",
    "Mui",
  ];

  const landingButtons = [
    {
      type: "main",
      content: "Latest work on GitHub",
      onClick: () => window.open("https://github.com/zoriel135buc", "_blank"),
    },
    {
      type: "main",
      content: "Visit my LinkedIn profile",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/zoriel-bucris-724177273/",
          "_blank"
        ),
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div
      data-testid="Landing"
      id="Welcome"
      className="landing relative select-none py-20 border-b border-slate-700 flex flex-col max-w-5xl mx-6 md:mx-20 lg:mx-40"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={Logo.src}
            alt="mylogo1"
            width={48}
            height={48}
            className="w-12 h-auto rounded-xl opacity-95"
            draggable={false}
          />
          <div className="landing-text mt-4">
            <div className="landing-text-primary text-xl lg:text-3xl text-center md:text-left">
              Welcome to my portfolio, I&apos;m{" "}
              <span className="text-primary font-bold">Zoriel</span>
              <p>Full Stack Developer proficient in React </p>
              <p>JavaScript, specializing in website development</p>
            </div>
            <div className="landing-text-secondary text-lg mt-4 text-md font-normal text-center md:text-left">
              <p>
                With a background in music I bring a unique{" "}
                <span className="text-accent font-semibold"></span>
              </p>
              <p>blend of creativity and out-of-the-box thinking to projects</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <Image
            src={Logophoto.src}
            alt="myphoto"
            width={176}
            height={176}
            className="w-44 h-auto rounded-xl border-4 border-gray-400"
            draggable={false}
          />
        </div>
      </div>

      <div className={`landing-buttons flex max-w-max flex-col mt-8`}>
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
          {landingButtons.map((button, index) => (
            <div key={index} className="mb-4 max-w-fit mr-4">
              <Button
                type={"main"}
                content={button.content}
                onClick={button.onClick}
              />
            </div>
          ))}
        </div>

        <div className="landing-subtitle mt-12 text-mm opacity-80 font-light max-w-full flex flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              {index > 0 && <span className="divider mx-3 opacity-50">/</span>}
              {tech}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
