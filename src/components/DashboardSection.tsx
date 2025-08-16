import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  GraduationCap, 
  UserCheck, 
  Calendar,
  BarChart3,
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Role-Based Dashboards
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tailored Experiences for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Every User</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each role gets a personalized dashboard with the tools and information they need most.
          </p>
        </div>

        {/* Dashboard Previews */}
        <div className="space-y-16">
          
          {/* Admin Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Admin Dashboard</h3>
                  <p className="text-muted-foreground">Complete system control and oversight</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Timetable Management</p>
                    <p className="text-sm text-muted-foreground">Create, edit, and manage all institutional schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Analytics & Reports</p>
                    <p className="text-sm text-muted-foreground">Institution-wide attendance and performance metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">User Management</p>
                    <p className="text-sm text-muted-foreground">Add faculty, students, and manage permissions</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Explore Admin Features
              </Button>
            </div>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">System Overview</h4>
                  <Badge variant="secondary">Live Data</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Active Classes</span>
                    </div>
                    <p className="text-2xl font-bold text-primary mt-1">247</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Present Today</span>
                    </div>
                    <p className="text-2xl font-bold text-accent mt-1">89%</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h5 className="text-sm font-medium text-foreground mb-2">Recent Alerts</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <AlertTriangle className="h-3 w-3 text-warning" />
                      <span className="text-muted-foreground">Low attendance in CS-301</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="h-3 w-3 text-success" />
                      <span className="text-muted-foreground">Timetable updated successfully</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Faculty Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">Today's Schedule</h4>
                  <Badge variant="secondary">Wednesday</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg border-l-4 border-success">
                    <div>
                      <p className="font-medium text-foreground">Data Structures</p>
                      <p className="text-sm text-muted-foreground">Room 101 • CS-A</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-success">9:00 AM</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <div>
                      <p className="font-medium text-foreground">Algorithm Design</p>
                      <p className="text-sm text-muted-foreground">Room 205 • CS-B</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">2:00 PM</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Attendance Rate</span>
                    <span className="text-sm font-medium text-foreground">92%</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Faculty Dashboard</h3>
                  <p className="text-muted-foreground">Manage classes and track student progress</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Schedule Overview</p>
                    <p className="text-sm text-muted-foreground">View daily and weekly class schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Attendance Control</p>
                    <p className="text-sm text-muted-foreground">Mark attendance and manage session data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Performance Reports</p>
                    <p className="text-sm text-muted-foreground">Track student attendance patterns and trends</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Explore Faculty Features
              </Button>
            </div>
          </div>

          {/* Student Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-info" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Student Dashboard</h3>
                  <p className="text-muted-foreground">Track attendance and stay informed</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Personal Timetable</p>
                    <p className="text-sm text-muted-foreground">View personalized class schedules and updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Attendance Tracking</p>
                    <p className="text-sm text-muted-foreground">Monitor attendance percentage and get alerts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Quick Check-in</p>
                    <p className="text-sm text-muted-foreground">Scan QR codes or use other methods to mark attendance</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Explore Student Features
              </Button>
            </div>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">My Attendance</h4>
                  <Badge variant="secondary">This Week</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-success/5 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-success">94%</p>
                    <p className="text-sm text-muted-foreground">Overall</p>
                  </div>
                  <div className="bg-warning/5 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-warning">2</p>
                    <p className="text-sm text-muted-foreground">Missed</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h5 className="text-sm font-medium text-foreground mb-2">Upcoming Classes</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Physics Lab</span>
                      <span className="font-medium text-foreground">3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Mathematics</span>
                      <span className="font-medium text-foreground">4:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
