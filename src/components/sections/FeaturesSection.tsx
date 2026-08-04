export default function FeaturesSection() {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-7xl p-6">
        <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Features</h3>
          <p className="mt-2 text-gray-600 dark:text-slate-300">Everything you need to turn meetings into actionable work.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-100 p-4 bg-white dark:bg-slate-900">
              <h4 className="font-semibold">Auto Summaries</h4>
              <p className="mt-1 text-sm text-gray-500">Get concise meeting summaries instantly.</p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 bg-white dark:bg-slate-900">
              <h4 className="font-semibold">Action Items</h4>
              <p className="mt-1 text-sm text-gray-500">Track owners, due dates and progress.</p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 bg-white dark:bg-slate-900">
              <h4 className="font-semibold">Integrations</h4>
              <p className="mt-1 text-sm text-gray-500">Connect to calendars and chat tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
