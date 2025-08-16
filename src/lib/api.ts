// API utility for frontend to interact with backend

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function register(name: string, email: string, password: string, role: string) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });
  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function getTimetables(token: string) {
  const res = await fetch(`${API_BASE}/timetable/`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function addTimetable(title: string, slots: string[], createdBy: string, token: string) {
  const res = await fetch(`${API_BASE}/timetable/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, slots, createdBy })
  });
  return res.json();
}

export async function markAttendance(user: string, date: string, method: string, status: string, token: string) {
  const res = await fetch(`${API_BASE}/attendance/mark`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ user, date, method, status })
  });
  return res.json();
}

export async function getAttendance(token: string) {
  const res = await fetch(`${API_BASE}/attendance/`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function generateReport(token: string) {
  const res = await fetch(`${API_BASE}/report/generate`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}
