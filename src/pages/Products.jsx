
import React from 'react';
import Header from '../Layout/Header';
import Image2 from '/Images/earpod.png';
import Image3 from '/Images/Hphone2.png';
import Image1 from '/Images/Adobe.png';
import ProductCard from '../components/ProductCard';

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
    img: Image3,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "200"
  },
  {
    id: 3,
    img: Image1,
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