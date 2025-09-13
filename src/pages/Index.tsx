import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Building, 
  ArrowUpRight, 
  PieChart,
  BarChart3,
  Shield
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { Link } from "react-router-dom";

const budgetData = [
  { name: 'Infrastructure', value: 4500000, color: '#3b82f6' },
  { name: 'Healthcare', value: 3200000, color: '#10b981' },
  { name: 'Education', value: 2500000, color: '#f59e0b' },
  { name: 'Public Safety', value: 2100000, color: '#ef4444' },
  { name: 'Social Services', value: 1800000, color: '#8b5cf6' },
];

const monthlySpending = [
  { month: 'Jan', spending: 1200000, budget: 1400000 },
  { month: 'Feb', spending: 1350000, budget: 1400000 },
  { month: 'Mar', spending: 1180000, budget: 1400000 },
  { month: 'Apr', spending: 1420000, budget: 1400000 },
  { month: 'May', spending: 1290000, budget: 1400000 },
  { month: 'Jun', spending: 1380000, budget: 1400000 },
];

const projectProgress = [
  { name: 'School Modernization', progress: 73, budget: 850000 },
  { name: 'Health Center Expansion', progress: 38, budget: 1200000 },
  { name: 'Bridge Repair', progress: 100, budget: 2100000 },
  { name: 'Senior Housing', progress: 15, budget: 980000 },
];

const Index = () => {
  const totalBudget = budgetData.reduce((sum, item) => sum + item.value, 0);
  const totalSpent = 9850000;
  const remainingBudget = totalBudget - totalSpent;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge className="bg-trust-blue-light text-trust-blue border-trust-blue/20" variant="outline">
          <Shield className="mr-1 h-3 w-3" />
          Live Financial Data
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Financial Transparency Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Track how public funds are allocated, spent, and managed across all departments 
          and projects in real-time with complete transparency and accountability.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBudget)}</div>
            <p className="text-xs text-muted-foreground">
              Fiscal Year 2024
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funds Allocated</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalSpent)}</div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of total budget
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining Budget</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(remainingBudget)}</div>
            <p className="text-xs text-muted-foreground">
              Available for allocation
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Across 5 departments
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Budget Allocation Pie Chart */}
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Budget Allocation by Department</span>
                </CardTitle>
                <CardDescription>
                  How funds are distributed across different departments
                </CardDescription>
              </div>
              <Link to="/departments">
                <Button variant="outline" size="sm">
                  View Details
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={budgetData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), 'Budget']}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Spending Trend */}
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Monthly Spending vs Budget</span>
                </CardTitle>
                <CardDescription>
                  Track spending patterns throughout the year
                </CardDescription>
              </div>
              <Badge className="bg-success-green-light text-success-green border-success-green/20" variant="outline">
                On Track
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySpending}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => formatCurrency(value).replace('$', '$')} />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      formatCurrency(value), 
                      name === 'spending' ? 'Actual Spending' : 'Budget'
                    ]}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="budget" 
                    stroke="#e5e7eb" 
                    strokeDasharray="5 5"
                    name="Budget"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="spending" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Actual Spending"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Progress */}
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Major Projects Progress</CardTitle>
              <CardDescription>
                Current status of key infrastructure and development projects
              </CardDescription>
            </div>
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {projectProgress.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-card">
                <div className="flex-1">
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Budget: {formatCurrency(project.budget)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{project.progress}% Complete</div>
                    <div className="w-32 bg-secondary rounded-full h-2 mt-1">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className={
                      project.progress === 100 
                        ? "bg-success-green-light text-success-green border-success-green/20"
                        : project.progress > 50
                        ? "bg-trust-blue-light text-trust-blue border-trust-blue/20"
                        : "bg-warning-amber-light text-warning-amber border-warning-amber/20"
                    }
                  >
                    {project.progress === 100 ? 'Complete' : 'In Progress'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
          <Link to="/departments">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust-blue-light">
                <Building className="h-6 w-6 text-trust-blue" />
              </div>
              <div>
                <h3 className="font-semibold">Department Budgets</h3>
                <p className="text-sm text-muted-foreground">
                  View detailed budget allocations
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>
        
        <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
          <Link to="/projects">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-green-light">
                <Users className="h-6 w-6 text-success-green" />
              </div>
              <div>
                <h3 className="font-semibold">Projects & Vendors</h3>
                <p className="text-sm text-muted-foreground">
                  Track project progress and vendor performance
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>
        
        <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
          <Link to="/about">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning-amber-light">
                <Shield className="h-6 w-6 text-warning-amber" />
              </div>
              <div>
                <h3 className="font-semibold">About Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about our transparency mission
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Index;