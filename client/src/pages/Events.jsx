import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Loader2,
} from "lucide-react";

/* ===================== EVENT CARD ===================== */
const EventCard = ({ _id, title, date, location, image, onImageClick }) => {

  // ✅ SAFE DATE FORMAT (NO TIMEZONE SHIFT)
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("T")[0].split("-");

    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formattedDate = formatDate(date);

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onImageClick(image)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <span className="text-white text-sm flex items-center gap-1">
            <ExternalLink size={16} /> Click to enlarge
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-700">
          {title}
        </h2>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2 text-blue-600" />
            <span className="text-sm font-medium">{formattedDate}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 text-red-600" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>

        <Link
          to={`/eventDetails/${_id}`}
          className="inline-flex items-center justify-center w-full bg-blue-700 text-white font-semibold px-4 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          View Details
          <ChevronRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

/* ===================== IMAGE MODAL ===================== */
const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt="Preview"
          className="max-h-[80vh] rounded-lg"
        />
      </div>
    </div>
  );
};

/* ===================== EVENTS PAGE ===================== */
const Events = () => {
  document.title = "Events || ICAI SEATTLE";

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  /* ✅ TODAY DATE (STRING) */
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        const data = await res.json();
        setEvents(data || []);
      } catch (err) {
        console.error("Error fetching events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  /* ===================== FILTER LOGIC ===================== */
  const upcoming = events
    .filter((e) => e.date.split("T")[0] >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = events
    .filter((e) => e.date.split("T")[0] < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Header />

      <ImageModal
        image={selectedImage}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-10">
            Our <span className="text-blue-700">Events</span>
          </h1>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
            </div>
          ) : (
            <>
              {/* UPCOMING */}
              {upcoming.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">
                    Upcoming Events
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcoming.map((event) => (
                      <EventCard
                        key={event._id}
                        {...event}
                        onImageClick={handleImageClick}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* PAST */}
              {past.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">
                    Past Events
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {past.map((event) => (
                      <EventCard
                        key={event._id}
                        {...event}
                        onImageClick={handleImageClick}
                      />
                    ))}
                  </div>
                </section>
              )}

              {events.length === 0 && (
                <p className="text-center text-gray-500">
                  No events available
                </p>
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
