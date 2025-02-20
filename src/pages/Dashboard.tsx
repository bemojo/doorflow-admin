
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to DoorFlow</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-primary-900">Total Doors</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-primary-900">Active Users</h3>
          <p className="text-3xl font-bold mt-2">156</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-primary-900">Locations</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold text-primary-900">Access Events</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
