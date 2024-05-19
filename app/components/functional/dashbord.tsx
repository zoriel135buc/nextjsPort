import React, { useState } from 'react';
import { useIsMobile } from '@functional/useIsMobile';

function DashboardBI(){
    const isMobile = useIsMobile();

 return( 
        <div>
        {!isMobile ? ( //Desktop

        <div>
        <iframe 
        title="Our Project BI -Walmart for Website" 
        width="750"
        height="450" 
        className='rounded-l mt-3'
        src="https://app.powerbi.com/view?r=eyJrIjoiODRmYjE2NjQtMGE4NC00ZGQ2LTgyOWUtYzU3NWZmOTNmZmU4IiwidCI6ImU1ZjJmMWZiLTJlZjYtNDQ5Yy1hOGIyLTQzN2I2MDkzYjU5NCIsImMiOjl9" 
        //frameborder="0"
        //allowFullScreen="true"
        style={{ border: "2px solid #aaa" }}
        scrolling="no"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy" >
        </iframe>
        </div>
        ):( // Mobile

        <div>
           <iframe 
        title="Our Project BI -Walmart for Website" 
        width="350"
        height="220" 
        className='img-mobile mt-9 flex justify-center items-center rounded-l'
        src="https://app.powerbi.com/view?r=eyJrIjoiODRmYjE2NjQtMGE4NC00ZGQ2LTgyOWUtYzU3NWZmOTNmZmU4IiwidCI6ImU1ZjJmMWZiLTJlZjYtNDQ5Yy1hOGIyLTQzN2I2MDkzYjU5NCIsImMiOjl9" 
        //frameborder="0"
        //allowFullScreen="true"
        style={{ border: "2px solid #aaa" }}
        scrolling="no"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy" >
        </iframe>
        </div>
)}
</div>
)}

export default DashboardBI
