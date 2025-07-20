import React from "react";

export function Campaigns() {
  // Placeholder: Could be fetched from database in future
  const campaigns = [
    {
      title: "Reforest the Future",
      summary: "Mobilizing community efforts to plant native trees in deforested regions.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop&auto=format",
      progress: 65,
      goal: 100,
      impact: "54,000 trees planted"
    },
    {
      title: "Clean Water Initiative",
      summary: "Providing access to clean, safe water in vulnerable ecosystems.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&auto=format",
      progress: 80,
      goal: 100,
      impact: "34 wells built"
    },
    {
      title: "Wildlife Protection",
      summary: "Safeguarding endangered species through habitat preservation.",
      image: "https://images.unsplash.com/photo-1463003416389-296a1ad37ca0?w=600&h=400&fit=crop&auto=format",
      progress: 42,
      goal: 100,
      impact: "120,000 acres protected"
    }
  ];
  return (
    <section id="campaigns">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800 dark:text-green-200 text-center">Current Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((c, i) => (
          <div key={c.title} className="bg-white dark:bg-gray-950 rounded-xl shadow-lg overflow-hidden flex flex-col group border-b-4 border-green-400 dark:border-green-700">
            <div className="h-40 w-full overflow-hidden">
              <img src={c.image} alt={c.title} className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500 ease-out" loading="lazy"/>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-900 dark:text-green-100">{c.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">{c.summary}</p>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-full h-2 bg-green-100 dark:bg-green-900 rounded-full relative overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-full rounded-full shadow-lg" style={{ width: `${c.progress}%` }} />
                </div>
                <span className="ml-2 text-xs text-green-700 dark:text-green-200 font-semibold">{c.progress}%</span>
              </div>
              <span className="mt-3 text-xs font-medium text-green-800 dark:text-green-300">Impact: {c.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
