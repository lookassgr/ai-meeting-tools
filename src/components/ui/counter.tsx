"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-md dark:border-slate-700 dark:bg-slate-800/70">
      <p className="text-sm font-medium text-gray-600 dark:text-slate-300">Button clicks</p>
      <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Increment
      </button>
    </div>
  );
}