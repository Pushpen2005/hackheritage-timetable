// API utility for frontend to interact with backend
const API_BASE = 'http://localhost:5000/api'; // Change to deployed URL in production

export async function register(username: string, password: string, role: string) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  });
  return res.json();
}

export async function login(username: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export async function getTimetables(token: string) {
  const res = await fetch(`${API_BASE}/timetable`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function addTimetable(title: string, slots: string[], createdBy: string, token: string) {
  const res = await fetch(`${API_BASE}/timetable`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, slots, createdBy })
  });
  return res.json();
}

export async function deleteTimetable(id: string, token: string) {
  const res = await fetch(`${API_BASE}/timetable/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}
