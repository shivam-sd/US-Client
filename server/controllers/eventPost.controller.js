const cloudinary = require("cloudinary").v2;
const eventModel = require("../models/EventPost.model");

// Allowed image formats
const allowedFormats = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/webp",
  "image/svg+xml",
  "image/gif",
  "image/bmp",
  "image/heic",
  "image/avif"
];

// CREATE EVENT
const eventPostController = async (req, res) => {
  try {
    const { title, description, date, time, location, url } = req.body;

    let imageUrl = null;

    // Check if image file exists
    if (req.files?.image) {
      const file = req.files.image;

      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Allowed formats: JPG, PNG, WEBP, SVG, GIF, BMP, HEIC, AVIF",
        });
      }

      const result = await cloudinary.uploader.upload(file.tempFilePath);
      imageUrl = result.secure_url;
    }

    const newEvent = new eventModel({
      title,
      description,
      date,
      time,
      location,
      url,
      image: imageUrl,
    });

    await newEvent.save();

    res.status(201).json({
      message: "Event created successfully",
      event: newEvent,
    });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// GET ALL EVENTS
const fetchAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// DELETE EVENT
const eventDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await eventModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// GET EVENT BY ID
const GetEventsByIDController = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// UPDATE EVENT
const updateEventController = async (req, res) => {
  try {
    const eventId = req.params.id;

    let updatedData = req.body;

    const existingEvent = await eventModel.findById(eventId);
    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Handle new image upload if provided
    if (req.files?.image) {
      const file = req.files.image;

      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          message: "Invalid file format. Allowed: JPG, PNG, WEBP, SVG, GIF, BMP, HEIC, AVIF",
        });
      }

      const uploaded = await cloudinary.uploader.upload(file.tempFilePath);
      updatedData.image = uploaded.secure_url;
    }

    const updatedEvent = await eventModel.findByIdAndUpdate(eventId, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Event updated successfully",
      event: updatedEvent,
    });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


module.exports = {
  eventPostController,
  fetchAllEvents,
  eventDeleteController,
  GetEventsByIDController,
  updateEventController
};
