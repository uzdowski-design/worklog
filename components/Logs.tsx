'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useLogStore } from '@/store';

export default function Logs() {
  // list logs from supabase
  const logs = useLogStore((state) => state.logs);

  return (
    <div>
      <Table>
        <TableCaption>A list of your work logs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/6">Date</TableHead>
            <TableHead className="w-1/6">Hours</TableHead>
            <TableHead className="w-3/6">Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(logs)
            .sort((a, b) => {
              return new Date(a).getTime() - new Date(b).getTime();
            })
            .map((date) => {
              const log = logs[date];

              return (
                <TableRow
                  key={date}
                  className={cn(log.hours < 4 ? 'bg-red-100' : '')}
                >
                  <TableCell>{log.date.toDateString()}</TableCell>
                  <TableCell>{log.hours}</TableCell>
                  <TableCell>{log.note}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
