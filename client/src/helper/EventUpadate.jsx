import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EventUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    description: "",
    url: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  document.title = "Update Event || ICAI Seattle";

  // ===================================
  // Prefill Data
  // ===================================
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}admin/events/${id}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error("Failed to load event");

        setForm({
          title: data.title,
          location: data.location,
          date: data.date.split("T")[0],
          time: data.time,
          description: data.description,
          url: data.url,
        });

        setPreview(data.image);
      } catch (err) {
        toast.error("Failed to load event");
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: "" });
    } else {
      setErrors({ ...errors, image: "Please select a valid image" });
    }
  };


  const validate = () => {
    let temp = {};
    if (!form.title) temp.title = "Title is required";
    if (!form.location) temp.location = "Location is required";
    if (!form.date) temp.date = "Date is required";
    if (!form.time) temp.time = "Time is required";
    if (!form.description) temp.description = "Description is required";
    if (!form.url) temp.url = "Registration URL is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      if (image) formData.append("image", image);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}admin/events/update/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Update failed");

      toast.success("Event Updated Successfully!");
      navigate("/admindashboard");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in"
        style={{ animation: "fade-in 0.7s cubic-bezier(.4,0,.2,1)" }}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 tracking-tight">
          Update Event
        </h2>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.title ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-purple-400`}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.location ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-purple-400`}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}
          </div>

          {/* Date + Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.date ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-purple-400`}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.time ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-purple-400`}
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.description ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-purple-400`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Event Image</label>

            <div
              className={`flex items-center gap-4 border-2 border-dashed rounded-lg p-4 cursor-pointer ${
                errors.image ? "border-red-400" : "border-gray-300"
              }`}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded-lg shadow-md"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
                  📸
                </div>
              )}

              <span className="text-gray-600 font-medium">
                {image ? image.name : "Click to upload new image"}
              </span>
            </div>

            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          {/* URL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Registration Link</label>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.url ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-purple-400`}
            />
            {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-bold text-lg 
            ${loading ? "bg-gray-400" : "bg-gradient-to-r from-purple-500 to-pink-500"} 
            transition-all`}
        >
          {loading ? "Updating..." : "Update Event"}
        </button>
      </form>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EventUpdate;
