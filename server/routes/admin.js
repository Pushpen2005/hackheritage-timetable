import express from 'express';
const router = express.Router();

// Dummy admin features
router.get('/features', (req, res) => {
  res.json({ features: ['Manage Timetables', 'View Students', 'Analytics'] });
});

export default router;
