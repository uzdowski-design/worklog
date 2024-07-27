import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function Logs() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your work logs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/6">Date</TableHead>
            <TableHead className="w-1/6">Hours</TableHead>
            <TableHead className="w-3/6">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">2024-07-27</TableCell>
            <TableCell>12</TableCell>
            <TableCell>Done login and authentication</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
