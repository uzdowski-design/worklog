import Calendar from '@/components/Calendar';
import Logs from '@/components/Logs';
import Navbar from '@/components/Navbar';
import { NewLog } from '@/components/NewLog';
import InitLog from '@/components/state/InitLog';
import { ILog } from '@/store';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    return redirect('/auth');
  }

  const { data: logs } = await supabase
    .from('logs')
    .select('*')
    .order('date', { ascending: true });

  return (
    <div className="p-5 space-y-10">
      <InitLog logs={logs as ILog[]} />
      <Navbar />
      <NewLog />
      <Calendar />
      <Logs />
    </div>
  );
}
