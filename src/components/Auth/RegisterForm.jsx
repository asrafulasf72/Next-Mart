"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from 'react'

const RegisterForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const password=e.target.password.value
    console.log({name,email,password})
    }
    return (
        <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
        >
            {/* Name */}
            <div>
                <label className="text-sm font-medium text-foreground">
                    Full Name
                </label>
                <input
                 name="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
            </div>

            {/* Email */}
            <div>
                <label className="text-sm font-medium text-foreground">
                    Email
                </label>
                <input
                  name="email"
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
                name="password"
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
                Create Account
            </Button>
        </motion.form>
    )
}
export default RegisterForm;