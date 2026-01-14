"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />

      {/* Floating Glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-500/20 blur-[180px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-fuchsia-500/20 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative rounded-[32px] border border-border/40
            bg-card/70 backdrop-blur-xl
            px-10 py-20 text-center shadow-2xl
          "
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Build Smarter. Scale Faster.
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-14">
            NextMart helps teams manage products with speed, security, and
            confidence — all powered by a modern, production-ready stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Primary CTA */}
            <Link href="/items">
              <Button
                size="lg"
                className="
                  px-12 py-6 rounded-full text-base font-semibold
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
                  text-white shadow-lg
                  hover:opacity-90
                "
              >
                View Products
              </Button>
            </Link>

            {/* Secondary CTA */}
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="
                  px-12 py-6 rounded-full text-base
                  border-border/60 bg-background/40
                  hover:bg-muted
                "
              >
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
