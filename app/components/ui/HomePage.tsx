'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Toaster } from 'react-hot-toast';
import { Link as ScrollLink } from 'react-scroll';
import { useIsDesktop } from '../functional/useIsDesktop';
import Biography from '@content/Biography';
import Landing from '@content/Landing';
import Portfolio from '@content/Portfolio';
import CoverLetterMaker from '@projects/CoverLetterMaker';
import CurriculumVitae from '@projects/CurriculumVitae';
import PrimeMinisterOffice from '@/app/components/content/projects/PrimeMinisterOffice';
import TheHebrewAcademy from '../content/projects/TheHebrewAcademy';
import Education from '@projects/Education';
import UniversityProjects from '@projects/UniversityProjects';
import Footer from '@ui/Footer';
import Header from '@ui/Header';
import ScrollToTopButton from '@ui/ScrollToTopButton';
import AboutMe from '../content/projects/AboutMe';
import { Analytics } from '@vercel/analytics/react';


//import FrontendMentor from '@/app/components/content/projects/FrontendMentor';


export default function HomePage() {

    const sections = [
        'Welcome',
        'Experience',
        'Contact Me',
    ];

    const isDesktop = useIsDesktop();

    return (
        <div className="flex-col flex main-page h-full w-screen items-center justify-center">
            <div><Toaster /></div>
            <Header />
            {isDesktop && (
                <div className="scroll-links flex flex-col sticky top-[70px] mr-auto ml-6 z-10">
                    {sections.map((section, index) => (
                        <div className="hover:opacity-80" key={index}>
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-140}
                                spy={true}
                                activeClass="opacity-80"
                            >
                                {section}
                            </ScrollLink>
                        </div>
                    ))}
                </div>
            )}
            <Landing />
            <Biography />
            <Portfolio />
            <PrimeMinisterOffice /> 
            <TheHebrewAcademy />       
            <Education />
            <UniversityProjects />
            <AboutMe/>
            <CurriculumVitae />
            <CoverLetterMaker />
            <Footer />
            <ScrollToTopButton />
            <Analytics />
            {/* <FrontendMentor /> */}
        </div>
    );
}
