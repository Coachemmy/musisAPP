import React from 'react'
import Feature from './Feature';

function Experience() {

    return (
        <div className = 'flex flex-col items-center justify-around px-[5rem]  mt-[-10rem] h-[60rem] bg-[#020917] pt-[18rem] relative z-[2] rounded-b-[5rem]'>
            <img src = {require('../img/Path 318.png')}
                 alt = '' 
                 className = 'w-[5rem]'  />

            {/*heading*/}
            <div className = 'headline mt-7 flex flex-col items-center text-[2rem]'> 
                <span> 
                 Super Exclusive App That Will Uplift You Daily</span> 
                <span> 
                    <b>Top Notch Music</b>
                </span>
            </div>

             {/*features*/}
             <div className = 'feature flex items-center justify-around mt-[6rem] w-[100%]'>
                <Feature icon = 'Group 2' title = 'For Naija Gospel Music' /> 
                <Feature icon = 'music icon' title = 'For Naija HipHop Music' /> 
                <Feature icon = 'Group 4' title = 'For Artists'/> 
            </div>
        </div>
    )
}

export default Experience
