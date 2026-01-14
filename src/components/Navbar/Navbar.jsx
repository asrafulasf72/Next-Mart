"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-primary"
        >
          Next<span className="text-foreground">Mart</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/items"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Items
          </Link>

          <Link href="/login">
            <Button
              size="sm"
              className="rounded-full px-5 shadow-md hover:shadow-lg transition-all"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
