"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      if (error || !data.session) {
        router.replace("/login");
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkSession();

    const { data: subscription } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      if (!session) {
        router.replace("/login");
      } else {
        setIsAuthenticated(true);
      }
    });

    return () => {
      mounted = false;
      subscription?.subscription.unsubscribe();
    };
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="rounded-2xl border border-gray-200 bg-white/90 px-6 py-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/90">
          <p className="text-base font-medium text-slate-900 dark:text-white">Verificando tu sesión...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
