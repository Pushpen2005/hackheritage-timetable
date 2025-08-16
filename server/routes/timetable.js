
import Timetable from '../models/Timetable.js';

const router = express.Router();

// Get all timetables
router.get('/', async (req, res) => {
  try {
    const timetables = await Timetable.find().populate('createdBy', 'username');
    res.json(timetables);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add timetable
router.post('/', async (req, res) => {
  const { title, slots, createdBy } = req.body;
  if (!title || !slots || !createdBy) return res.status(400).json({ error: 'Missing fields' });
  try {
    const timetable = new Timetable({ title, slots, createdBy });
    await timetable.save();
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete timetable
router.delete('/:id', async (req, res) => {
  try {
    await Timetable.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
