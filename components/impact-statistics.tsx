import React from "react";
import { TrendingUpIcon, Globe2Icon, UsersIcon } from "lucide-react";

export function ImpactStatistics() {
  // Counters/Statistics here would be made interactive in later steps (animated numbers)
  const stats = [
    { label: "Trees Planted", value: 84000, icon: <Globe2Icon className="text-green-600 w-6 h-6" /> },
    { label: "Volunteers Engaged", value: 3200, icon: <UsersIcon className="text-green-600 w-6 h-6" /> },
    { label: "Tons CO₂ Offset", value: 12950, icon: <TrendingUpIcon className="text-green-600 w-6 h-6" /> }
  ];
  return (
    <section id="impact" className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800 dark:text-green-200 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="bg-white dark:bg-gray-900/70 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-green-400 dark:border-green-700 min-w-[220px]">
            <div className="mb-4">{stat.icon}</div>
            <span className="text-3xl md:text-4xl font-extrabold text-green-700 dark:text-green-200">
              {stat.value.toLocaleString()}
            </span>
            <span className="mt-2 text-xl text-gray-800 dark:text-gray-50 font-semibold text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
