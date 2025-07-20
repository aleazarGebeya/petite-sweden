import React from "react";

export function HeroSection() {
  return (
    <section className="relative h-[48vh] w-full flex items-center justify-centerbg-transparent overflow-hidden mt-16 md:mt-20">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600&h=600&fit=crop&auto=format"
        alt="Beautiful forest background nature header"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 md:rounded-br-3xl shadow-xl"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-transparent to-blue-800/70 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl mb-4">
          Empowering Change for a Greener Tomorrow
        </h1>
        <p className="text-lg md:text-2xl font-medium text-green-50 drop-shadow-lg max-w-xl">
          Join EcoAction Alliance to protect our planet and drive sustainable progress together.
        </p>
      </div>
    </section>
  );
}
