import React , {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

function Feature({icon, title}) {
    const [visible, setVisible] = useState(false)
    const variant = {
        true : {
            transform: 'scale(1)',
        },
         false: {
            transform: 'scale(0.5)'        }
    }

    return (
        <VisibilitySensor
        onChange = {(isVisible) => 
            setVisible(isVisible)}
            //minTopValue= {300}
        >
        <div className = 'feature flex items-center relative justify-center flex-col mx-12'>
            <motion.div 
            variants = {variant}
            transition = {{duration:1, type: 'ease-out'}}
            animate = {`${visible}`}
            className = 'icon bg-[#081730] rounded-2xl p-4'> 
            <img src = {require(`../img/${icon}.png`)}
                 alt = '' 
                 className = 'w-[3rem]'  />
            </motion.div>

            <span className = 'mt-5'> {title}</span>

             <span className = 'text-[#707070] mt-4'> 
                 OBO no go minus, OBO elemi 9+, I can't deny my devotion ooooo
            </span> 

              {/*learn more*/}
            <span className = 'text-[#E600ff] underline mt-[3rem] hover:cursor-pointer'> 
                 Learn More
            </span> 
                
            
        </div>
        </VisibilitySensor>
    )
}

export default Feature
