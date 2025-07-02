// import React from "react";
// import Headphone from "/Images/Adobe.png";

// const BannerData = [
//   {
//     discount: "30% OFF",
//     title: "Fine Smile",
//     date: "10 May - 30 June",
//     image: Headphone,
//     title2: "Air Solo",
//     title3: "Winter Sale",
//     title4: "Lorem Ipsum",
//   },
// ];

// const Banner = () => {
//   return (
//     <div>
//       {BannerData.map((data) => (
//         <div className="min-h-[550px] flex justify-center items-center py-12 px-10">
//           <div className="container rounded-3xl bg-primary">
//             <div className="grid grid-cols-1 gap-6 items-center text-white rounded-lg ">
//               <div>
//                 {/* first col */}
//                 <div className="p-4 sm:p-4">
//                   <p className="text-sm">{data.discount}</p>
//                   <h1 className="uppercase text-4xl lg:text-7xl font-bold">
//                     {data.title}
//                   </h1>
//                   <p className="text-sm">{data.date}</p>
//                 </div>
//                 {/* second col  */}
//                 <div className="h-full flex justify-self-center">
//                   <img
//                     src={data.image}
//                     alt=""
//                     className="scale-125 w-[150px] -translate-y-1/2 md:w-[340px] mx-auto drop-shadow-2l object-cover"
//                   />
//                 </div>
//                 {/* third col  */}
//                 <div className="flex flex-col justify-self-end  my-auto gap-4 p-6 sm:p-8">
//                   <p className="font-bold text-xl">{data.title2}</p>
//                   <p className="text-3xl sm:5xl font-bold">{data.title3}</p>
//                   <p className="text-sm tracking-wide leading-5">{data.title4}</p>
//                   <div>
//                     <button className="bg-black text-white py-2 px-4 rounded">Shop Now</button>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;
import React from 'react'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] fle justify-center items-center py-12'>
      <div className='container bg-primary rounded-3xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white '>
          {/* first col */}
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
            <p className='text-sm'>{data.date}</p>

          </div>
          {/* second col */}
          <div className='h-full flex items-center'>
            <img src={data.image} alt='' className=' w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
          </div>
          {/* third col */}
            <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{data.title2}</p>
              <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
              <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
               <div>
                <button className='bg-white py-2 px-4 rounded-full text-primary'>Shop Now</button>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner