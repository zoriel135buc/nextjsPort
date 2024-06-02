import React from "react";
import Image from "next/image";
import withFadeIn from "@functional/withFadeIn";
import { useIsMobile } from "@functional/useIsMobile";
import Latet from "public/aboutme/Latet.png";
import National from "public/aboutme/National.png";

function AboutMe() {
  const isMobile = useIsMobile();

  return (
    <div
      id="More about me"
      className="About me max-w-5xl py-20 border-b select-none border-slate-700 mx-6 md:mx-20 lg:mx-40"
    >
      <h1 className="text-3xl text-left text-white font-bold">More about me</h1>
      <br />
      <div className="text-xl font-bold mt-4">My Volunteering Journey</div>
      <div className="text-lg text-left">
        <ul className="ml-6">
          <li style={{ position: "relative" }}>
            <div className="text-base mt-4">
              <span style={{ position: "absolute", left: "-30px", top: "5px" }}>
                ▶
              </span>
              During the last two years, I have volunteered with the association
              "Yoga Brothers." As part of my volunteer efforts, I participated
              in retreats for war victims and security personnel throughout the
              year on weekends.
              <p className="mt-4">
                I am constantly excited to rediscover that there are good people
                who take care of all strata of the population, regardless of
                race, religion, or gender.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {!isMobile ? (
        <div className="img-desktop max-w-2xl mx-auto mt-9 flex justify-center items-center">
          <Image
            src={Latet.src}
            alt="Latet"
            width={5000}
            height={0}
            className="w-[400px] h-auto rounded-xl"
            draggable={false}
            priority={true}
          />
        </div>
      ) : (
        <div className="img-mobile max-w-full mx-auto mt-9 flex justify-center items-center">
          <Image
            src={Latet.src}
            alt="Latet"
            width={2000}
            height={0}
            className="w-auto h-auto rounded-xl"
            draggable={false}
            priority={true}
          />
        </div>
      )}

      <div className="text-xl font-bold mt-4">My passion for music</div>
      <div className="text-lg text-left">
        <div
          className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center`}
        >
          <ul className="ml-6 flex-grow">
            <li style={{ position: "relative" }}>
              <div className="text-base mt-4">
                <span
                  style={{ position: "absolute", left: "-30px", top: "5px" }}
                >
                  ▶
                </span>
                I have a great passion for music, which keeps me busy every day.
                This passion stems from my studies and my deep connection to
                music.
              </div>
            </li>
            <li style={{ position: "relative" }}>
              <div className="text-base mt-4">
                <span
                  style={{ position: "absolute", left: "-30px", top: "5px" }}
                >
                  ▶
                </span>
                In my music studies, I learned the importance of being versatile
                and having the ability to persevere and learn effectively. I
                also discovered the value of teamwork and how collaboration can
                lead to creative and innovative results. Additionally, I
                developed strong discipline, attention to detail, and the
                ability to adapt to different styles and genres.
              </div>
            </li>
          </ul>
          <div className="ml-6 mt-4 md:mt-0">
            <Image
              src={National.src}
              alt="National"
              width={300}
              height={0}
              className="w-[700px] h-auto rounded-xl border-4 border-black"
              draggable={false}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withFadeIn(AboutMe);
