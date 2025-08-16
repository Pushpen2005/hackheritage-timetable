
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hackheritage-timetable';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


import authRoutes from './routes/auth.js';
import timetableRoutes from './routes/timetable.js';
import adminRoutes from './routes/admin.js';
import studentRoutes from './routes/student.js';

app.get('/', (req, res) => {
  res.send('HackHeritage Timetable Backend is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
