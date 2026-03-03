import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category/Category";
import Category2 from "./pages/Category/Category2";
import Services from "./pages/Services";
import Banner from "./pages/Banner/Banner";
import Headphone from "/Images/Adobe.png";
import Products from "./pages/Products";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

const BannerData = {
  discount: "40% OFF",
  title: "Fine Smile",
  date: "10 May - 30 June",
  image: Headphone,
  title2: "Air Solo",
  title3: "Winter Sale",
  title4: "Lorem Ipsum",
  bgColor: "#f42c37",
};
const App = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Home />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
