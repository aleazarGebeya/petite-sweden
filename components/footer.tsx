import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-800 via-green-600 to-blue-800 dark:from-gray-950 dark:via-green-950 dark:to-black py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 md:items-center text-green-50/80 text-xs">
          <span>© {new Date().getFullYear()} EcoAction Alliance</span>
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#campaigns" className="hover:underline">Campaigns</a>
          <a href="#donate" className="hover:underline">Donate</a>
          <a href="#volunteer" className="hover:underline">Volunteer</a>
          <a href="#impact" className="hover:underline">Impact</a>
          <a href="#stories" className="hover:underline">Stories</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#resources" className="hover:underline">Resources</a>
        </div>
        <div className="text-green-200/70 text-xs">Made with 🌿 for Earth</div>
      </div>
    </footer>
  );
}
