import React from 'react'
import DownloadAds from './DownloadAds';

function Download() {
    return (
        <div className = 'flex flex-col items-center pt-[18rem] justify-center h-[48rem] text-[3rem] mt-[-15rem] bg-[#020917] rounded-b-[5rem] relative z-[0]'>
            
            <div className = 'heading flex-col items-center flex mt-17 text-[2rem]'>
                <span> 
                    Download The Best Music </span> 
                <span> 
                    <b>App Now!</b>
                </span>
                <span className = 'text-[1rem] text-gray-400 text-center px-[15rem]'> 
                 Enter the world of ambience, with some cool and vibe music.
                 From your best app. Download rightaway and don't miss out
                </span>
                {/* download ads*/}
                <div className = 'mt-14'>
                        <DownloadAds/>
                </div>
            </div>
       
            
        </div>
    )
}

export default Download
