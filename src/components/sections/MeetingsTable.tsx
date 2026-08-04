import { meetings } from "@/lib/mock-data";

export default function MeetingsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-160 table-auto text-sm">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500">Meeting</th>
            <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500">Date</th>
            <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500">Participants</th>
            <th className="px-4 py-3 text-xs font-medium uppercase text-gray-500">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {meetings.map((meeting) => (
            <tr key={meeting.id} className="bg-transparent">
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900 dark:text-white">{meeting.title}</div>
              </td>

              <td className="px-4 py-3 text-gray-700 dark:text-slate-300">{meeting.date}</td>

              <td className="px-4 py-3 text-gray-700 dark:text-slate-300">{meeting.participants}</td>

              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    meeting.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : meeting.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {meeting.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}