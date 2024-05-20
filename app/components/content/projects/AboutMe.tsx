import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsMobile } from "@functional/useIsMobile";
import Button from "@ui/Button";
import CalmDown from "public/aboutme/Kepp_Calm.png";
import TheBest from "public/aboutme/thebest.jpg";
import National from "public/aboutme/National.png";
import Latet from "public/aboutme/Latet.png";

function AboutMe() {
  const isMobile = useIsMobile();

  return (
    <div
      id="More about me"
      className="About me max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        "
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
              Over the last four years, I have volunteered to manage the
              Jerusalem area as part of an amazing project with the 'Latet'
              organization. As part of my volunteering efforts, I participate
              every Passover and Rosh Hashanah, working hand in hand with
              various volunteers to collect food for people from disadvantaged
              populations.
              <p className="mt-4">
                I am continually thrilled to rediscover that there are good
                people who take care of all segments of the population
                regardless of race, religion, or gender.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {!isMobile ? ( //desktop
        <div
          className={`img-desktop max-w-2xl mx-auto mt-9 flex justify-center items-center`}
        >
          <Image
            src={Latet.src}
            alt="Latet"
            width={5000}
            height={0}
            className="w-[500px] h-auto rounded-xl"
            draggable={false}
            priority={true}
          />
        </div>
      ) : (
        //mobile
        <div
          className={`img-mobile max-w-full mx-auto mt-9 flex justify-center items-center`}
        >
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

      <div className="text-xl font-bold mt-4">My passion for running</div>
      <div className="text-lg text-left">
        <ul className="ml-6">
          <li style={{ position: "relative" }}>
            <div className="text-base mt-4">
              <span style={{ position: "absolute", left: "-30px", top: "5px" }}>
                ▶
              </span>
              I'm passionate about transforming data into meaningful insights,
              but when I'm not immersed in numbers, you'll often find me take a
              break and go out to run. Running a few times a week helps me to
              clear my head and recharge.
            </div>
          </li>
        </ul>
      </div>
      {!isMobile ? ( //desktop
        //  justify-center items-center
        <div className={`img-desktop max-w-2xl mx-auto mt-9 flex`}>
          <Image
            src={TheBest.src}
            alt="TheBest"
            width={5000}
            height={0}
            className="w-[500px] h-auto justify-left items-left rounded-xl"
            draggable={false}
            priority={true}
          />
          <Image
            src={CalmDown.src}
            alt="CalmDown"
            width={5000}
            height={0}
            className="w-[200px] h-[333px] absolute top-[875px] right-[250px] rounded-xl mt-4 opacity-100 border-2 border-gray-400"
            draggable={false}
            priority={true}
          />
        </div>
      ) : (
        //mobile
        <div
          className={`img-mobile max-w-full mx-auto mt-9 flex justify-center items-center`}
        >
          <Image
            src={TheBest.src}
            alt="TheBest"
            width={300}
            height={0}
            className="w-[530px] h-auto rounded-xl"
            draggable={false}
            priority={true}
          />
          {/* <Image
                                src={CalmDown.src}
                                alt="CalmDown"
                                width={300}
                                height={0}
                                className='w-auto h-auto rounded-xl mt-6'
                                draggable={false}
                                priority={true}
                            /> */}
        </div>
      )}

      <div className="text-lg text-left">
        <ul className="ml-6">
          <li style={{ position: "relative" }}>
            <div className="text-base ?text-lg mt-8 ">
              <span style={{ position: "absolute", left: "-30px", top: "5px" }}>
                ▶
              </span>
              I have an immense passion for the fascinating intricacies of the
              animal kingdom. Delving into the behaviors of animals - captivate
              me.
            </div>
          </li>
        </ul>
        <ul style={{ listStyleType: "circle" }} className="ml-6 mt-3">
          <li>
            My dream is to utilize cutting-edge data analytics techniques to
            contribute meaningfully to the sustainable coexistence of marine
            life in today's world.
          </li>
        </ul>
        {!isMobile ? ( //desktop
          <div className={`img-desktop max-w-2xl mx-auto mt-10 flex`}>
            <Image
              src={National.src}
              alt="National"
              width={5000}
              height={0}
              className="w-[200px] absolute top-[1330px] right-[250px] rounded-xl mt-8 opacity-100 border-2 border-yellow-400"
              draggable={false}
              priority={true}
            />
          </div>
        ) : (
          //mobile
          <div
            className={`img-mobile max-w-full mx-auto mt-9 flex justify-center items-center`}
          >
            <Image
              src={National.src}
              alt="National"
              width={300}
              height={0}
              className="w-[200px] h-auto rounded-xl  border-4 border-yellow-400"
              draggable={false}
              priority={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default withFadeIn(AboutMe);
