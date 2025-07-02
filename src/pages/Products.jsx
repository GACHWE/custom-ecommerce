// import React from 'react'
// import Header from '../Layout/Header'
// import Image2 from '/Images/earpod.png';
// import ProductsData from '../components/ProductCard';


// const ProductCard =[
//   {
//     id: 1,
//     img: Image2,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0"
//   },
//   {
//     id: 2,
//     img: Image2,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0"
//   },
//   {
//     id: 3,
//     img: Image2,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0"
//   },
//     {
//     id: 4,
//     img: Image2,
//     title: "Boat Headphone",
//     price: "120",
//     aosDelay: "0"
//   },


// ]
// const Products = () => {
//   return (
//     <div>
//       <div className="container">
//         {/* Header section */}
//         <Header title="Our Products"
//         subtitle={"Explore Our Products"} />
//         {/* Body Section */}
//         <ProductCard data= {ProductsData} />
//       </div>
//     </div>
//   )
// }

// export default Products

import React from 'react';
import Header from '../Layout/Header';
import Image2 from '/Images/earpod.png';
// Assuming ProductCard (the component) is in a different file,
// you would import it like this:
import ProductCard from '../components/ProductCard';
// You are also importing ProductsData from './Category/ProductCard',
// which seems redundant with the local array below.

const productsList = [
  {
    id: 1,
    img: Image2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0"
  },
  {
    id: 2,
    img: Image2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "200"
  },
  {
    id: 3,
    img: Image2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "400"
  },
    {
    id: 4,
    img: Image2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "600"
  },
];

const Products = () => {
  return (
    <div className='mb-10'>
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <Header title="Our Products" subtitle="Explore Our Products" />
        {/* Body Section */}
        <div className='mb-10'>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 place-items-center">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              aosDelay={product.aosDelay}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;