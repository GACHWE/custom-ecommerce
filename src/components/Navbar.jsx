import React from "react";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  }, {
    id: 2,
    name: "Best Selling",
    link: "/#",
  }, {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
]
const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* {Logo and links section} */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              E-shop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black
                  dark:hover:text-white duration-200">
                    Quick Links
                    <span>
                    <FaCaretDown className=" group-hover:rotate-180 duration-300"/>
                  </span>

                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {
                        DropdownLinks.map((data, ) => (
                          <li>
                            <a className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 w-full hover:bg-primary/50 rounded-md font-semibold" 
                            href={data.link}>{data.name}</a>
                          </li>
                        ) )
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* {Search Bar section} */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-2 translate-x-2
              right-3 duration-200"/>
            </div>
            {/* DarkMode section */}
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
