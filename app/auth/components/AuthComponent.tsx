'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthComponent() {
  const supabase = createClientComponentClient();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };

  return (
    <div className="p-5">
      <Navbar />
      <div className="flex justify-center items-center h-[80dvh]">
        <div className="text-center space-y-5">
          <p className="italic">
            Remember, &ldquo;time is money&rdquo;.
            <br />
            Invest it wisely with <span className="font-bold">WorkLog </span>
            app.
          </p>
          <Button onClick={handleLogin}>Login with GitHub</Button>
        </div>
      </div>
    </div>
  );
}
