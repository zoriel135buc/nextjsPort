import React from 'react';
import withFadeIn from '@functional/withFadeIn';

function Education() {
    
    return (
        <div id="Education" className="education max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white font-bold">Education</h1>
            <br />
            <p className="text-lg text-left"> My educational journey in the field of industrial engineering began at Azrieli College. There I delved into the basics of industry, and learned about the central role of an industrial and management engineer in the Industry 4.0 era. During this period I developed a great interest in information systems, especially in the field of data analysis.Along with my passion for technology and self-learning, I was able to build a solid foundation for my career. </p>
            <div className="text-mm text-left">
                <ul style={{ listStyleType: 'square' }} className="ml-6">
                    <li>
                        <div className="text-lg font-bold mt-4">
                        Azrieli College of Engineering, Jerusalem, Israel
                        </div>
                        <div className="text-lg font-bold mt-4">
                            Degree:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="text-lg ml-6">
                            <li>BSc in <strong>Industrial Engineering & Management</strong></li>
                        </ul>
                        <div className="text-base font-bold mt-4">
                            Time period:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>October 2020 - September 2024</li>
                        </ul>
                        <div className="text-base font-bold mt-4">Projects: </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>Data Analyst for the 'Jerusalem Of Digital' project</li>
                            <li>Built an inventory management system for ‘Lightricks’ company</li>
                            <li>Engineered a BI dashboard using Power BI for 'Walmart'</li>
                            <li>Developed a machine learning algorithm in R</li>
                        </ul>
                        <div className="text-base font-bold mt-4">GPA: 88</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default withFadeIn(Education);