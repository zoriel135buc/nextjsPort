//import React from 'react';
import React, { useState } from "react";
import Button from "@ui/Button";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsDesktop } from "@functional/useIsDesktop";

function CurriculumVitae() {
  const isDesktop = useIsDesktop();
  //const isMobile = useIsMobile();

  //const [showCV, setShowCV] = useState(false); // If i want to presnt all the cv in the website in need to remove the next part - **
  // const handleCVButtonClick = () => { //-**
  //     setShowCV(!showCV); //-** and remove the funcatin name of setshowcv
  // };

  return (
    <div
      id="Curriculum Vitae"
      className="curriculum-vitae max-w-5xl py-20 border-b select-none border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        "
    >
      <h1 className="text-3xl text-left text-white mb-4 font-bold">
        Curriculum Vitae
      </h1>
      <div className="text-left text-mm mb-4">
        I thought it would be beneficial to demonstrate my skills on the
        curriculum vitae. Teaching myself <strong> React.js </strong>and{" "}
        <strong>Next.js</strong> allowed me to create a tailored CV, enriching
        my abilities while producing a unique showcase of my qualifications and
        experiences. This experience also provided a boost to my sense of
        competence.
      </div>
      <div className="flex flex-wrap justify-center md:justify-start">
        {!isDesktop ? (
          <div className="mt-4">
            {/* <embed src="https://nextjs-cv-main.vercel.app/" style={{ width: '80vw', height: '111.6vh' }} /> its show my cv in the website */}
            <Button
              type="main"
              content="View CV Website"
              onClick={() => window.open("https://nextjs-cv-main.vercel.app/")}
            />
            <div className="mt-3"></div>
            <Button
              type="main"
              content="View Repository"
              onClick={() =>
                window.open("https://github.com/zoriel135buc/nextjsPort")
              }
            />
            <div className="mt-3"></div>
            <Button
              type="main"
              content="My Standard CV - PDF"
              onClick={() => window.open("cv/Zoriel Buchris -cv.pdf", "_blank")}
            />
          </div>
        ) : (
          <>
            <div className="mx-2"></div>
            <Button
              type="main"
              content="View Repository"
              onClick={() =>
                window.open("https://github.com/zoriel135buc/nextjsPort")
              }
            />
            <div className="mr-4"></div>
            <Button
              type="main"
              content="My Standard CV - PDF"
              onClick={() => window.open("cv/Zoriel Buchris -cv.pdf", "_blank")}
            />
          </>
        )}
      </div>
      {/* {!showCV && !isDesktop && (
                <div className="text-left text-md my-4 flex items-center">
                    <Button type="main" content="View CV Website" onClick={() => setShowCV(true)} />
                    <div className="mr-4">Interested in how I made this? Check out the GitHub project!</div>
                    <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/davidscali/nextjs-cv-main')} />
                    <div className="mr-4"></div>
                    <Button type="main" content="My Standard CV - PDF" onClick={() => window.open('cv/David Cohen Scali - CV.pdf', '_blank')} />

                </div>
            )} */}
    </div>
  );
}

export default withFadeIn(CurriculumVitae);

// export default CurriculumVitae;

//MY OLD CODE

// import React from 'react';
// import Button from '@ui/Button';
// import { useMediaQuery } from 'react-responsive';
// import withFadeIn from '@functional/withFadeIn';
// import { useIsDesktop } from '@functional/useIsDesktop';

// function CurriculumVitae() {

//     const isDesktop = useIsDesktop();

//     return (
//         <div id="Curriculum Vitae" className="curriculum-vitae max-w-5xl py-20 border-b select-none border-slate-700
//             mx-6
//             md:mx-20
//             lg:mx-40
//         ">
//             <h1 className="text-3xl text-left text-white mb-4 font-bold">Curriculum Vitae</h1>
//             <div className="text-left text-mm mb-4">
//             I thought it would be beneficial to demonstrate my skills on a resume. Teaching myself React.js and Next.js allowed me to create a tailored CV, enriching my abilities while producing a unique showcase of my qualifications and experiences. This experience also provided a boost to my sense of competence.
//             </div>
//             <div className="flex justify-start">
//                 {isDesktop ? (
//                     <embed src="https://nextjs-cv-main.vercel.app/" style={{ width: '80vw', height: '111.6vh' }} />
//                 ) : (
//                     <>
//                         <Button type="main" content="View CV" onClick={() => window.open('https://nextjs-cv-main.vercel.app/')} />
//                         <div className="mx-2"></div>
//                         <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/davidscali/nextjs-cv-main')} />
//                     </>
//                 )}
//             </div>
//             {isDesktop && (
//                 <div className="text-left text-md my-4 flex items-center">
//                     <div className="mr-4">Interested in how I made this? Check out the GitHub project!</div>
//                     <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/davidscali/nextjs-cv-main')} />
//                     <div className="mr-4"></div>
//                     <Button type="main" content="My Standard CV - PDF" onClick={() => window.open('cv/David Cohen Scali - CV.pdf', '_blank')} />

//                 </div>
//             )}
//         </div>
//     );
// }

// export default withFadeIn(CurriculumVitae);
// // export default CurriculumVitae;
