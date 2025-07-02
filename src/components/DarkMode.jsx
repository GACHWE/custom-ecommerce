// import React from 'react'
// import darkmode from '/Images/dark.jpg'
// import lightmode from '/Images/light1.jpg'
// const DarkMode = () => {
// const {theme, setTheme} = React.useState
// (localStorage.getItem("theme")?
// localStorage.getItem("theme") : "light"
// );
// const element = document.documentElement;

// React.useEffect(() => {
//   if(theme === "dark"){
//     element.classList.add("dark");
//     localStorage.setItem("theme", "dark")
//   }else{
//     element.classList.remove("dark");
//     localStorage.setItem("theme",
//       "light");
//   }
// }, [theme]);

// const changeTheme = () => {
//   if (theme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// };

//   return (
//   <>
//     <div className='relative'>
//       <img src={darkmode} alt='' onClick={changeTheme} className='w-12 absolute-right-0 z-10 cursor-pointer
//       drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//         transition-all duration-300'/>
//       <img src={lightmode} alt='' onClick={changeTheme} className='w-12 
//             drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//             transition-all duration-300'/>
//     </div>
//     </>)
// };


// import React, { useState, useEffect } from 'react';
// import { Moon, Sun } from 'lucide-react'; // Import icons

// const DarkMode = () => {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') || 'light';
//     }
//     return 'light'; // Default theme
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined'){
//         const element = document.documentElement;
//         if (theme === 'dark') {
//           element.classList.add('dark');
//           localStorage.setItem('theme', 'dark');
//         } else {
//           element.classList.remove('dark');
//           localStorage.setItem('theme', 'light');
//         }
//     }
//   }, [theme]);

//   const changeTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div className='relative'>
//       {theme === 'light' ? (
//         <Moon
//           onClick={changeTheme}
//           className='w-8 h-8  cursor-pointer transition-all duration-300'
          
//         />
//       ) : (
//         <Sun
//           onClick={changeTheme}
//           className='w-8 h-8  cursor-pointer transition-all duration-300'
          
//         />
//       )}
//     </div>
//   );
// };

// export default DarkMode;

import React from 'react'
import { Moon, Sun } from 'lucide-react'; // Import icons

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")
    : "light"
  );

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() =>{
    localStorage.setItem("theme" , theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
    })


  return (
    <div className='relative'>
      <Sun
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={'w-12 cursor-pointer absolute right-0 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300' } />
      <Moon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={'w-12 cursor-pointer' }/>
       
    </div>
    
  )
}

export default DarkMode