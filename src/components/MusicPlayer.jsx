import React from 'react'

function MusicPlayer() {
    return (
        <div className = 'musicplayer flex border-black bg-[#232A4E]  rounded-xl mt-5 border-2 flex-col  px-5 w-[100%] py-3'>
         {/*upper part*/}
            <div className = 'upperPart flex items-center justify-between'>

            
                  {/*profile*/}
                <div className = 'profile flex'>
                <img  src = {require('../img/Mask Group 23.png')} alt = ''  
                className = 'w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full'  
                 />


                    <div className = 'detail flex flex-col ml-4'>
                        <span className = 'text-[1rem]'> Davido </span>
                        <span className = 'text-sm text-gray-500'> Artist </span>
                    </div>

                </div>

                <div className = 'detail flex flex-col ml-4'>
                  <img  src = {require('../img/path.png')} alt = ''  
                  className = ' h-[1rem] '  
                  />  
                    </div>
            
            </div>

              {/*lower part*/}

              <div className = 'lowerPart flex items-center justify-between mt-5'>
              <div className = 'track flex items-center justify-between text-sm text-gray-500 flex-[2]'>

                <span> 2: 30 </span>
                  <img  src = {require('../img/Group 9.png')} alt = ''  
                  className = ' w-[16rem] '  
                  />  

                   <span> 4: 30 </span>
              
              </div>
              
                      
        </div>
            
        </div>
    )
}

export default MusicPlayer
