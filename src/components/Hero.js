import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Your Personal AI Chef</h1>
        <p className="text-xl">Cook delicious meals with what you have at home.</p>
      </div>
    </section>
  );
}

export default Hero;