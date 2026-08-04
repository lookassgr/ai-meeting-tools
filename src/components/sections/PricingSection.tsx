export default function PricingSection() {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-7xl p-6">
        <div className="rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Pricing</h3>
          <p className="mt-2 text-gray-600 dark:text-slate-300">Simple, transparent pricing for teams of any size.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-100 p-6 text-center bg-white dark:bg-slate-900">
              <div className="text-sm font-medium text-gray-500">Starter</div>
              <div className="mt-3 text-2xl font-extrabold">Free</div>
              <p className="mt-2 text-sm text-gray-500">Up to 3 users</p>
            </div>

            <div className="rounded-lg border border-indigo-600 p-6 text-center bg-indigo-50 dark:bg-indigo-900/30">
              <div className="text-sm font-medium text-indigo-700">Pro</div>
              <div className="mt-3 text-2xl font-extrabold text-indigo-700">$12</div>
              <p className="mt-2 text-sm text-indigo-700">Per user / month</p>
            </div>

            <div className="rounded-lg border border-gray-100 p-6 text-center bg-white dark:bg-slate-900">
              <div className="text-sm font-medium text-gray-500">Enterprise</div>
              <div className="mt-3 text-2xl font-extrabold">Contact us</div>
              <p className="mt-2 text-sm text-gray-500">Custom plans for large teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
