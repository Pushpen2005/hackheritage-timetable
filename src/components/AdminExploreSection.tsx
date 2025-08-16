import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Users, 
  Calendar, 
  BarChart3, 
  Shield, 
  Clock, 
  Database,
  Bell,
  FileText,
  Zap,
  TrendingUp,
  UserCheck,
  BookOpen,
  MapPin
} from "lucide-react";

const AdminExploreSection = () => {
  const adminFeatures = [
    {
      icon: Users,
      title: "User Management",
      description: "Complete control over faculty and student accounts",
      details: [
        "Bulk user registration and import",
        "Role-based access control",
        "Account activation/deactivation",
        "Profile management and verification"
      ]
    },
    {
      icon: Calendar,
      title: "Smart Timetable Generation",
      description: "AI-powered scheduling that optimizes resources",
      details: [
        "Automatic conflict resolution",
        "Resource optimization algorithms",
        "Multi-constraint scheduling",
        "Real-time availability checking"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into institutional performance",
      details: [
        "Attendance trend analysis",
        "Resource utilization reports",
        "Performance metrics dashboard",
        "Predictive analytics"
      ]
    },
    {
      icon: Database,
      title: "System Configuration",
      description: "Customize the platform to your institution's needs",
      details: [
        "Academic year setup",
        "Course and subject management",
        "Classroom and resource allocation",
        "Custom field configuration"
      ]
    }
  ];

  const systemCapabilities = [
    {
      category: "Automation",
      icon: Zap,
      features: [
        "Automated timetable generation",
        "Smart conflict detection",
        "Bulk operations processing",
        "Scheduled report generation"
      ]
    },
    {
      category: "Monitoring",
      icon: TrendingUp,
      features: [
        "Real-time system status",
        "Performance monitoring",
        "Usage analytics",
        "Alert management"
      ]
    },
    {
      category: "Security",
      icon: Shield,
      features: [
        "Role-based permissions",
        "Audit trail logging",
        "Data encryption",
        "Secure authentication"
      ]
    },
    {
      category: "Integration",
      icon: Settings,
      features: [
        "LMS integration",
        "Student information systems",
        "External calendar sync",
        "API access management"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Admin Control Center
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore Admin Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive suite of administrative tools designed to streamline 
            institutional management and optimize educational operations.
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="features">Core Features</TabsTrigger>
            <TabsTrigger value="capabilities">System Capabilities</TabsTrigger>
            <TabsTrigger value="demo">Live Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {adminFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="capabilities" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemCapabilities.map((capability, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary w-fit">
                      <capability.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{capability.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Dashboard Preview */}
              <Card className="lg:col-span-2 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Admin Dashboard Preview
                  </CardTitle>
                  <CardDescription>
                    Real-time system overview and key metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
                      <div className="text-2xl font-bold text-primary">1,247</div>
                      <div className="text-xs text-muted-foreground">Active Students</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10">
                      <div className="text-2xl font-bold text-accent">89</div>
                      <div className="text-xs text-muted-foreground">Faculty Members</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-success/5 to-success/10">
                      <div className="text-2xl font-bold text-success">94.2%</div>
                      <div className="text-xs text-muted-foreground">Avg Attendance</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-warning/5 to-warning/10">
                      <div className="text-2xl font-bold text-warning">156</div>
                      <div className="text-xs text-muted-foreground">Classes Today</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Recent Activities
                    </h4>
                    <div className="space-y-2">
                      {[
                        "New timetable generated for Computer Science Dept.",
                        "Attendance report sent to faculty members",
                        "3 new student registrations approved",
                        "System backup completed successfully"
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm p-3 rounded-lg bg-muted/30">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Common administrative tasks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { icon: Users, text: "Manage Users", variant: "outline" as const },
                    { icon: Calendar, text: "Generate Timetable", variant: "default" as const },
                    { icon: FileText, text: "View Reports", variant: "outline" as const },
                    { icon: Bell, text: "Send Notifications", variant: "outline" as const },
                    { icon: MapPin, text: "Manage Locations", variant: "outline" as const },
                    { icon: BookOpen, text: "Course Setup", variant: "outline" as const }
                  ].map((action, idx) => (
                    <Button
                      key={idx}
                      variant={action.variant}
                      className="w-full justify-start gap-3"
                      size="sm"
                    >
                      <action.icon className="w-4 h-4" />
                      {action.text}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="gap-2">
                <UserCheck className="w-5 h-5" />
                Request Admin Demo Access
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Experience the full power of administrative controls with a personalized demo
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminExploreSection;
