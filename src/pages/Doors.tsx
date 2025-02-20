
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Doors = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Doors</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Door
        </Button>
      </div>
      <div className="border rounded-lg bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Access</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {['Main Entrance', 'Storage Room', 'Server Room'].map((door) => (
              <TableRow key={door}>
                <TableCell className="font-medium">{door}</TableCell>
                <TableCell>Office</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success bg-opacity-10 text-success">
                    Active
                  </span>
                </TableCell>
                <TableCell>2 minutes ago</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Doors;
