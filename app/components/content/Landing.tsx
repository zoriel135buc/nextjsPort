import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
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
    " Mui",
  ];

  const landingButtons: {
    type: "main";
    content: string;
    onClick?: () => void;
  }[] = [
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
    // {
    //     type: 'main',
    //     content: "Call Me",
    //     onClick: () => window.location.href = 'tel:+393342229699'
    // },
    //{ type: 'main', content: "Read my journey" },
    {
      type: "main",
      content: "Email Me",
      onClick: () => (window.location.href = "mailto:zorielbuc135@gmail.com"),
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div
      data-testid="Landing"
      id="Welcome"
      className="landing relative select-none py-20 border-b border-slate-700 flex flex-col
            max-w-5xl 
            mx-6
            md:mx-20
            lg:mx-40
        "
    >
      {!isMobile ? ( //Desktop
        <div>
          <Image
            src={Logo.src}
            alt="mylogo1"
            width={1000}
            height={0}
            className="absolute w-[3rem] place-self-center -left-[0px] -top-[-30px] h-auto rounded-xl -z-50 opacity-95 ImageClassName"
            draggable={false}
          />

          <Image
            src={Logophoto.src}
            alt="myphoto"
            width={1000}
            height={0}
            className="absolute w-[11rem] place-self-center -right-[10px] -top-[-85px] h-auto rounded-xl -z-50 opacity-100 border-4 border-gray-400 ImageClassName"
            draggable={false}
            // className='border-gray-400'
          />
        </div>
      ) : (
        //Mobilye
        <div>
          <Image
            src={Logo.src}
            alt="my logo"
            width={1000}
            height={0}
            className="absolute w-[3rem] place-self-center -left-[0px] -top-[-30px] h-auto rounded-xl -z-50 opacity-95"
            draggable={false}
          />

          <Image
            src={Logophoto.src}
            alt="my logo photo"
            width={1000}
            height={0}
            className="absolute w-[7rem] place-self-center -right-[-10px] -top-[-380px] h-auto rounded-xl -z-50 opacity-100 border-4 border-gray-400"
            draggable={false}
          />
        </div>
      )}

      <div className="landing-text z-1">
        <div className="landing-text-primary text-xl lg:text-3xl">
          Welcome to my protfolio, I&apos;m{" "}
          <span className="text-primary font-bold"> Zoriel</span>
          <p>Full Stack Developer proficient in React </p>
          <p> JavaScript, specializing in website development</p>
        </div>
        <div className="landing-text-secondary text-lg mt-4 text-md font-normal">
          <p>
            {" "}
            With a background in music I bring a unique{"  "}
            <span className="text-accent font-semibold"></span>
          </p>
          <p> blend of creativity and out-of-the-box thinking to projects </p>
        </div>
      </div>
      <div className={`landing-buttons flex max-w-max flex-col mt-8`}>
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
          <div className="mb-4 max-w-fit mr-4">
            <Link to={"Experience"} smooth={true} duration={750} offset={-100}>
              <Button type="main" content="Read my Experience" />
            </Link>
          </div>
          <div className="mb-4 max-w-fit mr-4">
            <Link
              to={"Curriculum Vitae"}
              smooth={true}
              duration={750}
              offset={-100}
            >
              <Button type="main" content="Read my CV" />
            </Link>
          </div>

          <div></div>
          <div className="landing-button-email whitespace-nowrap w-fit mb-4 py-2 px-4 font-light border border-slate-500 hover:bg-accent hover:text-background ease-in-out duration-200 max-w-fit">
            <a
              draggable="false"
              href="mailto:scali0506@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="landing-subtitle mt-12 text-mm opacity-80 font-light max-w-full flex flex-wrap">
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

// export default withFadeIn(Landing);
export default Landing;
