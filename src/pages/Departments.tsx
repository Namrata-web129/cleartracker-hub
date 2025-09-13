import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const departments = [
  {
    id: 1,
    name: "Education Department",
    budget: 2500000,
    spent: 1850000,
    remaining: 650000,
    projects: 12,
    status: "On Track",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "Healthcare Services",
    budget: 3200000,
    spent: 2100000,
    remaining: 1100000,
    projects: 8,
    status: "Under Budget",
    lastUpdated: "2024-01-14"
  },
  {
    id: 3,
    name: "Infrastructure & Public Works",
    budget: 4500000,
    spent: 4200000,
    remaining: 300000,
    projects: 15,
    status: "Near Limit",
    lastUpdated: "2024-01-16"
  },
  {
    id: 4,
    name: "Social Services",
    budget: 1800000,
    spent: 1200000,
    remaining: 600000,
    projects: 6,
    status: "On Track",
    lastUpdated: "2024-01-13"
  },
  {
    id: 5,
    name: "Public Safety",
    budget: 2100000,
    spent: 1950000,
    remaining: 150000,
    projects: 9,
    status: "Near Limit",
    lastUpdated: "2024-01-15"
  }
];

const Departments = () => {
  const totalBudget = departments.reduce((sum, dept) => sum + dept.budget, 0);
  const totalSpent = departments.reduce((sum, dept) => sum + dept.spent, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Budget":
        return "bg-success-green-light text-success-green border-success-green/20";
      case "Near Limit":
        return "bg-warning-amber-light text-warning-amber border-warning-amber/20";
      default:
        return "bg-trust-blue-light text-trust-blue border-trust-blue/20";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Department Budgets</h1>
          <p className="text-muted-foreground">
            Detailed breakdown of departmental budget allocations and spending
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search departments..." className="w-64 pl-10" />
          </div>
          <Button variant="outline">
            Download Report
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBudget)}</div>
            <p className="text-xs text-muted-foreground">
              Allocated across {departments.length} departments
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalSpent)}</div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of total budget
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBudget - totalSpent)}</div>
            <p className="text-xs text-muted-foreground">
              Available for allocation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Departments Table */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Department Details</CardTitle>
          <CardDescription>
            Current budget status and spending for each department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => {
                const spentPercentage = (dept.spent / dept.budget) * 100;
                return (
                  <TableRow key={dept.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{formatCurrency(dept.budget)}</TableCell>
                    <TableCell>{formatCurrency(dept.spent)}</TableCell>
                    <TableCell>{formatCurrency(dept.remaining)}</TableCell>
                    <TableCell>
                      <div className="w-24">
                        <Progress value={spentPercentage} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">
                          {spentPercentage.toFixed(1)}%
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(dept.status)} variant="outline">
                        {dept.status === "Near Limit" && (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        )}
                        {dept.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{dept.projects}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {dept.lastUpdated}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Departments;