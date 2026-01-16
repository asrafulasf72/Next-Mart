import RegisterForm from '@/components/Auth/RegisterForm';
import Link from 'next/link';
import React from 'react'

 const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border bg-card shadow-xl p-8">
        <h1 className="text-3xl font-extrabold mb-2">
          Create Account
        </h1>
        <p className="text-muted-foreground mb-8">
          Start managing your products today
        </p>

        <RegisterForm />

        <p className="text-sm text-muted-foreground mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  )
}
export default Register;