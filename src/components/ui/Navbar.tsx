"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setUserEmail(data.session?.user?.email ?? null);
    };

    load();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      mounted = false;
      subscription?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 border-b border-gray-100 dark:border-slate-700 backdrop-blur-sm">
      <div className="mx-auto flex max-w-8xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 shrink-0 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold">AI</div>
          <div className="font-semibold text-slate-900 dark:text-white">AI Meeting Notes</div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {userEmail ? (
            <>
              <div className="text-sm text-slate-700 dark:text-slate-200">{userEmail}</div>
              <button onClick={handleLogout} className="rounded-md border px-3 py-1 text-sm">Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-md border px-3 py-1 text-sm">Iniciar sesión</Link>
              <Link href="/register" className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}