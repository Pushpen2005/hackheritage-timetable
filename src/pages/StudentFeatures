import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";


const API = 'http://localhost:4000/api/student';
const StudentFeatures: React.FC = () => {
  const queryClient = useQueryClient();
  // Dashboard
  const { data: dashboard, isLoading: loadingDashboard } = useQuery({
    queryKey: ['student-dashboard'],
    queryFn: async () => (await fetch(`${API}/dashboard`)).json()
  });
  // Timetable
  const { data: timetable, isLoading: loadingTimetable } = useQuery({
    queryKey: ['student-timetable'],
    queryFn: async () => (await fetch(`${API}/timetable`)).json()
  });
  // Attendance
  const { data: attendance, isLoading: loadingAttendance } = useQuery({
    queryKey: ['student-attendance'],
    queryFn: async () => (await fetch(`${API}/attendance`)).json()
  });
  // Reports
  const { data: reports, isLoading: loadingReports } = useQuery({
    queryKey: ['student-reports'],
    queryFn: async () => (await fetch(`${API}/reports`)).json()
  });
  // Notifications
  const { data: notifications, isLoading: loadingNotifications } = useQuery({
    queryKey: ['student-notifications'],
    queryFn: async () => (await fetch(`${API}/notifications`)).json()
  });
  // Profile
  const { data: profile, isLoading: loadingProfile } = useQuery({
    queryKey: ['student-profile'],
    queryFn: async () => (await fetch(`${API}/profile`)).json()
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: '', notificationPrefs: '', devices: '' });
  const updateProfileMutation = useMutation({
    mutationFn: async (form: any) => {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API}/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form)
      });
      return res.json();
    },
    onSuccess: () => {
      setShowProfileModal(false);
      queryClient.invalidateQueries({ queryKey: ['student-profile'] });
    }
  });
  // Check-in
  const checkinMutation = useMutation({
    mutationFn: async (method: string) => {
      const res = await fetch(`${API}/checkin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method })
      });
      return res.json();
    }
  });

  return (
    <div className="space-y-8">
      {/* Dashboard Overview */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        {loadingDashboard ? <div>Loading...</div> : dashboard && (
          <>
            <div className="mb-2">
              <strong>Today's Schedule:</strong>
              <ul className="list-disc ml-6">
                {dashboard.todaySchedule.map((c: any, i: number) => (
                  <li key={i}>{c.time} - {c.subject} ({c.room}) - {c.faculty}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <strong>Next Class:</strong> {dashboard.nextClass.subject} at {dashboard.nextClass.time} (<span className="text-blue-600">{dashboard.nextClass.countdown}</span>)
            </div>
            <div className="mb-2">
              <strong>Attendance Summary:</strong> {dashboard.attendanceSummary.overall}% overall
              <ul className="list-disc ml-6">
                {dashboard.attendanceSummary.courses.map((c: any, i: number) => (
                  <li key={i}>{c.subject}: {c.percent}%</li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <strong>Alerts:</strong>
              <ul className="list-disc ml-6">
                {dashboard.alerts.map((a: string, i: number) => (
                  <li key={i} className="text-red-600">{a}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </section>
      {/* Timetable Access */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Timetable Access</h2>
        {loadingTimetable ? <div>Loading...</div> : timetable && (
          <>
            <ul className="list-disc ml-6">
              {timetable.timetable.map((d: any, i: number) => (
                <li key={i}><strong>{d.day}:</strong> {d.classes.map((c: any) => `${c.time} - ${c.subject} (${c.room}) [${c.mode}]`).join(', ')}</li>
              ))}
            </ul>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Export as PDF</button>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Export as ICS</button>
          </>
        )}
      </section>
      {/* Attendance Tracking */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
        {loadingAttendance ? <div>Loading...</div> : attendance && (
          <>
            <ul className="list-disc ml-6">
              {attendance.courses.map((c: any, i: number) => (
                <li key={i} className={c.percent >= 75 ? 'text-green-600' : c.percent >= 60 ? 'text-yellow-600' : 'text-red-600'}>{c.subject}: {c.percent}%</li>
              ))}
            </ul>
            <div className="mt-2">
              <strong>Session History:</strong>
              <ul className="list-disc ml-6">
                {attendance.history.map((h: any, i: number) => (
                  <li key={i}>{h.date}: {h.method} - {h.status}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </section>
      {/* Class Check-In */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Class Check-In</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => checkinMutation.mutate('QR')}>QR Code</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded" onClick={() => checkinMutation.mutate('Face')}>Face Detection</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => checkinMutation.mutate('NFC')}>NFC</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => checkinMutation.mutate('BLE')}>BLE</button>
        </div>
        {checkinMutation.isSuccess && (
          <div className="mt-2 text-green-600">{checkinMutation.data.message}</div>
        )}
      </section>
      {/* Reports & Downloads */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Reports & Downloads</h2>
        {loadingReports ? <div>Loading...</div> : reports && (
          <>
            <div>Daily: {reports.report.daily}%</div>
            <div>Weekly: {reports.report.weekly}%</div>
            <div>Monthly: {reports.report.monthly}%</div>
            <div>Defaulter Status: {reports.defaulter ? <span className="text-red-600">Defaulter</span> : <span className="text-green-600">Eligible</span>}</div>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Download PDF</button>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Download Excel</button>
          </>
        )}
      </section>
      {/* Notifications & Announcements */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Notifications & Announcements</h2>
        {loadingNotifications ? <div>Loading...</div> : notifications && (
          <ul className="list-disc ml-6">
            {notifications.notifications.map((n: string, i: number) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        )}
      </section>
      {/* Settings & Profile */}
      <section className="card p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Settings & Profile</h2>
        {loadingProfile ? <div className="flex justify-center items-center"><span className="loader"></span></div> : profile && (
          <>
            <div><strong>Name:</strong> {profile.name}</div>
            <div><strong>Roll No:</strong> {profile.rollNo}</div>
            <div><strong>Department:</strong> {profile.department}</div>
            <div><strong>Year:</strong> {profile.year}</div>
            <div><strong>Notification Preferences:</strong> {profile.notificationPrefs.join(', ')}</div>
            <div><strong>Devices Linked:</strong> {profile.devices.join(', ')}</div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => {
              setProfileForm({
                name: profile.name,
                notificationPrefs: profile.notificationPrefs.join(', '),
                devices: profile.devices.join(', ')
              });
              setShowProfileModal(true);
            }}>Edit Profile</button>
          </>
        )}
        <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <input className="border p-2 w-full" placeholder="Name" value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} />
              <input className="border p-2 w-full" placeholder="Notification Preferences (comma separated)" value={profileForm.notificationPrefs} onChange={e => setProfileForm({ ...profileForm, notificationPrefs: e.target.value })} />
              <input className="border p-2 w-full" placeholder="Devices Linked (comma separated)" value={profileForm.devices} onChange={e => setProfileForm({ ...profileForm, devices: e.target.value })} />
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded" onClick={() => updateProfileMutation.mutate(profileForm)}>Save</button>
            </div>
            <DialogFooter>
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowProfileModal(false)}>Cancel</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default StudentFeatures;
