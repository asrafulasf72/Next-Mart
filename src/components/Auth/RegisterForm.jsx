"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
      return;
    }

    toast.success("Account created 🎉");
    router.push("/login");
  };

  return (
    <motion.form
      onSubmit={handleRegister}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl border"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl border"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl border"
        />
      </div>

      <Button type="submit" className="w-full rounded-full py-6">
        Create Account
      </Button>
    </motion.form>
  );
};

export default RegisterForm;
