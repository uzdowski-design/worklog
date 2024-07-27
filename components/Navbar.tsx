'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from './ui/button';
import { Timer } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const isAuthPage = path === '/auth';

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Timer size={24} />
        <h1>WorkLog</h1>
      </div>
      {!isAuthPage && <Button onClick={handleLogout}>Logout</Button>}
    </nav>
  );
};
export default Navbar;
