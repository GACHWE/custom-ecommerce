
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '/Images/Adobe.png';
import Image2 from '/Images/earpod.png';
import Image3 from '/Images/Hphone2.png';
// import Button from '../components/Button';

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Earpods",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Sony",
    title: "Wireless",
    title2: "Headphone",
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='container py-20 '>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center relative z-10'>
        <div className='container pb-8 sm:pb-0'>
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id} >
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* Text content section */}
                  <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-2xl font-bold'>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                    <div>
                    </div>
                  </div>
                  {/* Image section */}
                  <div>
                    <img
                      src={data.img}
                      alt={data.title2}
                      className='w-[300px] h-[300px] sm:w-[450px] sm:h-[300px] sm:scale-105 lg:scale-120 object-contain m-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;