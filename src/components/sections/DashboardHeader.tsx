export default function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your AI meeting notes</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden rounded-md border px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700 md:inline">
          Import
        </button>

        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
          New Meeting
        </button>
      </div>
    </div>
  );
}