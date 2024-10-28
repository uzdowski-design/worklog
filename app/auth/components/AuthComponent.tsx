'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthComponent() {
  const supabase = createClientComponentClient();

  const handleGoogleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };
  const handleGithubLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  };

  return (
    <div className="p-5 flex flex-col flex-grow">
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <div className="text-center space-y-10">
          <p className="italic">
            Remember, &ldquo;time is money&rdquo;.
            <br />
            Invest it wisely with <span className="font-bold">WorkLog </span>
            app.
          </p>
          <div className="flex flex-col gap-4">
            <Button onClick={handleGoogleLogin}>Login with Google</Button>
            <Button onClick={handleGithubLogin}>Login with GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
