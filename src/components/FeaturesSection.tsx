import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { 
  Calendar, 
  QrCode, 
  Users, 
  Bell, 
  Brain, 
  Shield, 
  BarChart3, 
  Clock,
  CheckCircle,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scheduling",
      description: "Advanced algorithms consider faculty availability, room capacity, and course requirements to generate optimal timetables.",
      color: "primary"
    },
    {
      icon: QrCode,
      title: "Multiple Attendance Methods",
      description: "QR codes, face detection, BLE geofencing, and NFC support for flexible attendance marking.",
      color: "accent"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Dedicated dashboards for administrators, faculty, and students with appropriate permissions.",
      color: "info"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time alerts for schedule changes, low attendance warnings, and important updates.",
      color: "warning"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive attendance analytics, usage reports, and performance insights.",
      color: "success"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with role-based permissions and data encryption.",
      color: "destructive"
    }
  ];

  const benefits = [
    "Eliminates scheduling conflicts automatically",
    "Reduces administrative workload by 80%",
    "Improves attendance tracking accuracy",
    "Provides real-time insights and analytics",
    "Supports multiple educational institutions",
    "24/7 customer support included"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Smart Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines intelligent scheduling with automated attendance tracking 
            to revolutionize educational institution management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group hover:scale-105">
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Why Choose Acadence?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg">
              Start Your Free Trial
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">System Status: Operational</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Uptime</span>
                    <span className="text-sm font-medium text-foreground">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="text-sm font-medium text-foreground">&lt; 100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <span className="text-sm font-medium text-foreground">50,000+</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Trusted by leading educational institutions worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
