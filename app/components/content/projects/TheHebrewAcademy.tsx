import React from "react";
import withFadeIn from "@functional/withFadeIn";

function TheHebrewAcademy() {
  return (
    <div
      id="Musical Equipment and Amplification Technician"
      className="TheHebrewAcademy max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40"
    >
      <h1 className="text-3xl text-left text-white font-bold">
        Musical Equipment and Amplification Technician
      </h1>
      <h2 className="text-xl text-left text-white font-bold mt-2">
        {" "}
        The Hebrew Language Academy
      </h2>
      <h3 className="text-lg text-left text-white mt-2">
        {" "}
        October 2021 - July 2022
      </h3>
      <br />
      <p className="text-lg text-left">
        My first role as a team manager and the ability to comprehensively
        understand and time management at its best, learning equipment and new
        technologies
      </p>
      <div className="text-mm text-left">
        <div className="text-base font-bold mt-4">Technologies: </div>
        <ul style={{ listStyleType: "disc" }} className="ml-6">
          <li>
            <strong>Cubase</strong>
          </li>
          <li>
            <strong>Microsoft Office</strong>
          </li>
          <li>
            <strong>Model System</strong>
          </li>
        </ul>

        <div className="text-base font-bold mt-4">Details:</div>
        <ul style={{ listStyleType: "disc" }} className="ml-6">
          <li>
            Collaborated closely with cross-functional teams to gather
            requirements, analyze user needs, and implement customized features
            and enhancements.
          </li>
          <li>
            Resulting in a tailored solution that met the specific needs of
            musicians and performers.
          </li>
          <li>
            Spearheaded the development and implementation of a comprehensive
            inventory management system for musical equipment and amplification
            gear.
          </li>
          <li>
            Optimizing workflow efficiency and minimizing downtime for musicians
            and performers.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withFadeIn(TheHebrewAcademy);
