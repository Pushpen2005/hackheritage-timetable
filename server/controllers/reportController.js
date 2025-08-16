
import Attendance from "../models/Attendance.js";
import User from "../models/User.js";

export const generateReport = async (req, res) => {
  try {
    // Example: attendance summary by user
    const report = await Attendance.aggregate([
      {
        $group: {
          _id: "$user",
          total: { $sum: 1 },
          present: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } },
        },
      },
    ]);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
