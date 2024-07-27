'use client';
import dayjs from 'dayjs';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { useLogStore } from '@/store';

export default function Calendar() {
  const hours = 0;

  const logs = useLogStore((state) => state.logs);

  function getDateInMonth(
    year: number = dayjs().year(),
    month: number = dayjs().month()
  ): Array<string> {
    const firstDay = dayjs().year(year).month(month).date(1);
    const lastDay = firstDay.endOf('month');
    const days = [];

    for (let i = firstDay.date(); i <= lastDay.date(); i++) {
      days.push(firstDay.date(i).format('YYYY-MM-DD'));
    }

    return days;
  }

  const getColor = (value: number): string => {
    if (value === 0) return 'bg-gray-100';
    if (value < 5) return 'bg-green-100';
    if (value < 10) return 'bg-green-300';
    return 'bg-green-500';
  };

  return (
    <div className="border border-dashed flex flex-wrap gap-2 p-10 justify-center rounded-md">
      {getDateInMonth().map((date: string, index: number) => {
        const log = logs[date];

        return (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div
                className={cn(
                  'h-5 w-5 rounded-sm cursor-pointer',
                  getColor(log?.hours || 0)
                )}
              ></div>
            </HoverCardTrigger>
            <HoverCardContent>
              {log?.hours || 0} hours on {date}
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}
