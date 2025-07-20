"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function DonationSection() {
  const [amount, setAmount] = useState(50);
  const [success, setSuccess] = useState(false);

  // Later this can interact with Supabase for payments
  function handleDonate(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <section id="donate" className="max-w-xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 text-center mb-3">Support Our Work</h2>
      <p className="text-center text-gray-700 dark:text-gray-100 mb-8">
        Your donation helps us drive impactful environmental action worldwide.
      </p>
      <form onSubmit={handleDonate} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-green-100 dark:border-green-700">
        <label className="font-medium text-gray-800 dark:text-green-50 mb-1">Donation Amount ($)</label>
        <input
          type="number"
          min={5}
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="border border-green-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 bg-green-50 dark:bg-green-950 dark:text-green-50 font-semibold text-lg max-w-[170px]"
          required
        />
        <Button type="submit" className="mt-2">Donate</Button>
        {success && (
          <span className="text-green-700 dark:text-green-200 text-center mt-2 animate-pulse">Thank you for supporting our mission!</span>
        )}
      </form>
    </section>
  );
}
