import React from "react";

export function SuccessStories() {
  // Placeholder sample stories
  const stories = [
    {
      name: "Maria, Colombia",
      text: "Thanks to EcoAction Alliance's reforestation program, our region is green again and wildlife is returning!",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=150&h=150&fit=crop&auto=format"
    },
    {
      name: "James, Kenya",
      text: "The clean water project changed our village's future—thank you for believing in us.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=150&fit=crop&auto=format"
    },
    {
      name: "Ling, China",
      text: "Joining as a volunteer opened my eyes to global connections and the power to make a difference.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=150&h=150&fit=crop&auto=format"
    }
  ];
  return (
    <section id="stories" className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">Success Stories</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {stories.map(story => (
          <div key={story.name} className="bg-gradient-to-br from-green-200/60 via-green-100/50 to-blue-300/40 dark:from-green-800/60 dark:via-green-950/60 dark:to-gray-900/70 rounded-xl p-6 flex-1 shadow-lg flex flex-col gap-6 max-w-xs">
            <div className="flex items-center gap-4">
              <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-400" loading="lazy" />
              <span className="font-medium text-lg text-green-900 dark:text-green-200">{story.name}</span>
            </div>
            <p className="italic text-gray-800 dark:text-gray-100">“{story.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
