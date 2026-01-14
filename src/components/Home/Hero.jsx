"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6 rounded-full border border-white/20 px-4 py-1 text-sm bg-white/10 backdrop-blur"
        >
          🚀 Built with Next.js & Modern UI
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Discover & Manage Products
          <br />
          <span className="text-primary">
            With a Modern Web Experience
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
        >
          NextMart is a scalable product listing and management platform built
          with Next.js, modern UI components, and smooth animations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/items">
            <Button size="lg" className="px-8 rounded-full shadow-xl">
              Explore Items
            </Button>
          </Link>

          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="px-8 rounded-full border-white text-black hover:bg-white hover:text-black"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
