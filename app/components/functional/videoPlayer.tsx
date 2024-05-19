import React, { useState } from 'react';
import { useIsMobile } from '@functional/useIsMobile';




function VideoPlayer() {
  const isMobile = useIsMobile();

  return (
    <div>
      {!isMobile ? ( //Desktop
      <div>
      <iframe
        title="YouTube video player 1"
        //src="https://vnogecem2sozqdxb.public.blob.vercel-storage.com/VidoePlayerBlog/Inventory_System-fJtQr9ScgWgwtZDvwmT89U519zcN9h.mp4"   
        //src="http://62.90.88.25:8080/home/cohenscalida/public_html/dama_final.mp4"
        //src="http://127.0.0.1:8080/university/Inventory_System.mp4"
        src="https://www.youtube.com/embed/jZhaihT_EAg?si=cRlIgQYhwndb30e6" 
        width="670"
        height="490"
        className='rounded-xl mt-9'
        draggable={false}
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

        <iframe
        title="YouTube video player 2"
        //src="https://vnogecem2sozqdxb.public.blob.vercel-storage.com/VidoePlayerBlog/dama_final-2PVKFHbLhRbi2U0vwkBowBxWkXZGOj.mp4"
        //src= "http://127.0.0.1:8080/university/dama_final_compers.mp4"
        src="https://www.youtube.com/embed/cLcdutMCHuA?si=-iQmNqFb6eWPLaEO"
        width="670"
        height="490"
        className='rounded-xl mt-9'
        draggable={false}
        allow="fullscreen; mute"
      ></iframe>
      </div>

      ):( //Mobile
       <div>
        <iframe
        title="YouTube video player 1 mobile"
        src="https://www.youtube.com/embed/jZhaihT_EAg?si=cRlIgQYhwndb30e6" 
        width="340"
        height="190"
        className='img-mobile mt-9 flex justify-center items-center rounded-xl'
        draggable={false}
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

        <iframe
        title="YouTube video player 2 mobile"
        src="https://www.youtube.com/embed/cLcdutMCHuA?si=-iQmNqFb6eWPLaEO"
        width="340"
        height="190"
        className='img-mobile mt-9 flex justify-center items-center rounded-xl'
        draggable={false}
        allow="fullscreen; mute"
      ></iframe>

      
      </div> 
      )}    
    </div>
  );
}

export default VideoPlayer;


