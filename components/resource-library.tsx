import React from "react";

export function ResourceLibrary() {
  // Placeholder resource cards
  const resources = [
    {
      title: "Climate Action Toolkit",
      description: "Guides and checklists for taking meaningful climate action.",
      image: "https://images.unsplash.com/photo-1428591501234-1ffcb0d6871f?w=400&h=250&fit=crop&auto=format",
      link: "#"
    },
    {
      title: "Sustainable Home Guide",
      description: "How to make your everyday life more sustainable.",
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=400&h=250&fit=crop&auto=format",
      link: "#"
    },
    {
      title: "Youth Environmental Curriculum",
      description: "Classroom-ready lesson plans and activities for teachers.",
      image: "https://images.unsplash.com/photo-1465101178521-c1a6152bdb09?w=400&h=250&fit=crop&auto=format",
      link: "#"
    }
  ];
  return (
    <section id="resources" className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">Resource Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map(r => (
          <a key={r.title} href={r.link} className="group bg-white dark:bg-gray-950 rounded-xl shadow-xl border-b-4 border-green-400 dark:border-green-700 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
            <img src={r.image} alt={r.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out" loading="lazy" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 flex-1">{r.description}</p>
              <span className="inline-block text-green-700 dark:text-green-200 text-xs font-medium mt-auto self-end">View Resource →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
