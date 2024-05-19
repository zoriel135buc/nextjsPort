import React from 'react';
import withFadeIn from '@functional/withFadeIn';
import PortfolioElement from '@ui/PortfolioElement';

function Portfolio() {
    const experiences = [
        {
            title: 'Prime Minister Office',
            description: 'My first job as a Data Analyst. Here I gained invaluable experience in teamwork and delivering high-quality, data-driven insights for informed decision-making.',
        },
        {
            title: 'The Hebrew Language Academy',
            description: 'My first industry footprint. I learned the mindset of a running business and the importance of thinking outside the box. Also, the significance of cooperation and building relationships with Hebrew professors for digital endeavors. ',
        },
        {
            title: 'Education',
            description: 'Studied Industrial Engineering at Azrieli - College of Engineering. Here I learned the fundamentals about the world of Information Systems and how as an industrial engineering I need to integrating the different disciplines to optimize processes across industrie.',
        },
        {
            title: 'Academic Projects',
            description: 'One of the strengths I acquired here, is reflected in the teamwork across thr various projects and the parquetical tools I used.In addition, my confidence and abilities expanded.',
        },
        {
            title: "More about me",
            description: 'Let me share a bit about myself and what I enjoy doing outside of work!',
        },
    ];

    return (
        <div id='Experience' className="portfolio max-w-5xl select-none py-20 border-b border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-left text-3xl text-white my-4"><strong>My experience</strong></h1>
            {experiences.map((experience, index) => (
                <PortfolioElement sectionId={experience.title} key={index} {...experience} />
            ))}
        </div>
    );
}

export default withFadeIn(Portfolio);