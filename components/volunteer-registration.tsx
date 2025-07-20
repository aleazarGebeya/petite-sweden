"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function VolunteerRegistration() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }
  return (
    <section id="volunteer" className="max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg p-8 rounded-2xl border border-green-100 dark:border-green-700 mt-10">
      <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-3">Become a Volunteer</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-100 text-center">Join our passionate community and contribute to meaningful change!</p>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required className="px-4 py-2 rounded-md border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-300"/>
        <input type="email" name="email" placeholder="Email Address" required className="px-4 py-2 rounded-md border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-300"/>
        <input type="text" name="city" placeholder="City" className="px-4 py-2 rounded-md border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-300"/>
        <Button type="submit">Sign Up</Button>
        {submitted && (
          <span className="text-green-600 dark:text-green-300 text-center mt-2 animate-pulse">Welcome to the movement! We'll be in touch soon.</span>
        )}
      </form>
    </section>
  );
}
