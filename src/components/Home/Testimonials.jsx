"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arif Hossain",
      role: "Product Manager",
      company: "EcomTech",
      message:
        "NextMart made product management extremely simple. The UI is clean, fast, and feels production-ready.",
      avatar: "/arif.png",
    },
    {
      name: "Nusrat Jahan",
      role: "Frontend Engineer",
      company: "Digital Labs",
      message:
        "The architecture and design patterns used in NextMart are exactly what modern web apps need.",
      avatar: "/nusrat.jpg",
    },
    {
      name: "Rahim Uddin",
      role: "Startup Founder",
      company: "ShopBase",
      message:
        "This platform scales beautifully. From UI to API integration, everything feels professional.",
      avatar: "/rahim.jpg",
    },
  ];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Trusted by Professionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            See what industry professionals say about using NextMart in real-world
            product workflows.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-40 blur-md group-hover:opacity-80 transition" />

              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-background/80 backdrop-blur border shadow-xl group-hover:shadow-2xl transition-all h-full">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  “{item.message}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
