"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="py-8 text-center text-gray-500 border-t"
    >
      &copy; {new Date().getFullYear()} DidIt. All rights reserved.
    </motion.footer>
  );
}