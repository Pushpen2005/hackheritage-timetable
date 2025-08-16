

import express from "express";
import { createTimetable, getTimetables } from "../controllers/timetableController.js";
const router = express.Router();

router.post("/create", createTimetable);
router.get("/", getTimetables);

export default router;
