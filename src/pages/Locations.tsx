
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const Locations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Locations</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Location
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Office', 'Warehouse', 'Store'].map((location) => (
          <Card key={location} className="p-6">
            <h3 className="font-semibold text-primary-900">{location}</h3>
            <p className="text-sm text-gray-500 mt-2">4 doors • 12 users</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Locations;
