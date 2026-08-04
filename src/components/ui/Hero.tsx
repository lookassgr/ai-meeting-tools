export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">

        <span className="text-sm font-medium text-blue-600">
          AI Powered Productivity
        </span>

        <h1 className="mt-4 text-6xl font-bold">
          Turn Meetings Into Action.
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Automatically generate summaries,
          action items and insights from every meeting.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Get Started
          </button>

          <button className="rounded-lg border px-6 py-3">
            Live Demo
          </button>

        </div>

      </div>
    </section>
  );
}