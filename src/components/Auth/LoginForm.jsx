"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from 'react'

const LoginForm = () => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
        >
            {/* Email */}
            <div>
                <label className="text-sm font-medium text-foreground">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
            </div>

            {/* Password */}
            <div>
                <label className="text-sm font-medium text-foreground">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
            </div>

            {/* Submit */}
            <Button
                type="submit"
                className="w-full rounded-full py-6 text-base"
            >
                Sign In
            </Button>

            {/* Divider */}
            <div className="relative text-center">
                <span className="text-sm text-muted-foreground bg-card px-2 relative z-10">
                    or
                </span>
                <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            </div>

            {/* Google Button (UI only) */}
            <Button
                type="button"
                variant="outline"
                className="w-full rounded-full py-6"
            >
                Continue with Google
            </Button>
        </motion.form>
    )
}
export default LoginForm;