import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsMobile } from "@functional/useIsMobile";
import Button from "@ui/Button";
import JerusalemOfDigital1 from "@university/Jerusalem_Of Digital_1.png";
import JerusalemOfDigital2 from "@university/Jerusalem_Of Digital_2.png";
import VideoPlayer from "../../functional/videoPlayer";
import DashboardBI from "../../functional/dashbord";

function UniversityProjects() {
  const isMobile = useIsMobile();

  return (
    <div
      id=" Projects"
      className="UniversityProjects max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        "
    >
      <h1 className="text-3xl text-left text-white font-bold">My Projects</h1>
      <br />

      <div className="fm-row flex flex-col">
        <div className="fm-col2 flex-1 flex justify-center">
          <div className="fm-col1 flex-1 text-start mt-4">
            <h2 className="mb-1 text-2xl font-bold text-white">
              PanicRest AppWeb For first aid for anxiety attacks
            </h2>
            <h3 className="mb-4 text-lg text-white">April 2024 </h3>
            <h1 className="text-decoration-line: underline">
              {" "}
              <strong>
                <em>Background</em>
              </strong>
            </h1>
            <div className="text-lg mt-2 ">
              pinecRest is a web app designed to provide immediate support and
              guidance to individuals experiencing panic attacks. Our platform
              offers accessible tools and resources to help users manage and
              alleviate the symptoms of panic attacks effectively. Panic attacks
              can strike unexpectedly, leaving individuals feeling overwhelmed
              and powerless. Many people lack access to timely support and
              resources when experiencing these episodes, exacerbating their
              distress and hindering their ability to cope effectively..
              <br />
              <div className="text-mm font-bold mt-4">Key Responsibilities</div>
              <ul style={{ listStyleType: "disc" }} className="ml-8 mt-3">
                <li>
                  Implemented JWT-based user authentication for enhanced data
                  security.
                </li>
                <li className="mt-1.5">
                  Designed intuitive UI for quick access to anxiety-relief
                  resources.
                </li>
                <li className="mt-1.5">
                  Integrated error handling in Express.js for improved
                  reliability.
                </li>
              </ul>
            </div>

            {/* {!isMobile ? ( //desktop
              <div className={`img-desktop max-w-2xl mx-auto mt-9`}>
                <Image
                  src={JerusalemOfDigital1.src}
                  alt="JerusalemOfDigital1"
                  width={5000}
                  height={0}
                  className="w-full h-auto rounded-xl"
                  draggable={false}
                  priority={true}
                />
                <Image
                  src={JerusalemOfDigital2.src}
                  alt="JerusalemOfDigital2"
                  width={5000}
                  height={0}
                  className="w-full h-auto rounded-xl mt-6"
                  draggable={false}
                  priority={true}
                />
              </div>
            ) : (
              //mobile
              <div className={`img-mobile justify-center item-center mt-9`}>
                <Image
                  src={JerusalemOfDigital1.src}
                  alt="JerusalemOfDigital 1 mobile"
                  width={300}
                  height={0}
                  className="w-auto mx-auto mt-9 flex justify-center items-center rounded-xl"
                  draggable={false}
                  priority={true}
                />
                <Image
                  src={JerusalemOfDigital2.src}
                  alt="JerusalemOfDigital 2 mobile"
                  width={300}
                  height={0}
                  className="img-mobile w-auto mx-auto mt-9 flex justify-center items-center rounded-xl"
                  draggable={false}
                  priority={true}
                />
              </div>
            )} */}
            <div className="row mt-6 flex flex-nowrap justify-center">
              <Button
                type="main"
                content="View code"
                onClick={() =>
                  window.open("https://github.com/zoriel135buc/LastProject")
                }
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="fm-row flex flex-col">
        <div className="fm-col1 flex-1 text-start mt-4">
          <h2 className="mb-1 text-2xl font-bold text-white">Herolo Weather</h2>
          <h3 className="mb-4 text-lg text-white">March 2024</h3>
          <h1 className="text-decoration-line: underline">
            {" "}
            <strong>
              {" "}
              <em> </em>{" "}
            </strong>
          </h1>
          <div className="text-lg mt-2">
            <div className="text-mm font-bold mt-4">Key Responsibilities</div>
            <ul style={{ listStyleType: "disc" }} className="ml-8 mt-3">
              <li>
                Application development, both client-side and server-side
                (React, Node.js){" "}
              </li>
              <li className="mt-1.5">Developed responsive UI with React.js.</li>
              <li className="mt-1.5">
                Utilized Fetch API for efficient data fetching.
              </li>
              <li className="mt-1.5">
                Implemented custom styles with Material-UI.
              </li>
            </ul>
          </div>
          <div className="row mt-4 flex flex-wrap justify-left">
            <div className={`button-mobile-wrapper ${isMobile ? "mb-2" : ""}`}>
              <Button
                type="main"
                content="View Code"
                onClick={() =>
                  window.open("https://github.com/zoriel135buc/herolo")
                }
              />
            </div>
            {/* <div className={`mx-2`}></div>
            <div className={`button-mobile-wrapper ${isMobile ? "mb-2" : ""}`}>
              <Button
                type="main"
                content="View The System"
                onClick={() =>
                  window.open("https://dama-client-vercel.vercel.app/inventory")
                }
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="fm-col2 flex-1 flex justify-center mt-9">
        {!isMobile ? ( //desktop
          <div className={`img-desktop max-w-2xl`}>
            <VideoPlayer />
          </div>
        ) : (
          //mobile
          <div className={`img-mobile`}>
            <VideoPlayer />
          </div>
        )}
      </div> */}

      {/* <div className="fm-col1 flex-1 text-start mt-9">
        <h2 className="mb-1 text-2xl font-bold text-white">
          Engineered a BI dashboard for 'Walmart'
        </h2>
        <h3 className="mb-4 text-lg text-white">
          Symmetrical project, developed during 2023
        </h3>
        <h1 className="text-decoration-line: underline">
          {" "}
          <em>Background</em>{" "}
        </h1>
        <div className="text-lg mt-2 ">
          Created a Power BI dashboard to showcase essential strategies aimed at
          improving company efficiency.
          <div className="text-mm font-bold mt-4">Key Responsibilities</div>
          <ul style={{ listStyleType: "disc" }} className="ml-8 mt-3">
            <li>Developed dashboards utilizing SQL and DAX</li>
            <li className="mt-1.5">
              Implemented DRISP-DM methodology and integrated end-to-end ETL
              processes.
            </li>
            <li className="mt-1.5">
              Analyzed company's business needs (Methodically).
            </li>
            <li className="mt-1.5">
              Connected to college server, practicing client-side and
              server-side programming.
            </li>
          </ul>
        </div>
        {!isMobile ? ( //desktop
          <div className={`img-desktop max-w-3xl mx-auto mt-9`}>
            <h2 className="mb-2 text-lg font-bold">Power BI Dashboard</h2>
            <DashboardBI />
          </div>
        ) : (
          //mobile
          <div className={`img-mobile justify-center`}>
            <h2>Power BI Dashboard</h2>
            <DashboardBI />
          </div>
        )}
      </div> */}
    </div>
  );
}

export default withFadeIn(UniversityProjects);
