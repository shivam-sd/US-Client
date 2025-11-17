import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallary = () => {

  document.title = "Gallery || ICAI SEATTLE"

  const EventsCard = [
    {
      // Name: "Real State",
      Img: "/gallery1.jpg",
      title: "ICAI Seattle at Indian American Community Service 2025"
    },
    {
      
      Img: "/image5.jpg",
      title: "Summer picnic and potluck with family 2025"
    },
    {
      // Name: "🌲 ICAI Seattle Chapter – Summer Hike Invitation 🌲",
      Img: "/gallery3.jpg",
      title: " Holiday event 2024"
    },
    {
      Img: "/image6.jpg",
      title: "Summer hike 2024 - On account of 75 years of ICAI"
    },
    {
      // Name: "Networking Events",
      Img: "/gallery2.jpg",
      title: "Chair of ICAI Seattle meeting with ICAI president and Vice President in 2023"
    },
    {
      Img: "/image7.jpg",
      title: "ICAI Seattle chapter inauguration 2023 "
    },
    {
      // Name: "Benifits Of Networking",
      Img: "/gallery4.jpg",
      title: "Holiday event 2023"
    },
  ];
  
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 lg:bg-white md:bg-white bg-gray-100">
          {/* <h1 className="w-full text-2xl text-center font-bold underline">2025 Picture's</h1> */}
        <div className="p-1  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-32 max-w-7xl mx-auto">
          {EventsCard.map((elm, idx) => {
            return (
              <>
              <div>

                <div key={idx} className="lg:w-[480px] md:w-[400px] w-80 rounded-2xl border mt-20">
                  <img
                    src={elm.Img}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                    loading="lazy"
                  />
                  <p className="text-center mt-1 mb-4 text-2xl">{elm.title}</p>
                </div>
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
