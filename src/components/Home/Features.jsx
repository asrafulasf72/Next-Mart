"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // icon from lucide

export default function Features() {
  const features = [
    {
      title: "Scalable Product Management",
      description:
        "Manage unlimited products efficiently with real-time updates and easy categorization.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      title: "Fast & Modern UI",
      description:
        "Built with Next.js and shadcn/ui components for a seamless, fast, and responsive experience.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-tr from-green-400 via-teal-400 to-cyan-400",
    },
    {
      title: "Secure Authentication",
      description:
        "Optional credential login or OAuth with social providers ensures safe access for your users.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-tr from-red-400 via-orange-400 to-yellow-400",
    },
    {
      title: "Analytics Ready",
      description:
        "Easily integrate with dashboards or track items to analyze performance and trends.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      gradient: "bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground"
        >
          Core Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16"
        >
          NextMart provides professional-grade tools for managing your product
          inventory efficiently while ensuring fast performance and a modern UI.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col items-start gap-6 p-8 rounded-3xl shadow-2xl text-white transition-transform ${feature.gradient}`}
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-white/90">{feature.description}</p>

              {/* Optional Decorative Glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
