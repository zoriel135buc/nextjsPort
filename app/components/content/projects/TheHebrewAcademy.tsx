import React from 'react';
import withFadeIn from '@functional/withFadeIn';

function TheHebrewAcademy() {
    return (
        <div id="The Hebrew Language Academy" className="TheHebrewAcademy max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40">
                
            <h1 className="text-3xl text-left text-white font-bold">Business Systems Analyst</h1>
            <h2 className="text-xl text-left text-white font-bold mt-2"> The Hebrew Language Academy</h2>
            <h3 className='text-lg text-left text-white mt-2'> August 2021 - September 2022</h3>
            <br />
            <p className="text-lg text-left"> 
            In my first role, I delved into information systems, from client interactions to server connectivity. I gained foundational knowledge and hands-on experience with analysis tools, honing professional writing and communication skills. Emphasizing teamwork, I collaborated with key stakeholders. </p>           
            <div className="text-mm text-left">
                <div className="text-base font-bold mt-4">
                    Project:
                </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li> Conducted and analyzed A/B tests to improve the Model system </li>
                    <li> Construction and implementation of training courses </li>
                    <li> Comprehensive User Guide Documentation </li>
                </ul>

                <div className="text-base font-bold mt-4">Technologies: </div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li><strong>Excel</strong></li>
                    <li><strong>Microsoft Office</strong></li>
                    <li><strong>Model System</strong></li>
                </ul>

                <div className="text-base font-bold mt-4">Details:</div>
                <ul style={{ listStyleType: 'disc' }} className="ml-6">
                    <li>Enhancing Website User Experience and Conducting Statistical Tests</li>
                    <li>Collaboration with professors to carry out digitization for training courses, managing end-to-end processes.</li>
                    <li>Developing User and System Administrator Manuals, with Log-in Instructions for New Registrants</li>
                </ul>
            </div>
        </div>
    );
}

export default withFadeIn(TheHebrewAcademy);