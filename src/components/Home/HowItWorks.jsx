"use client";

import { motion } from "framer-motion";
import { CheckCircle, Box, Layers } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Add Products Easily",
      description:
        "Quickly add your products with detailed info, images, and pricing using our clean interface.",
      icon: <Box className="w-8 h-8 text-white" />,
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      title: "Manage & Organize",
      description:
        "Categorize, edit, and manage your products effortlessly. Keep your inventory always up to date.",
      icon: <Layers className="w-8 h-8 text-white" />,
      gradient: "bg-gradient-to-r from-green-400 to-teal-400",
    },
    {
      title: "Track Performance",
      description:
        "Analyze product trends and sales with optional dashboard integration and analytics.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      gradient: "bg-gradient-to-r from-pink-500 to-orange-400",
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16"
        >
          Follow these simple steps to start managing your products professionally
          and efficiently.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col items-start gap-4 p-8 rounded-3xl shadow-2xl text-white ${step.gradient}`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-white/90 text-sm">{step.description}</p>
              {/* Decorative glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
