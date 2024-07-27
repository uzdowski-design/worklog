'use client';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from './DatePicker';
import { useLogStore } from '@/store';
import { useToast } from '@/components/ui/use-toast';
import dayjs from 'dayjs';

export function NewLog() {
  const { toast } = useToast();

  const log = useLogStore((state) => state.log);
  const setLog = useLogStore((state) => state.setLog);
  const setLogs = useLogStore((state) => state.setLogs);

  const closeDialog = () => {
    document.getElementById('close-btn')?.click();
  };

  const validateLog = () => {
    if (!log.date || !log.hours || log.hours === 0) {
      throw 'Date and hours cannot be empty';
    } else if (log.hours > 24 || log.hours < 0) {
      throw 'Please enter a valid hour';
    }
  };

  const submitLog = () => {
    try {
      validateLog();
      setLogs(log, dayjs(log.date).format('YYYY-MM-DD'));

      toast({
        title: 'Time logged',
        description: `Logged ${log.hours} hour${
          log.hours > 1 ? 's' : ''
        } on ${log.date.toDateString()}`
      });
      closeDialog();
      // call to supabase
    } catch (error) {
      toast({
        title: 'Failed to log time',
        description: error as string,
        variant: 'destructive'
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-72 border border-dashed hover:border-solid p-3 flex items-center justify-center rounded-md  cursor-pointer">
          <Plus size={24} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log Time</DialogTitle>
          <DialogDescription className="italic">
            Remember, &ldquo;time is money&rdquo;. Invest it wisely with{' '}
            <span className="font-bold">WorkLog App</span>.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hours
            </Label>
            <Input
              id="hour"
              type="number"
              className="col-span-3"
              value={log.hours}
              onChange={(e) =>
                setLog({ ...log, hours: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              placeholder="Note for the log"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
