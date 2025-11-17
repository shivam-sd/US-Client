import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Membership = () => {

document.title = "Membership || ICAI SEATTLE"

  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 rounded-2xl flex flex-col items-center ">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-center mb-10 mt-4">
          ICAI Seattle Membership Plan
        </h1>
        <div className="p-4 border-2 border-black text-center">
          {/* <p className="lg:text-3xl md:3xl text-2xl">Annual membership</p> */}
          {/* <p className="lg:text-6xl md:text-5xl mt-8 text-5xl">$100</p> */}
          {/* <span className="text-lg">Every Year</span> */}
          <p className="lg:text-2xl md:text-2xl mt-8 mb-10">For CAs located in Seattle or the Greater Seattle Area</p>
          <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSeM5GMGdYlcluew3hHgdZmRyHn061yl6W6t16OUApMFJnHyBw/viewform'} target="_blanck" className="p-3 w-40 cursor-pointer bg-blue-800 mt-10 text-3xl text-white rounded">Enrollment Form</Link>

          <p className="border-t-2 mt-8 mb-6">Access to member community, networking events, and more</p>

          <Link to={"/contact"} className="text-lg text-blue-700">Reach out to Director of Membership</Link>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Membership;
