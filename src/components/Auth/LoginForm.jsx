"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // or react-hot-toast

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // 🚨 IMPORTANT
    });

    setLoading(false);

    if (res?.error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful 🎉");
    router.push("/items");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl border"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl border"
        />
      </div>

      <Button type="submit" className="w-full rounded-full py-6" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </Button>

      {/* Divider */}
      <div className="relative text-center">
        <span className="text-sm text-muted-foreground bg-background px-2 z-10 relative">
          or
        </span>
        <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
      </div>

      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="w-full rounded-full py-6"
        onClick={() => signIn("google")}
      >
        Continue with Google
      </Button>
    </motion.form>
  );
};

export default LoginForm;
