import { useState } from "react";

import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { Loading } from "../Loading";

interface screenshotButtonProps{
    onScreenshotTook: (screenshot: string | null) => void,
    screenshot: string | null;
}

export function ScreenshotButton({ onScreenshotTook, screenshot } : screenshotButtonProps){
    const [isTakingScreenshot, setTakingScreenshot] = useState(false);
    
     async function handleTakeScreenshot(){
         setTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);

        setTakingScreenshot(false);

    }
    if(screenshot){
        return(
          <button
          type="button"
          className="flex items-end justify-end w-10 h-10 p-1 transition-colors border-transparent rounded-md text-zinc-400 hover:text-zinc-100"
          onClick={() => onScreenshotTook(null)}
          style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: `right bottom`,
            backgroundSize: 180,
        }}>
          
              <Trash weight="fill" />
          </button>
        );
    }


    return (
        <button 
        className="p-2 transition-colors border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleTakeScreenshot}
       type="button">
           { isTakingScreenshot ? <Loading />  : <Camera className="w-6 h-6 text-zinc-100"/>}
           
        </button>
    );
    
}