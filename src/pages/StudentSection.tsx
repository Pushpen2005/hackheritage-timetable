import { useEffect, useState, FC } from 'react';
import { getTimetables } from '../lib/api';

const StudentSection: FC = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchTimetables = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const res = await getTimetables(token);
      setTimetables(res);
    };
    fetchTimetables();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Student Section</h1>
      <p>Welcome to the Student Section. Here you can find resources, updates, and tools for students.</p>
      {timetables.map((tt: any) => (
        <div key={tt._id}>{tt.title}</div>
      ))}
    </div>
  );
};

export default StudentSection;
