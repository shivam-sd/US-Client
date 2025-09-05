import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallary = () => {


  const EventsCard = [
    {
      // Name: "Networking Events",
      Img: "/gallery2.jpg",
    },
    {
      // Name: "Real State",
      Img: "/gallery1.jpg",
    },
    {
      // Name: "🌲 ICAI Seattle Chapter – Summer Hike Invitation 🌲",
      Img: "/gallery3.jpg",
    },
    {
      // Name: "Benifits Of Networking",
      Img: "/gallery4.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 lg:bg-white md:bg-white bg-gray-100">
        <div className="p-1 mt-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-32 max-w-7xl mx-auto">
          {EventsCard.map((elm, idx) => {
            return (
              <>
                <div className="lg:w-[480px] md:w-[400px] w-80 rounded-2xl border mt-20">
                  <img
                    src={elm.Img}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <p className="text-center mt-1 mb-4 text-2xl">{elm.Name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
