import AuthGuard from "@/components/auth/AuthGuard";
import DashboardHeader from "@/components/sections/DashboardHeader";
import StatCard from "@/components/ui/StatCard";
import Counter from "@/components/ui/counter";
import MeetingsTable from "@/components/sections/MeetingsTable";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl p-8">
          <DashboardHeader />

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Meetings Processed"
            value="128"
          />

          <StatCard
            title="Action Items"
            value="42"
          />

          <StatCard
            title="Hours Saved"
            value="16h"
          />
          <Counter/>
        </div>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Recent Meetings</h2>
          <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
            <MeetingsTable />
          </div>
        </section>
        </div>
      </main>
    </AuthGuard>
  );
}