import React from "react";
import withFadeIn from "@functional/withFadeIn";

function Education() {
  return (
    <div
      id="Education"
      className="education max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        "
    >
      <h1 className="text-3xl text-left text-white font-bold">Education</h1>
      <br />
      <p className="text-lg text-left">
        I studied full-stack development at the Developers.Institute, a
        selective and intensive coding bootcamp. Here I learned the basics of
        coding and the Internet, and how, as a full-fledged developer, I need to
        combine these skills to optimize processes in various industries. In
        addition, I studied music for three years at "Mizmor"
      </p>
      <div className="text-mm text-left">
        <ul style={{ listStyleType: "square" }} className="ml-6">
          <li>
            <div className="text-lg font-bold mt-4">
              Developers.Institute Selective & intensive coding BootCamp,Ramat
              Gan,IL
            </div>
            <div className="text-lg font-bold mt-4">
              <li>Mizmor Music School Givat Washington Educational Campus </li>
            </div>
            <div className="text-lg font-bold mt-4">Degree:</div>
            <ul style={{ listStyleType: "disc" }} className="text-lg ml-6">
              <li>
                Diploma <strong>Full Stack Developer BootCamp</strong>
              </li>
              <li>
                Diploma <strong>Producer, processor and music performer</strong>
              </li>
            </ul>
            <div className="text-base font-bold mt-4">Time period:</div>
            <ul style={{ listStyleType: "disc" }} className="ml-6">
              <li>November 2023 - May 2024</li>
              <li>October 2021 - July 2023</li>
            </ul>
            <div className="text-base font-bold mt-4">Projects: </div>
            <ul style={{ listStyleType: "disc" }} className="ml-6">
              <li>PanicRest </li>
              <li>Herolo</li>
            </ul>
            {/* <div className="text-base font-bold mt-4"></div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withFadeIn(Education);
