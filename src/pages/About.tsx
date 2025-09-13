import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  Users, 
  TrendingUp, 
  FileText, 
  Lock, 
  CheckCircle, 
  Globe,
  Heart,
  Target
} from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Every dollar spent is tracked and made publicly available in real-time with detailed breakdowns."
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "All financial data is verified through multiple sources and secured with blockchain technology."
    },
    {
      icon: Users,
      title: "Public Accountability",
      description: "Citizens have the right to know how their tax dollars are being used to serve the community."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor the effectiveness of public spending through detailed project outcomes and metrics."
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "Real-time Reporting",
      description: "Financial data is updated daily and made available through interactive dashboards."
    },
    {
      icon: Lock,
      title: "Secure & Verified",
      description: "All transactions are cryptographically verified and audited by independent third parties."
    },
    {
      icon: Globe,
      title: "Open Data Standards",
      description: "Data follows international open government standards for maximum compatibility and usability."
    },
    {
      icon: CheckCircle,
      title: "Audit Trail",
      description: "Complete transaction history with immutable records and detailed approval workflows."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TransparentFunds
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Building Trust Through Financial Transparency
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We believe that financial transparency is the cornerstone of good governance. 
          Our platform makes it easy for citizens to understand how public funds are allocated, 
          spent, and managed across all government departments and projects.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="shadow-medium bg-gradient-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-trust-blue-light">
              <Target className="h-8 w-8 text-trust-blue" />
            </div>
          </div>
          <CardTitle className="text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To create a more accountable and trustworthy government by providing citizens 
            with clear, comprehensive, and accessible information about how their tax dollars 
            are being used to improve their communities and quality of life.
          </p>
        </CardContent>
      </Card>

      {/* Core Principles */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Principles</h2>
          <p className="text-muted-foreground mt-2">
            The values that guide everything we do
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust-blue-light">
                      <Icon className="h-6 w-6 text-trust-blue" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How We Ensure Transparency</h2>
          <p className="text-muted-foreground mt-2">
            Advanced technology and rigorous processes that guarantee data integrity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-green-light">
                      <Icon className="h-5 w-5 text-success-green" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Data Sources & Verification */}
      <Card className="shadow-medium">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-success-green-light text-success-green border-success-green/20" variant="outline">
              <Shield className="mr-1 h-3 w-3" />
              Verified Data Sources
            </Badge>
          </div>
          <CardTitle className="text-2xl">Data Sources & Verification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All financial data displayed on this platform comes from official government 
              accounting systems and is verified through multiple independent sources to 
              ensure accuracy and completeness.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg bg-gradient-card">
              <FileText className="h-8 w-8 text-trust-blue mx-auto mb-2" />
              <h4 className="font-semibold">Government Records</h4>
              <p className="text-sm text-muted-foreground">
                Direct integration with official accounting systems
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg bg-gradient-card">
              <CheckCircle className="h-8 w-8 text-success-green mx-auto mb-2" />
              <h4 className="font-semibold">Third-party Audits</h4>
              <p className="text-sm text-muted-foreground">
                Regular verification by independent auditing firms
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg bg-gradient-card">
              <Lock className="h-8 w-8 text-neutral-slate mx-auto mb-2" />
              <h4 className="font-semibold">Blockchain Security</h4>
              <p className="text-sm text-muted-foreground">
                Immutable transaction records with cryptographic proof
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-medium bg-gradient-primary text-white">
        <CardContent className="text-center py-12">
          <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">Join the Transparency Movement</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Help us build a more accountable future by staying informed about how 
            public funds are being used in your community. Together, we can ensure 
            that every dollar serves the public good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Download Open Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;