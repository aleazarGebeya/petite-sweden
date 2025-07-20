import React from "react";

export function BlogSection() {
  // Placeholder for three blog posts
  const posts = [
    {
      title: "Why Local Reforestation Efforts Matter",
      summary: "Exploring the huge impact of planting trees in your community and how you can get involved.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=250&fit=crop&auto=format",
      link: "#"
    },
    {
      title: "Climate Change: Myths vs Facts",
      summary: "Let’s debunk some common misconceptions and look at the science of climate change.",
      image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=400&h=250&fit=crop&auto=format",
      link: "#"
    },
    {
      title: "Sustainable Living Starter Guide",
      summary: "Practical tips for reducing your carbon footprint and living more sustainably every day.",
      image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?w=400&h=250&fit=crop&auto=format",
      link: "#"
    }
  ];
  return (
    <section id="blog" className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">Environmental Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <a key={post.title} href={post.link} className="group bg-white dark:bg-gray-950 transition-all rounded-xl shadow-xl overflow-hidden border-b-4 border-green-400 dark:border-green-700 flex flex-col hover:shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out" loading="lazy" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 flex-1">{post.summary}</p>
              <span className="inline-block text-green-700 dark:text-green-200 text-xs font-medium mt-auto self-end">Read More →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
