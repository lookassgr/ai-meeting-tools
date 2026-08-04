import DashboardHeader from "@/components/sections/DashboardHeader";
import StatCard from "@/components/ui/StatCard";
import Counter from "@/components/ui/counter";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
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
      </div>
    </main>
  );
}