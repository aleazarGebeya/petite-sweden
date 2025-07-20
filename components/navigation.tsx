import React from "react";
import { SunIcon, LeafIcon } from "lucide-react";

export function Navigation() {
  return (
    <header className="bg-white/70 dark:bg-black/80 backdrop-blur fixed w-full z-30 shadow-sm border-b border-green-200 dark:border-green-800">
      <nav className="max-w-6xl mx-auto px-4 flex items-center h-16 justify-between">
        <div className="flex items-center space-x-2">
          <LeafIcon className="h-7 w-7 text-green-600 dark:text-green-400" aria-label="Home" />
          <span className="font-bold text-xl tracking-tight">EcoAction Alliance</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li><a href="#mission" className="hover:text-green-700 transition">Mission</a></li>
          <li><a href="#campaigns" className="hover:text-green-700 transition">Campaigns</a></li>
          <li><a href="#donate" className="hover:text-green-700 transition">Donate</a></li>
          <li><a href="#volunteer" className="hover:text-green-700 transition">Volunteer</a></li>
          <li><a href="#impact" className="hover:text-green-700 transition">Impact</a></li>
          <li><a href="#stories" className="hover:text-green-700 transition">Stories</a></li>
          <li><a href="#blog" className="hover:text-green-700 transition">Blog</a></li>
          <li><a href="#events" className="hover:text-green-700 transition">Events</a></li>
          <li><a href="#resources" className="hover:text-green-700 transition">Resources</a></li>
        </ul>
        <div className="flex items-center space-x-2">
          <button className="rounded-full p-1 bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 border border-green-200 dark:border-green-700">
            {/* Toggle for dark/light mode (handled elsewhere if desired) */}
            <SunIcon className="h-5 w-5 text-green-600 dark:text-green-100" aria-label="Toggle Theme" />
          </button>
        </div>
      </nav>
    </header>
  );
}
