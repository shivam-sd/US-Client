import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  document.title = "Gallery || ICAI SEATTLE";

  const EventsCard = [
    {
      Img: "/gallery1.jpg",
      title: "ICAI Seattle at Indian American Community Service 2025"
    },
    {
      Img: "/image5.jpg",
      title: "Summer picnic and potluck with family 2025"
    },
    {
      Img: "/gallery3.jpg",
      title: "Holiday event 2024"
    },
    {
      Img: "/image6.jpg",
      title: "Summer hike 2024 - On account of 75 years of ICAI"
    },
    {
      Img: "/gallery2.jpg",
      title: "Chair of ICAI Seattle meeting with ICAI president and Vice President in 2023"
    },
    {
      Img: "/image7.jpg",
      title: "ICAI Seattle chapter inauguration 2023"
    },
    {
      Img: "/gallery4.jpg",
      title: "Holiday event 2023"
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 lg:bg-white md:bg-white">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl">

          {/* Page Title */}
          <div className="text-center mb-12 mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Capturing memorable moments from ICAI Seattle events and activities
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-32">

            {EventsCard.map((elm, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >

                {/* IMAGE FIXED SIZE — SQUARE 400px x 400px */}
                <div className="w-full h-[350px] md:h-[400px] overflow-hidden rounded-t-2xl">
                  <img
                    src={elm.Img}
                    alt={elm.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center line-clamp-2 min-h-[3rem]">
                    {elm.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
