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
      id="Academic Projects"
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
              Data Analyst for the 'Jerusalem Of Digital' project
            </h2>
            <h3 className="mb-4 text-lg text-white">
              June 2022 to October 2023
            </h3>
            <h1 className="text-decoration-line: underline">
              {" "}
              <strong>
                <em>Background</em>
              </strong>
            </h1>
            <div className="text-lg mt-2 ">
              The challenges faced by small traditional businesses in adapting
              to the digital world were exacerbated by the COVID-19 pandemic,
              leading to closures while larger companies seized unexpected
              opportunities. Recognizing this trend, the Jerusalem Municipality
              initiated a project to digitalize small businesses in the city.
              the municipality collaborated with the Department of Industrial
              Engineering and Management at Azrieli College to address past
              failures.
              <br />
              <p>
                Through the "Jerusalem of Digital" initiative, students provided
                personalized support to businesses, including website
                development and marketing strategies, aiming to empower owners
                to operate their online presence independently.
              </p>
              <div className="text-mm font-bold mt-4">Key Responsibilities</div>
              <ul style={{ listStyleType: "disc" }} className="ml-8 mt-3">
                <li>
                  Analyzing revenue and income data to determine project
                  success,aiding in the development of a case study.(Excel)
                </li>
                <li className="mt-1.5">
                  Provided one-on-one mentorship to 15 businesses and Managed
                  website performance tracking through Google Analytics.
                </li>
                <li className="mt-1.5">
                  Led digitization for 120 businesses in Jerusalem via the Wobil
                  development platform
                </li>
                <li className="mt-1.5">
                  {" "}
                  Participation and presentation in project competitions at 'the
                  International Conference on Industrial Engineering in the Era
                  of Digital Systems.
                </li>
              </ul>
            </div>

            {!isMobile ? ( //desktop
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
            )}
            <div className="row mt-6 flex flex-nowrap justify-center">
              <Button
                type="main"
                content="View More"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1zV_xHsKqJx8KmzKhQwPPvoO39vjXbGFr?usp=sharing"
                  )
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
          <h2 className="mb-1 text-2xl font-bold text-white">
            Inventory management system for Lightricks
          </h2>
          <h3 className="mb-4 text-lg text-white">August 2021 to March 2023</h3>
          <h1 className="text-decoration-line: underline">
            {" "}
            <strong>
              {" "}
              <em> Background</em>{" "}
            </strong>
          </h1>
          <div className="text-lg mt-2">
            This project focuses on creating an inventory management system for
            small-medium businesses (SMBs). While large companies already have
            extensive platforms for their needs, SMBs lack the financial
            resources for such solutions. This project aims to address these
            gaps by offering tailor-made solutions for B2B, B2C, and B2G
            business models of small companies. By understanding the distinct
            needs and planning systems of SMBs, this project strives to provide
            an accessible and effective inventory management solution to
            Lightricks company.
            <div className="text-mm font-bold mt-4">Key Responsibilities</div>
            <ul style={{ listStyleType: "disc" }} className="ml-8 mt-3">
              <li>
                Application development, both client-side and server-side
                (React, Node.js){" "}
              </li>
              <li className="mt-1.5">
                Development of an algorithm for inventory management
              </li>
              <li className="mt-1.5">
                Drafting characterization documents and functional reports
                aligned with business requirements.
              </li>
              <li className="mt-1.5">
                Leading a 10-member team in this project{" "}
              </li>
            </ul>
          </div>
          <div className="row mt-4 flex flex-wrap justify-left">
            <div className={`button-mobile-wrapper ${isMobile ? "mb-2" : ""}`}>
              <Button
                type="main"
                content="View Code"
                onClick={() =>
                  window.open("https://.com/davidscali/DAMA-application")
                }
              />
            </div>
            <div className={`mx-2`}></div>
            <div className={`button-mobile-wrapper ${isMobile ? "mb-2" : ""}`}>
              <Button
                type="main"
                content="View The System"
                onClick={() =>
                  window.open("https://dama-client-vercel.vercel.app/inventory")
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fm-col2 flex-1 flex justify-center mt-9">
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
      </div>

      <div className="fm-col1 flex-1 text-start mt-9">
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
      </div>
    </div>
  );
}

export default withFadeIn(UniversityProjects);
