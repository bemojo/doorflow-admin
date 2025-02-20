
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Organization Settings</h2>
          <div className="space-y-4">
            <div>
              <Label>Organization Name</Label>
              <Input placeholder="Enter organization name" />
            </div>
            <div>
              <Label>Contact Email</Label>
              <Input type="email" placeholder="contact@example.com" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
