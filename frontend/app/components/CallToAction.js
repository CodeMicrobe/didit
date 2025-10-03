"use client";
import { motion } from "motion/react";

export default function CallToAction() {
  return (
    <section className="py-16 text-center">
      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Get Started
      </motion.a>
    </section>
  );
}