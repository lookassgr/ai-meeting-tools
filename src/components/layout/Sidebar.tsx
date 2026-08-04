import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:fixed md:top-16 md:left-0 md:h-[calc(100vh-4rem)] md:w-64 lg:md:w-72 flex-col gap-6 bg-white/90 dark:bg-slate-900/60 border-r border-gray-100 dark:border-slate-700 p-6 overflow-auto">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 flex-shrink-0 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold">AI</div>

        <div>
          <div className="text-lg font-semibold text-slate-900 dark:text-white">AI Meeting Notes</div>
          <div className="text-xs text-gray-500">Meetings, summaries, action items</div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          <li>
            <Link href="/dashboard" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM3 21h8v-6H3v6zM13 9h8V3h-8v6z" fill="currentColor" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href="/meetings" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18v2H3zM3 12h18v2H3zM3 18h18v2H3z" fill="currentColor" />
              </svg>
              <span>Meetings</span>
            </Link>
          </li>

          <li>
            <Link href="/integrations" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="currentColor" />
              </svg>
              <span>Integrations</span>
            </Link>
          </li>

          <li>
            <Link href="/settings" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2.1-1.6a.5.5 0 0 0 .1-.7l-2-3.4a.5.5 0 0 0-.6-.2l-2.5 1a8 8 0 0 0-1.7-.9l-.4-2.6a.5.5 0 0 0-.5-.4h-4a.5.5 0 0 0-.5.4l-.4 2.6c-.6.2-1.2.5-1.7.9l-2.5-1a.5.5 0 0 0-.6.2l-2 3.4a.5.5 0 0 0 .1.7L4.5 13a7.9 7.9 0 0 0-.1 1c0 .3 0 .6.1 1l-2.1 1.6a.5.5 0 0 0-.1.7l2 3.4c.1.2.4.3.6.2l2.5-1c.5.4 1.1.7 1.7.9l.4 2.6c.1.2.3.4.5.4h4c.2 0 .4-.2.5-.4l.4-2.6c.6-.2 1.2-.5 1.7-.9l2.5 1c.2.1.5 0 .6-.2l2-3.4a.5.5 0 0 0-.1-.7L19.4 15z" fill="currentColor" />
              </svg>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="w-full rounded-md border px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200">New Meeting</button>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="text-sm">
            <div className="font-medium text-slate-900 dark:text-white">Lucas</div>
            <div className="text-xs text-gray-500">Account</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
