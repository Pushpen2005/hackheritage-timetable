import express from 'express';
const router = express.Router();

// Dummy student features
router.get('/features', (req, res) => {
  res.json({ features: ['View Timetable', 'Book Slot', 'Notifications'] });
});

export default router;
