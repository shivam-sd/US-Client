import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {

document.title = "Home || ICAI SEATTLE"

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mt-8">
          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[400px] md:h-[450px] lg:h-[750px] mb-5">
            {/* Background Image */}
            <img
              src="/heroImage.jpg"
              alt="ICAI Seattle"
              className="w-full h-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                ICAI Seattle
              </h1>
              {/* <p className="text-2xl md:text-2xl lg:text-4xl mt-2">New York</p> */}
            </div>
          </div>
        </div>

        {/* Second Content */}

        <div className="w-full p-4 flex flex-col lg:flex-row md:flex-row items-center gap-8 shadow-xl mb-16 mt-6">
          {/* Left: Image */}
          <div className="w-full lg:w-1/3 md:w-1/2 h-80 md:h-96 flex items-center justify-center shadow-2xl rounded-2xl">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGsZ6-rucQSWg/profile-displayphoto-shrink_800_800/B4EZT9Nt6oGYAc-/0/1739415019484?e=1759363200&v=beta&t=KOY9sOfr_Uep8X7IEidKgmMiCUdiowu9MPuS01wW3E8"
              alt="ICAI Seattle"
              className="h-full object-contain rounded-2xl"
            />
          </div>

          {/* Right: Text and Buttons */}
          <div className="w-full lg:w-1/1 md:w-1/2 text-black">
            <p className="text-base md:text-lg lg:text-2xl leading-relaxed">
              The ICAI Seattle Chapter of The Institute of Chartered Accountants of India (ICAI) aims to build a network of Chartered Accountants based in the State of Washington.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-6">
              <Link
                to="https://forms.gle/SRFkbeMCTMB7GQoDA" target="_blanck"
                className="bg-violet-700 px-6 py-4 rounded-2xl text-white text-lg font-semibold text-center hover:bg-violet-500 duration-300"
              >
                Become a member of <br /> ICAI Seattle Chapter
              </Link>
              <Link
                to="/events"
                className="bg-blue-700 px-6 py-4 rounded-2xl text-white text-lg font-semibold text-center hover:bg-blue-500 duration-300"
              >
                Know About <br /> Upcoming <br /> Events
              </Link>
            </div>
          </div>
        </div>

        {/* Third Section */}

<div className="w-full px-4 py-6 mb-10">
  {/* Heading */}
 <h4 className="text-center text-xl md:text-4xl lg:text-6xl mb-6 font-bold tracking-tight">
  STRONGER{" "}
  <span className="bg-gradient-to-r from-blue-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
    TOGETHER
  </span>
</h4>


  {/* Image section */}
  <div className="w-full h-72 md:h-96 lg:h-[680px] overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://media.licdn.com/dms/image/v2/D4E22AQGTqlp64x9Vvw/feedshare-shrink_800/B4EZiwMImxHoAg-/0/1755302628467?e=1759363200&v=beta&t=FK18x76zkW_yBtajSnICgxWiwG8vNBJW9BmbWe3hxWA"
      alt="Stronger Together"
      className="lg:w-full md:w-full w-96 h-full lg:object-cover md:object-cover object-contain"
    />
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
