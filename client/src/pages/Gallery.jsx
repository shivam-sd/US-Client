import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  document.title = "Gallery || ICAI SEATTLE";

  const EventsCard = [
    {
      Img: "/gallery1.jpg",
      title: "ICAI Seattle at Indian American Community Service 2025",
      date: "2025"
    },
    {
      Img: "/image5.jpg",
      title: "Summer picnic and potluck with family 2025",
      date: "2025"
    },
    {
      Img: "/gallery3.jpg",
      title: "Holiday event 2024",
      date: "2024"
    },
    {
      Img: "/image6.jpg",
      title: "Summer hike 2024 - On account of 75 years of ICAI",
      date: "2024"
    },
    {
      Img: "/gallery2.jpg",
      title: "Chair of ICAI Seattle meeting with ICAI president and Vice President in 2023",
      date: "2023"
    },
    {
      Img: "/image7.jpg",
      title: "ICAI Seattle chapter inauguration 2023",
      date: "2023"
    },
    {
      Img: "/gallery4.jpg",
      title: "Holiday event 2023",
      date: "2023"
    },
  ];

  // Group events by year
  const groupedEvents = EventsCard.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  const years = Object.keys(groupedEvents).sort((a, b) => b - a);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Capturing memorable moments and events from ICAI Seattle Chapter
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            {years.map((year) => (
              <div key={year} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                    {year} Events
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {groupedEvents[year].map((event, idx) => (
                    <div 
                      key={idx} 
                      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {/* Image Container with Fixed Aspect Ratio */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={event.Img}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          alt={event.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x300?text=ICAI+Seattle";
                          }}
                        />
                        
                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {event.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                          {event.title}
                        </h3>
                        
                        {/* View Button */}
                        <button
                          className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                          onClick={() => window.open(event.Img, '_blank')}
                        >
                          View Full Image
                          <span className="ml-2">→</span>
                        </button>
                      </div>
                    </div>
                  ))}
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