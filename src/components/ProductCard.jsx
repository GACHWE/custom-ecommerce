// import React from 'react'

// const ProductCard = ({data}) => {
//   return (
//     <div>
//       <div>
//         {/* card section */}
//         {data.map((data) => (
//           <div>
//             <div>
//             <img src={data.img} alt='' />
//             </div>
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProductCard
import React from 'react';

const ProductCard = ({ img, title, price, aosDelay }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 dark:bg-gray-700 dark:text-white"
      data-aos="fade-up" // Assuming AOS is set up for animations
      data-aos-delay={aosDelay}
    >
      <img src={img} alt={title} className="w-[260px] h-[180px] " />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-800 font-bold dark:text-gray-200">Price: ${price}</p>
        {/* You can add more product details or a button here if needed */}
      </div>
    </div>
  );
};

export default ProductCard;

