"use client";
import { motion } from "motion/react";

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        A smarter way to get things done
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon="✨"
          title="Smart Task Creation"
          description="Effortlessly create tasks with AI suggestions."
        />
        <FeatureCard
          icon="📎"
          title="Effortless Proof Upload"
          description="Attach photos, videos, or documents to prove your work."
        />
        <FeatureCard
          icon="🤖"
          title="Instant AI Verification"
          description="Let our AI confirm your work is done, so you can celebrate."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}