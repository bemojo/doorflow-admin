
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, DoorOpen, ChevronRight } from "lucide-react";

const Locations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Locations</h1>
          <p className="text-muted-foreground mt-1">Manage your organization's locations and access points</p>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Location
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Main Office', doors: 4, users: 12, status: 'active' },
          { name: 'Warehouse', doors: 6, users: 8, status: 'active' },
          { name: 'Store', doors: 2, users: 4, status: 'maintenance' }
        ].map((location) => (
          <Card 
            key={location.name} 
            className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-900">{location.name}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                  location.status === 'active' 
                    ? 'bg-success/10 text-success'
                    : 'bg-warning/10 text-warning'
                }`}>
                  {location.status === 'active' ? 'Active' : 'Maintenance'}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <DoorOpen className="w-4 h-4 mr-2 text-gray-400" />
                <span>{location.doors} doors</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-gray-400" />
                <span>{location.users} users</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last activity</span>
                <span className="text-gray-900 font-medium">2 mins ago</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Locations;
