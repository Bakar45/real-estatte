import React, { useState } from "react";
import {Link} from "react-router-dom"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-500 ">
      <div
        className={`p-4 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } absolute opacity-90 z-20 w-3/5 left-0 bg-[#99d5d3]  h-screen`}
      >
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="">
            <svg class="h-12" alt="logo" viewBox="0 0 10240 10240"></svg>
          </a>
          <button class="navbar-close" onClick={toggleMenu}>
            <svg
              class="h-6 w-6 text-white cursor-pointer hover:text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        {/* Add your mobile menu content here */}
      </div>

      {/* .................. NavBar...................... */}
      <div>
        <nav className=" relative sm:px-4 md:px-4 lg:px-24 py-3 flex justify-between items-center bg-white shadow-md">
       <Link to="/">
          <div  className="text-3xl font-bold leading-none flex flex-row" href="#"  >
            <h1 className="text-sm sm:text-xl">
              <span className="text-green-400">Real</span>
              <span className="text-slate-500">Estate</span>
            </h1>
          </div>
          </Link>

          {/* .............Toggle button......... */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-[#99d5d3] p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {/* ..... middle  search bar.. */}
          <ul
            className={` hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
              isMenuOpen ? "" : ""
            }`}
          >
            <div className="  InputContainer flex items-center justify-center bg-white rounded-lg overflow-hidden cursor-pointer shadow-md pl-4">
              <span className="">
                <input
                  type="text"
                  name="text"
                  className="input w-60 h-full border-none outline-none text-sm caret-red"
                  id="input"
                  placeholder="Search here . . . . ."
                />
                <button className="micButton p-2 border-none h-full cursor-pointer bg-green-300 transition duration-300 hover:bg-yellow-400">
                  <svg viewBox="0 0 512 512" className="searchIcon w-4">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>{" "}
                  </svg>
                </button>
              </span>
            </div>
          </ul>

          {/* ........end ul ... */}
          <ul className="flex gap-4 ">
            <li>Contact Us</li>
           <Link to="/about"> <li>About Us</li></Link> 
          <Link to="/sign-in"><li>Sign In</li> </Link>  
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
