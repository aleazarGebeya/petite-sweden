import React from "react";

export function MissionStatement() {
  return (
    <section id="mission" className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-green-800 dark:text-green-200">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-100">
          EcoAction Alliance unites communities, advocates for bold environmental policy, and inspires sustainable action to preserve the natural world for future generations. We mobilize resources, educate, and engage at all levels to make a measurable, positive impact on our environment.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&h=500&fit=crop&auto=format"
          alt="Children planting trees for the future"
          className="rounded-xl shadow-xl object-cover w-[350px] h-[275px] md:w-[400px] md:h-[320px] border-4 border-green-200 dark:border-green-700"
          loading="lazy"
        />
      </div>
    </section>
  );
}
