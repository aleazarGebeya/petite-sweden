import React from "react";
import { CalendarDaysIcon } from "lucide-react";

export function EventCalendar() {
  // placeholder events
  const events = [
    {
      title: "Community Tree Planting",
      date: "June 8, 2024",
      location: "Central City Park",
      time: "10:00AM - 2:00PM"
    },
    {
      title: "EcoAction Summit",
      date: "June 15, 2024",
      location: "Downtown Convention Center",
      time: "9:00AM - 5:00PM"
    },
    {
      title: "Clean-Up the Riverside",
      date: "June 22, 2024",
      location: "Riverwalk Avenue",
      time: "11:00AM - 3:00PM"
    }
  ];
  return (
    <section id="events" className="py-7 mt-2">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map(e => (
          <div key={e.title} className="bg-gradient-to-br from-green-200/50 via-blue-200/40 to-blue-100/30 dark:from-green-800/70 dark:via-green-900/70 dark:to-blue-950/70 rounded-xl shadow-lg flex flex-col gap-4 p-6 border-l-4 border-green-500 dark:border-green-300">
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="w-6 h-6 text-green-700 dark:text-green-200" />
              <span className="text-lg font-semibold text-green-900 dark:text-green-100">{e.title}</span>
            </div>
            <div className="flex justify-between items-end text-sm text-gray-700 dark:text-gray-100 mt-2">
              <div>
                <div><span className="font-bold">Date:</span> {e.date}</div>
                <div><span className="font-bold">Time:</span> {e.time}</div>
              </div>
              <div className="text-xs text-green-600 dark:text-green-200 mt-auto"><span className="font-bold">Location:</span> {e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
