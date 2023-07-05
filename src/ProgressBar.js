// import React, { useState, useEffect } from 'react';

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       // Increment the progress by 1
//       setProgress((prevProgress) => prevProgress + 1);

//       // Check if progress reaches the width of the page
//       if (progress >= window.innerWidth) {
//         clearInterval(timer); // Stop the timer
//       }
//     }, 1000);

//     return () => {
//       clearInterval(timer); // Cleanup function to stop the timer when component unmounts
//     };
//   }, [progress]);

//   return (
//     <>
//       <div> <h1> Progress Bar </h1> </div>
// <div
//   style={{
//     width: `${progress}px`,
//     height: '10px',
//     backgroundColor: 'blue',

//   }}
// >
// </div>

//     </>
    
//   );
// };

// export default ProgressBar;



