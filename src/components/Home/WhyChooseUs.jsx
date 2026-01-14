"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  LayoutDashboard,
  Cloud,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Production-Ready Architecture",
      description:
        "Built using modern best practices with scalability, maintainability, and long-term growth in mind.",
      icon: LayoutDashboard,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Fast & Optimized Performance",
      description:
        "Powered by Next.js App Router for ultra-fast loading and seamless navigation.",
      icon: Zap,
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "Secure by Design",
      description:
        "Authentication, protected routes, and secure data handling are built-in.",
      icon: ShieldCheck,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Cloud & API Ready",
      description:
        "Designed to integrate easily with Express APIs, databases, and cloud services.",
      icon: Cloud,
      gradient: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px]" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Why Choose NextMart
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A modern, scalable, and secure platform built for real-world product
            management applications.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Gradient Border */}
                <div
                  className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${item.gradient} opacity-60 blur-md group-hover:opacity-100 transition`}
                />

                {/* Card */}
                <div className="relative p-10 rounded-3xl bg-background/80 backdrop-blur border shadow-xl group-hover:shadow-2xl transition-all">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-white mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
