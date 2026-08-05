import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 border-b border-gray-100 dark:border-slate-700 backdrop-blur-sm">
      <div className="mx-auto flex max-w-8xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 shrink-0 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold">AI</div>
          <div className="font-semibold text-slate-900 dark:text-white">AI Meeting Notes</div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login" className="rounded-md border px-3 py-1 text-sm">Iniciar sesión</Link>
          <Link href="/register" className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white">Registrarse</Link>
        </div>
      </div>
    </header>
  );
}