import React, {useState} from 'react'
import MusicPlayer from './MusicPlayer';
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

function Search() {
    const [visible, setVisible] = useState(false)
    const bg = {
        true : {
            left: '-23rem',
        },
         false: {
             left: '-33rem'        }
    }

    const reding = {
        true : {
            left: '8rem',
        },
         false: {
             left: '16rem'        }
    }

    const musician = {
        true : {
            left: '2rem',
        },
         false: {
             left: '6rem'        }
    }


    return (
        <div className = 'search flex relative items-center rounded-b-[5rem] h-[65rem] px-[5rem]  mt-[-15rem] z-[1] bg-[#081730] pb-[18rem] pb-[10rem]'>
            <div className = 'left flex-1'>
            <motion.img 
                variants = {bg }
                transition = {{duration:1, type: 'ease-out'}}
                animate = {`${visible}`}
                 src = {require('../img/backgraphics.png')}
                 alt = '' 
                 className = 'absolute top-[22rem] left-[-47rem]'  />
            
            <motion.img 
                 variants = {musician}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/d1.png')}
                 alt = '' 
                 className = 'absolute top-[26rem] w-[16rem]' />

            <motion.img 
                 variants = {reding}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/d3.png')}
                 alt = ''  
                 className = 'absolute top-[33rem] left-[13rem] w-[9rem]'/>

            <motion.img 
                 variants = {musician}
                 transition = {{duration:1, type: 'ease-out'}}
                 animate = {`${visible}`}
                 src = {require('../img/d4.png')}
                 alt = ''  
                 className = 'absolute top-[50.2rem] left-[3rem] w-[17rem]'/>
            </div>


            <div className = 'right relative flex items-start justify-start flex-1 right-[3rem] flex-col  pt-[9rem] mt-[16rem]'>
               

                  {/*search*/}
                     <div className = 'searchbar flex justify-start w-[100%]'>  
                        <input 
                        type = 'text'
                        placeholder = 'Enter the keyword or URL'
                        className = 'flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'
                         />

                             {/*searchIcon*/}
                            <div className = 'searchIcon flex flex-1 items-center bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem] rounded-xl p-3 ml-4'>
                                <img 
                                 src = {require('../img/search.png')}
                                 alt = '' 
                                 className = 'w-[1.5rem]'  
                                 />
                            </div>
                     </div>

                             {/*content*/}
                            <div className = 'detail flex flex-col mt-5 text-4xl'>
                              <span>  Feel The Eccestricity </span>
                              <span>  <b>Flow With Music</b>  </span>
                              <span className = 'text-sm mt-3 text-[#4D586A]'> 
                                  Amazing grace, how sweet the song, you save a wreck <br/>
                                  like me. I was once lost but <br/>  now i am found
                              </span>
                            </div>

                         {/*MusicPlayer*/}
                         <VisibilitySensor
                          onChange = {(isVisible) => setVisible(isVisible)} >
                             <MusicPlayer/>  
                          </VisibilitySensor>
               
                 </div>    
                 </div>    
                
                  
              
           

            
        
    )
}

export default Search
