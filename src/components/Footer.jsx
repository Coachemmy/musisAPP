import React from 'react'
import CenterMenu from './CenterMenu';

function Footer() {
    return (
        <div className = 'footer flex flex-col items-center pt-[18rem] justify-start h-[25rem] mt-[-10rem] bg-[#081730] relative z-[-1]'>
            <CenterMenu/>
        

        <div className = 'details'>

            <span className = 'text-[1rem] text-gray-400 text-center mt-4 mr-[3rem] px-[7rem] '> 
            Copyright © 2022 | All Rights Reserved | CoachEmmy Music </span>

        </div>

        </div>
      )
}

export default Footer
