"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThemeToggle from "../Theme Toggle/theme-toggle";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-primary">Next</span>
          <span className="text-foreground">Mart</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <Link
            href="/items"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Items
          </Link>

          {status === "loading" ? null : session ? (
            <Button onClick={() => signOut({ callbackUrl: "/" })} size="sm">
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button
                size="sm"
                className="rounded-full px-5 shadow-md hover:shadow-lg transition-all"
              >
                Login
              </Button>
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
