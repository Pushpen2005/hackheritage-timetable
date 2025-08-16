import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  method: String,
  status: String,
});

export default mongoose.model("Attendance", attendanceSchema);
