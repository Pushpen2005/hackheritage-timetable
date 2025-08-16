// Seed script for initial data
import mongoose from "mongoose";
import User from "../models/User.js";
import Timetable from "../models/Timetable.js";

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/hh310");
  await User.deleteMany({});
  await Timetable.deleteMany({});
  await User.create([
    { name: "Admin", email: "admin@hh310.com", password: "adminpass", role: "admin" },
    { name: "Student", email: "student@hh310.com", password: "studentpass", role: "student" },
  ]);
  await Timetable.create([
    { title: "Sample Timetable", slots: ["9AM-10AM", "10AM-11AM"], createdBy: null },
  ]);
  console.log("Seeded database");
  process.exit();
};

seed();
