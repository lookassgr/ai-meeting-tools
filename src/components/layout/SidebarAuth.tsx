"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Sidebar from "./Sidebar";

export default function SidebarAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      const auth = !!data.session;
      setIsAuthenticated(auth);
      if (auth) {
        document.documentElement.classList.add("sidebar-open");
      } else {
        document.documentElement.classList.remove("sidebar-open");
      }
    };

    checkSession();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      const auth = !!session;
      setIsAuthenticated(auth);
      if (auth) {
        document.documentElement.classList.add("sidebar-open");
      } else {
        document.documentElement.classList.remove("sidebar-open");
      }
    });

    return () => {
      mounted = false;
      subscription?.subscription.unsubscribe();
      // ensure we remove the class when this component unmounts
      document.documentElement.classList.remove("sidebar-open");
    };
  }, []);

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return null;

  return <Sidebar />;
}
