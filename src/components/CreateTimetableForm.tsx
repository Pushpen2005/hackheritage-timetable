import { useState, FC } from 'react';
import { addTimetable } from '../lib/api';

const CreateTimetableForm: FC<{ onCreated?: () => void }> = ({ onCreated }) => {
  const [title, setTitle] = useState('');
  const [slots, setSlots] = useState<string[]>([]);
  const [slotInput, setSlotInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAddSlot = () => {
    if (slotInput.trim()) {
      setSlots([...slots, slotInput.trim()]);
      setSlotInput('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const token = localStorage.getItem('token');
    const createdBy = 'me'; // Replace with actual user ID if available
    if (!token) {
      setError('You must be logged in.');
      return;
    }
    try {
      const res = await addTimetable(title, slots, createdBy, token);
      if (res._id) {
        setSuccess('Timetable created!');
        setTitle('');
        setSlots([]);
        if (onCreated) onCreated();
      } else {
        setError(res.error || 'Failed to create timetable');
      }
    } catch {
      setError('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Create Timetable</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Timetable Title"
        className="mb-2 p-1 border w-full"
      />
      <div className="mb-2">
        <input
          value={slotInput}
          onChange={e => setSlotInput(e.target.value)}
          placeholder="Add Slot"
          className="p-1 border"
        />
        <button type="button" onClick={handleAddSlot} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">Add Slot</button>
      </div>
      <div className="mb-2">
        {slots.map((slot, idx) => (
          <span key={idx} className="inline-block bg-gray-200 px-2 py-1 rounded mr-2 mb-1">{slot}</span>
        ))}
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Create</button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-500 mt-2">{success}</div>}
    </form>
  );
};

export default CreateTimetableForm;
