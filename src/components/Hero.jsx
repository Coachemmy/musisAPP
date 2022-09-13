import React, {useState} from 'react'
import DownloadAds from './DownloadAds';
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

function Hero() {
    const [visible, setVisible] = useState(false)
    const bg = {
        true : {
            left: '7rem',
        },
         false: {
             left: '19rem'        }
    }

    const musicPlayer = {
        true : {
            left: '25px',
        },
         false: {
             left: '235px'        }
    }

    const rect = {
        true : {
            left: '1rem',
        },
         false: {
             left: '13rem'        }
    }

    const heart = {
        true : {
            left: '9rem',
        },
         false: {
             left: '12.5rem'        }
    }




    return (
        <VisibilitySensor
        onChange = {(isVisible) => 
            setVisible(isVisible)}
            minTopValue= {300}
        >
        <div className = 'wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]' id = 'hero-res'>
            {/*left side*/}
            <div className = 'headings flex flex-col items-start justify-center h-[100%] text-[3rem]'>
                <span> 
                    Feel The Vibes 
                </span> {''}
                <span> 
                    <b>Reignited Music</b>
                </span>
                <span className = 'text-[15px] text-[#525D6E]'> 
                 Amazing grace, how sweet the song, you save a wreck like me  
                 <br/>
                 I was once lost but now i am found
                </span>
                {/* download ads*/}
                <div>
                    <span className = 'text-[13px]'> Download now on ioS and Andriod </span>
                    <DownloadAds/>
                </div>
            </div>
            {/*right side*/}
            <div className = 'images relative w-[50%]'> 
            <motion.img 
                 variants = {bg}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/backgraphics.png')}
                 alt = '' 
                 className = 'absolute top-[-8rem] left-[2rem]'  />
            
            <motion.img 
                 variants = {musicPlayer}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/p 1.png')}
                 alt = '' 
                 className = 'absolute top-[-15rem] left-[13rem] h-[34rem]' />

            <motion.img 
                 variants = {musicPlayer}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/p 2.png')}
                 alt = '' 
                 className = 'absolute left-[235px] top-[94px] w-[175px]' />

            <motion.img 
                 variants = {rect}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/p 3.png')}
                 alt = ''  
                 className = 'absolute top-[12rem] left-[13rem] w-[5rem]'/>

            <motion.img 
                 variants = {heart}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/p 4.png')}
                 alt = ''  
                 className = 'absolute w-[5rem] top-[12rem] left-[12.5rem]'  />
            
            </div>
            
        </div>
        </VisibilitySensor>
    )
}

export default Hero
