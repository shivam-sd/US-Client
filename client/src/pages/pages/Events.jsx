import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Event Card
const EventCard = ({ event, onImageClick }) => {
  const { _id, title, date, location, image } = event;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => onImageClick(image)}
      />

      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {formattedDate} | {location}
        </p>

        <Link
          to={`/eventDetails/${_id}`}
          className="inline-block bg-blue-700 mt-4 w-full text-white text-lg px-4 py-2 rounded hover:bg-blue-600 duration-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

// Main Component
const Events = () => {
  document.title = "Events || ICAI SEATTLE";

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // ⭐ useState for modal

  const today = new Date();

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/fetch`
        );
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcoming = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const past = events
    .filter((e) => new Date(e.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />

      {loading ? (
        <div className="text-center text-3xl mt-6 font-bold">Loading...</div>
      ) : (
        <div className="bg-gray-50 py-10 px-4 max-w-6xl mx-auto">

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <section className="mb-12">
              <h1 className="text-3xl font-bold mb-6 border-b pb-2">
                Upcoming Events
              </h1>

              <div className="grid md:grid-cols-3 gap-6">
                {upcoming.map((event) => (
                  <EventCard
                    key={event._id}
                    event={event}
                    onImageClick={setSelectedImage}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Past */}
          {past.length > 0 && (
            <section>
              <h1 className="text-3xl font-bold mb-6 border-b pb-2">
                Past Events
              </h1>

              <div className="grid md:grid-cols-3 gap-6">
                {past.map((event) => (
                  <EventCard
                    key={event._id}
                    event={event}
                    onImageClick={setSelectedImage}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* ⭐ FULLSCREEN MODAL USING useState */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-red-600 px-3 py-1 rounded-full text-lg"
            >
              ✖
            </button>

            {/* Image Preview */}
            <img
              src={selectedImage}
              className="w-full max-h-[90vh] object-contain rounded-lg"
              alt="Preview"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Events;
