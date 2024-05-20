import React from "react";
import withFadeIn from "@functional/withFadeIn";
import PortfolioElement from "@ui/PortfolioElement";

function Portfolio() {
  const experiences = [
    {
      title: `Boarding School Guide for At-Risk Youth`,
      description:
        "My position required me to have a spatial vision of the needs of the student in front of me, along with the ability to predict his future path and direct it accordingly. This role required improvisation and problem solving in the field.",
    },
    {
      title: "Musical Equipment and Amplification Technician",
      description:
        "My first role as a team manager and the ability to comprehensively understand and time management at its best, learning equipment and new technologies ",
    },
    {
      title: "Education",
      description:
        "I learned full development at Developers.Institute, a selective and intensive coding bootcamp. Here, I learned the basics of coding and the web, and how, as a full-fledged developer, I need to combine these skills to streamline processes in various industries.",
    },
    {
      title: " Projects",
      description:
        "One of the strengths I acquired here, is reflected in the teamwork across thr various projects and the parquetical tools I used.In addition, my confidence and abilities expanded.",
    },
    {
      title: "More about me",
      description:
        "Let me share a bit about myself and what I enjoy doing outside of work!",
    },
  ];

  return (
    <div
      id="Experience"
      className="portfolio max-w-5xl select-none py-20 border-b border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        "
    >
      <h1 className="text-left text-3xl text-white my-4">
        <strong>My experience</strong>
      </h1>
      {experiences.map((experience, index) => (
        <PortfolioElement
          sectionId={experience.title}
          key={index}
          {...experience}
        />
      ))}
    </div>
  );
}

export default withFadeIn(Portfolio);
