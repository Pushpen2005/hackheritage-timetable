import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const API = 'http://localhost:4000/api';

const AdminFeatures: React.FC = () => {

  const [showTimetableModal, setShowTimetableModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState("daily");
  const queryClient = useQueryClient();

  // Dashboard
  const { data: dashboard, isLoading: loadingDashboard } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const res = await fetch(`${API}/dashboard`);
      return res.json();
    }
  });

  // Notifications
  const { data: notifications, isLoading: loadingNotifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await fetch(`${API}/notifications`);
      return (await res.json()).notifications;
    }
  });

  const dismissNotificationMutation = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`${API}/notifications/dismiss`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications'] })
  });

  const dismissNotification = (id: number) => {
    dismissNotificationMutation.mutate(id);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Admin Explore Page Features</h1>
      {/* Dashboard Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingDashboard ? (
            <div>Loading...</div>
          ) : dashboard ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-muted p-4 rounded">
                  <div className="font-semibold">Classes Today</div>
                  <div className="text-2xl">{dashboard.classesToday}</div>
                </div>
                <div className="bg-muted p-4 rounded">
                  <div className="font-semibold">Faculty Present</div>
                  <div className="text-2xl text-green-600">{dashboard.facultyPresent}</div>
                </div>
                <div className="bg-muted p-4 rounded">
                  <div className="font-semibold">Faculty Absent</div>
                  <div className="text-2xl text-red-600">{dashboard.facultyAbsent}</div>
                </div>
                <div className="bg-muted p-4 rounded">
                  <div className="font-semibold">Attendance Rate</div>
                  <div className="text-2xl">{dashboard.attendanceRate}%</div>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-semibold mb-1">Upcoming Classes</div>
                <ul className="list-disc ml-6">
                  {dashboard.upcomingClasses.map((c: any, i: number) => (
                    <li key={i}>{c.time} - {c.course} ({c.room})</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-1">Alerts</div>
                <ul className="list-disc ml-6">
                  {dashboard.alerts.map((a: string, i: number) => (
                    <li key={i} className="text-red-600">{a}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>No data</div>
          )}
        </CardContent>
      </Card>

      {/* Timetable Management */}
      <Card>
        <CardHeader>
          <CardTitle>Timetable Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowTimetableModal(true)} className="mb-2">Create/Edit Timetable</Button>
          <Button variant="outline" className="mb-2">Check Conflicts</Button>
          <Button variant="secondary" className="mb-2">Export as PDF</Button>
          <Button variant="secondary" className="mb-2">Export as Excel</Button>
          <div className="mt-4">
            <Tabs defaultValue="daily">
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily">Daily class schedule (mock)</TabsContent>
              <TabsContent value="weekly">Weekly class schedule (mock)</TabsContent>
              <TabsContent value="monthly">Monthly class schedule (mock)</TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      <Dialog open={showTimetableModal} onOpenChange={setShowTimetableModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create/Edit Timetable</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <input className="border p-2 w-full" placeholder="Course Name" />
            <input className="border p-2 w-full" placeholder="Room" />
            <input className="border p-2 w-full" placeholder="Faculty" />
            <Button variant="default">Save</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTimetableModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Attendance Management */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowAttendanceModal(true)} className="mb-2">Live Attendance View</Button>
          <Button variant="outline" className="mb-2">Manual Adjustments</Button>
          <Button variant="secondary" className="mb-2">Faculty Validation</Button>
          <Button variant="secondary" className="mb-2">Bulk Upload/Correction</Button>
        </CardContent>
      </Card>
      <Dialog open={showAttendanceModal} onOpenChange={setShowAttendanceModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Live Attendance View</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <div>Ongoing Classes: 3</div>
            <div>Students Checked In: 78</div>
            <Button variant="default">Approve Attendance</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAttendanceModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reports & Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Reports & Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <select value={selectedReport} onChange={e => setSelectedReport(e.target.value)} className="border p-2 mb-2">
            <option value="daily">Daily Attendance</option>
            <option value="weekly">Weekly Attendance</option>
            <option value="monthly">Monthly Attendance</option>
            <option value="faculty">Faculty-wise</option>
            <option value="student">Student-wise</option>
          </select>
          <Button variant="secondary" className="mb-2">Download PDF</Button>
          <Button variant="secondary" className="mb-2">Download Excel</Button>
        </CardContent>
      </Card>

      {/* Notifications & Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications & Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingNotifications ? (
            <div>Loading...</div>
          ) : notifications && notifications.length > 0 ? (
            <ul className="list-disc ml-6">
              {notifications.map((n: any) => (
                <li key={n.id} className="flex items-center justify-between mb-2">
                  <span>{n.message}</span>
                  <Button variant="outline" size="sm" onClick={() => dismissNotification(n.id)}>Dismiss</Button>
                </li>
              ))}
            </ul>
          ) : (
            <div>No notifications</div>
          )}
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowUserModal(true)} className="mb-2">Add Faculty</Button>
          <Button variant="outline" className="mb-2">Import Students (CSV/Excel)</Button>
          <Button variant="secondary" className="mb-2">Role Assignments</Button>
        </CardContent>
      </Card>
      <Dialog open={showUserModal} onOpenChange={setShowUserModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Faculty</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <input className="border p-2 w-full" placeholder="Faculty Name" />
            <input className="border p-2 w-full" placeholder="Email" />
            <Button variant="default">Add</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUserModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings & Customization */}
      <Card>
        <CardHeader>
          <CardTitle>Settings & Customization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <label className="font-semibold">Attendance Rule (%): </label>
            <input type="number" className="border p-2 w-20" defaultValue={75} />
          </div>
          <div className="mb-2">
            <label className="font-semibold">Grace Period (min): </label>
            <input type="number" className="border p-2 w-20" defaultValue={10} />
          </div>
          <div className="mb-2">
            <label className="font-semibold">Notification Type: </label>
            <select className="border p-2">
              <option>SMS</option>
              <option>Email</option>
              <option>App</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="font-semibold">Integration: </label>
            <select className="border p-2">
              <option>ERP</option>
              <option>LMS</option>
              <option>Biometric</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminFeatures;
