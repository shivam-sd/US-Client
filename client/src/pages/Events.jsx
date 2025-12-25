import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ExternalLink, ChevronRight, Loader2, Clock } from "lucide-react";

// EventCard Component
const EventCard = ({_id, title, date, location, image, onImageClick, timezone = "America/Los_Angeles" }) => {
  // Format date in Seattle timezone
  const formatDateInSeattle = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time in Seattle timezone
  const formatTimeInSeattle = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formattedDate = formatDateInSeattle(date);
  const formattedTime = formatTimeInSeattle(date);

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div 
        className="relative overflow-hidden cursor-pointer" 
        onClick={() => onImageClick(image)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <span className="text-white text-sm font-medium flex items-center gap-1">
            <ExternalLink size={16} /> Click to enlarge
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="font-bold text-xl mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h2>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium block">{formattedDate}</span>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Clock size={14} className="mr-1" />
                <span>{formattedTime} PST</span>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 text-red-600 flex-shrink-0" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>
        
        <Link
          to={`/eventDetails/${_id}`}
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
        >
          View Details
          <ChevronRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

// Image Modal Component
const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
        >
          <span className="text-lg font-semibold">✕ Close</span>
        </button>
        <img 
          src={image} 
          alt="Enlarged view" 
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const Events = () => {
  document.title = "Events || ICAI SEATTLE"

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Get current date in Seattle timezone
  const getSeattleCurrentDate = () => {
    const now = new Date();
    const seattleTime = new Date(now.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles"
    }));
    seattleTime.setHours(0, 0, 0, 0);
    return seattleTime;
  };

  // Function to convert any date to Seattle timezone
  const convertToSeattleDate = (dateString) => {
    const date = new Date(dateString);
    const seattleDate = new Date(date.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles"
    }));
    seattleDate.setHours(0, 0, 0, 0);
    return seattleDate;
  };

  const seattleToday = getSeattleCurrentDate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Filter events based on Seattle timezone
  const upcoming = events.filter((event) => {
    const eventDateInSeattle = convertToSeattleDate(event.date);
    return eventDateInSeattle >= seattleToday;
  });

  const past = events.filter((event) => {
    const eventDateInSeattle = convertToSeattleDate(event.date);
    return eventDateInSeattle < seattleToday;
  });

  // Sort events (convert to Seattle time for comparison)
  upcoming.sort((a, b) => {
    const dateA = convertToSeattleDate(a.date);
    const dateB = convertToSeattleDate(b.date);
    return dateA - dateB;
  });

  past.sort((a, b) => {
    const dateA = convertToSeattleDate(a.date);
    const dateB = convertToSeattleDate(b.date);
    return dateB - dateA;
  });

  // Function to display current Seattle time
  const getCurrentSeattleTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const [currentSeattleTime, setCurrentSeattleTime] = useState(getCurrentSeattleTime());

  useEffect(() => {
    // Update Seattle time every second
    const interval = setInterval(() => {
      setCurrentSeattleTime(getCurrentSeattleTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      
      <ImageModal 
        image={selectedImage} 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-700">Events</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
              Discover upcoming opportunities and relive memorable moments from our past events
            </p>
            
            {/* Seattle Time Display */}
            {/* <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-4">
              <Clock size={16} className="text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                Current Seattle Time: <span className="font-bold">{currentSeattleTime} PST</span>
              </span>
            </div> */}
            
            <p className="text-sm text-gray-500">
              All event times are displayed in Pacific Standard Time (PST)
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600 text-lg font-medium">Loading events...</p>
              <p className="text-sm text-gray-500 mt-2">Using Seattle timezone (PST)</p>
            </div>
          ) : (
            <>
              {upcoming.length > 0 && (
                <section className="mb-16">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="w-3 h-8 bg-blue-600 rounded-full"></span>
                        Upcoming Events
                      </h2>
                      <p className="text-gray-500 text-sm mt-1 ml-5">
                        Events happening today or in the future (Seattle time)
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold self-start sm:self-center">
                      {upcoming.length} Event{upcoming.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcoming.map((event) => (
                      <EventCard 
                        key={event.id || event._id} 
                        {...event} 
                        onImageClick={handleImageClick}
                      />
                    ))}
                  </div>
                </section>
              )}

              {past.length > 0 && (
                <section>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="w-3 h-8 bg-gray-400 rounded-full"></span>
                        Past Events
                      </h2>
                      <p className="text-gray-500 text-sm mt-1 ml-5">
                        Events that have already happened (Seattle time)
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold self-start sm:self-center">
                      {past.length} Event{past.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {past.map((event) => (
                      <EventCard 
                        key={event.id || event._id} 
                        {...event} 
                        onImageClick={handleImageClick}
                      />
                    ))}
                  </div>
                </section>
              )}

              {events.length === 0 && !loading && (
                <div className="text-center py-20">
                  <div className="text-gray-400 mb-6">
                    <Calendar size={64} className="mx-auto opacity-50" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                    No Events Found
                  </h3>
                  <p className="text-gray-500">
                    Check back soon for upcoming events!
                  </p>
                  <div className="mt-4 text-sm text-gray-400">
                    <Clock size={16} className="inline mr-1" />
                    Current Seattle time: {currentSeattleTime}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Events;