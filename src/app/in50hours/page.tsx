import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowToJoin from './components/HowToJoin';
import Steps from './components/Steps';
import Footer from './components/Footer';

export default function In50HoursPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between items-center">
        <Hero />
        <Features />
        <HowToJoin />
        <Steps />
      </div>
      <Footer />
    </>
  );
}