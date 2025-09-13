import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FolderOpen, Users, Calendar, DollarSign, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const projects = [
  {
    id: 1,
    name: "School Infrastructure Modernization",
    department: "Education",
    budget: 850000,
    spent: 620000,
    status: "In Progress",
    startDate: "2023-09-01",
    endDate: "2024-06-30",
    vendor: "BuildCorp Solutions",
    completion: 73
  },
  {
    id: 2,
    name: "Community Health Center Expansion",
    department: "Healthcare",
    budget: 1200000,
    spent: 450000,
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2024-12-31",
    vendor: "MedConstruct Inc.",
    completion: 38
  },
  {
    id: 3,
    name: "Highway Bridge Repair Program",
    department: "Infrastructure",
    budget: 2100000,
    spent: 2100000,
    status: "Completed",
    startDate: "2023-03-01",
    endDate: "2023-11-30",
    vendor: "Urban Engineering Ltd.",
    completion: 100
  },
  {
    id: 4,
    name: "Senior Housing Development",
    department: "Social Services",
    budget: 980000,
    spent: 280000,
    status: "Planning",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    vendor: "Community Builders",
    completion: 15
  }
];

const vendors = [
  {
    id: 1,
    name: "BuildCorp Solutions",
    totalContracts: 3,
    totalValue: 1650000,
    activeProjects: 2,
    rating: 4.8,
    lastPayment: "2024-01-10",
    category: "Construction"
  },
  {
    id: 2,
    name: "MedConstruct Inc.",
    totalContracts: 2,
    totalValue: 1800000,
    activeProjects: 1,
    rating: 4.9,
    lastPayment: "2024-01-08",
    category: "Healthcare Construction"
  },
  {
    id: 3,
    name: "Urban Engineering Ltd.",
    totalContracts: 5,
    totalValue: 4200000,
    activeProjects: 0,
    rating: 4.7,
    lastPayment: "2023-12-15",
    category: "Infrastructure"
  },
  {
    id: 4,
    name: "Community Builders",
    totalContracts: 1,
    totalValue: 980000,
    activeProjects: 1,
    rating: 4.6,
    lastPayment: "2024-01-05",
    category: "Residential Development"
  }
];

const Projects = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success-green-light text-success-green border-success-green/20";
      case "In Progress":
        return "bg-trust-blue-light text-trust-blue border-trust-blue/20";
      case "Planning":
        return "bg-warning-amber-light text-warning-amber border-warning-amber/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="mr-1 h-3 w-3" />;
      case "In Progress":
        return <Clock className="mr-1 h-3 w-3" />;
      case "Planning":
        return <AlertTriangle className="mr-1 h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects & Vendors</h1>
          <p className="text-muted-foreground">
            Track project progress and vendor performance across all departments
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search projects or vendors..." className="w-64 pl-10" />
          </div>
          <Button variant="outline">
            Export Data
          </Button>
        </div>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects" className="flex items-center space-x-2">
            <FolderOpen className="h-4 w-4" />
            <span>Projects</span>
          </TabsTrigger>
          <TabsTrigger value="vendors" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Vendors</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          {/* Project Overview Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{projects.length}</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {projects.filter(p => p.status === "In Progress").length}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(projects.reduce((sum, p) => sum + p.budget, 0))}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {projects.filter(p => p.status === "Completed").length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Table */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Comprehensive view of all projects and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.department}</TableCell>
                      <TableCell>{formatCurrency(project.budget)}</TableCell>
                      <TableCell>{formatCurrency(project.spent)}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(project.status)} variant="outline">
                          {getStatusIcon(project.status)}
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${project.completion}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {project.completion}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{project.vendor}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{project.endDate}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-6">
          {/* Vendor Overview Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{vendors.length}</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {vendors.filter(v => v.activeProjects > 0).length}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {vendors.reduce((sum, v) => sum + v.totalContracts, 0)}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contract Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(vendors.reduce((sum, v) => sum + v.totalValue, 0))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vendors Table */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Vendor Performance</CardTitle>
              <CardDescription>
                Overview of vendor relationships and contract performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Total Contracts</TableHead>
                    <TableHead>Contract Value</TableHead>
                    <TableHead>Active Projects</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Last Payment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell className="font-medium">{vendor.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{vendor.category}</Badge>
                      </TableCell>
                      <TableCell>{vendor.totalContracts}</TableCell>
                      <TableCell>{formatCurrency(vendor.totalValue)}</TableCell>
                      <TableCell>{vendor.activeProjects}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">{vendor.rating}</span>
                          <span className="text-xs text-muted-foreground">/5.0</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {vendor.lastPayment}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;