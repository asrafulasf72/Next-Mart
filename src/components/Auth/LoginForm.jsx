"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to handle credentials login
    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false, // important for handling toast
            email,
            password,
        });

        setLoading(false);

        if (res?.error) {
            toast.error("Invalid email or password");
            return;
        }

        toast.success("Login successful 🎉");
        router.push("/");
    };

    // Google login button
    const handleGoogleLogin = async () => {
        setLoading(true);
        const res = await signIn("google", {
            redirect: false,        // handle manually
            callbackUrl: "/",  // redirect after login
        });
        setLoading(false);

        if (res?.error) {
            toast.error("Google login failed");
            return;
        }

        // Check if user data exists
        const sessionRes = await fetch("/api/auth/session");
        const sessionData = await sessionRes.json();

        if (!sessionData?.user?.email) {
            toast.error("Failed to get Google email. Please try again.");
            return;
        }

        toast.success(`Google login successful 🎉 (${sessionData.user.email})`);
        router.push(res.url || "/");
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
            onSubmit={handleCredentialsLogin}
        >
            {/* Email */}
            <div>
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    placeholder="example@gmail.com"
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
                    placeholder="••••••••"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-3 rounded-xl border"
                />
            </div>

            {/* Credentials Submit */}
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

            {/* Google Button */}
            <Button
                type="button"
                variant="outline"
                className="w-full rounded-full py-6"
                onClick={handleGoogleLogin}
                disabled={loading}
            >
                {loading ? "Signing in..." : "Continue with Google"}
            </Button>
        </motion.form>
    );
};

export default LoginForm;
