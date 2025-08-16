
import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) => {
  const { user, date, method, status } = req.body;
  if (!user || !date || !method || !status) return res.status(400).json({ error: "Missing fields" });
  try {
    const attendance = new Attendance({ user, date, method, status });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().populate("user", "name email");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
