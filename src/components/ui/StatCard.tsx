interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-md dark:border-slate-700 dark:bg-slate-800/70">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}