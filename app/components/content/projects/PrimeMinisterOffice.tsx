import React from "react";
import withFadeIn from "@functional/withFadeIn";

function PrimeMinisterOffice() {
  return (
    <div
      id="Boarding School Guide for At-Risk Youth"
      className="Prime-Minister max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40"
    >
      <h1 className="text-3xl text-left text-white font-bold">FullStack</h1>
      <h2 className="text-xl text-left text-white font-bold mt-2">
        {" "}
        Boarding School Guide for At-Risk Youth
      </h2>
      <h3 className="text-lg text-left text-white mt-2">From October 2024</h3>
      <br />
      <p className="text-lg text-left">
        {" "}
        My position required me to have a spatial vision of the needs of the
        student in front of me, along with the ability to predict his future
        path and direct it accordingly. This role required improvisation and
        problem solving in the field.
      </p>
      <div className="text-mm text-left">
        <div className="text-base font-bold mt-4">Details:</div>
        <ul style={{ listStyleType: "disc" }} className="ml-6">
          <li>
            Collaborated closely with counselors, educators, and social workers
            to gather requirements and identify key features needed to support
            the academic, emotional, and social well-being of at-risk youth.
          </li>
          <li>
            Resulting in a tailored solution that addressed their unique needs
            and challenges.
          </li>
          <li>
            Demonstrated empathy, patience, and understanding in working with
            students facing personal difficulties.
          </li>
          <li>
            Providing guidance, encouragement, and resources to help them
            overcome obstacles and achieve their goals.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withFadeIn(PrimeMinisterOffice);
