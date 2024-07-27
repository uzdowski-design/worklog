import { create } from 'zustand';

interface ILog {
  date: Date;
  hours: number;
  note: string;
}

interface LogState {
  log: ILog;
  logs: { [key: string]: ILog };
  setLog: (log: ILog) => void;
  setDate: (date: Date) => void;
  setLogs: (log: ILog, key: string) => void;
}

export const useLogStore = create<LogState>()((set) => ({
  log: {
    date: new Date(),
    hours: 0,
    note: ''
  },
  logs: {},
  setDate: (date: Date) =>
    set((state: LogState) => ({ log: { ...state.log, date } })),
  setLog: (log: ILog) =>
    set((state: LogState) => ({ log: { ...state.log, ...log } })),
  setLogs: (log: ILog, key: string) =>
    set((state: LogState) => ({ logs: { ...state.logs, [key]: log } }))
}));
