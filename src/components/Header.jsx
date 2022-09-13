import React from 'react'
import CenterMenu from './CenterMenu';

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px]'
    return (

        
        <div className = 'header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>
            <h1 className = 'mr-[7rem]  w-[42px] h-[36px]'>
            <span className = 'h-[65rem] text-white-500 text-[25px] '>
                CE</span>
                <span  className = 'h-[65rem] text-red-500 text-[15px] '>
                MUSIC</span></h1>
            <CenterMenu/>
            
            <div className = 'buttons'>
                <button className = {`mr-[5px] hover:bg-[#232A4E] ` + buttonStyle}> Login </button>
                <button className = {buttonStyle + ` bg-[#232A4E]`}> Exit </button>
            </div>
            
        </div>
    )
}

export default Header
