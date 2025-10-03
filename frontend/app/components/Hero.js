"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pt-32 pb-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
          Achieve Your Goals, <span className="text-blue-600">Smarter</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
          DidIt is the AI-powered to-do app that intelligently verifies your
          progress, so you can focus on what matters most.
        </p>
        <motion.a
          href="/dashboard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}