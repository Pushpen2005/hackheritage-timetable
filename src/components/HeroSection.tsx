import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, QrCode, Users, CheckCircle, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Conflict-Free Scheduling
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Education
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Management</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Automatically generate conflict-free timetables and manage attendance with AI-powered features. 
                Perfect for schools, colleges, and educational institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="hero" size="xl">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Feature preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Auto Timetable</h3>
                  <p className="text-sm text-muted-foreground">
                    AI generates conflict-free schedules in seconds
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant hover:shadow-xl transition-all duration-300 mt-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <QrCode className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">Smart Attendance</h3>
                  <p className="text-sm text-muted-foreground">
                    QR codes, face detection, and NFC support
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant hover:shadow-xl transition-all duration-300 -mt-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-info" />
                  </div>
                  <h3 className="font-semibold text-foreground">Role Dashboards</h3>
                  <p className="text-sm text-muted-foreground">
                    Separate views for admin, faculty, and students
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border shadow-elegant hover:shadow-xl transition-all duration-300 mt-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                    <Bell className="h-6 w-6 text-warning" />
                  </div>
                  <h3 className="font-semibold text-foreground">Smart Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time notifications and attendance tracking
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
