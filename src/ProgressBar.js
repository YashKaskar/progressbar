import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {  
    if(progress < window.innerWidth){
        setTimeout(()=> setProgress(pre => pre += 1), 50)
    }
  },[progress])



  return (
    <>
    <div> 
      <h1> Progress Bar</h1>
    </div>
      <div
      style={{  
          width: `${progress}px`,
          height: '100px',
        backgroundColor:'magenta'
      }}
      
      /> 
      
    </>
  )
}

export default ProgressBar
