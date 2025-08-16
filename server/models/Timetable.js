import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slots: [{ type: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Timetable', timetableSchema);
