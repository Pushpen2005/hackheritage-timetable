
import Timetable from "../models/Timetable.js";

export const createTimetable = async (req, res) => {
  const { title, slots, createdBy } = req.body;
  if (!title || !slots || !createdBy) return res.status(400).json({ error: "Missing fields" });
  try {
    const timetable = new Timetable({ title, slots, createdBy });
    await timetable.save();
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find().populate("createdBy", "name email");
    res.json(timetables);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
