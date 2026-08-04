export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="mx-auto max-w-7xl p-6">
        <div className="pt-6 border-t border-gray-200 dark:border-slate-700 text-center text-sm text-gray-600 dark:text-slate-400">
          <div>© {new Date().getFullYear()} AI Meeting Notes — Built with care.</div>
          <div className="mt-2">Privacy · Terms · Contact</div>
        </div>
      </div>
    </footer>
  );
}
