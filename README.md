# 🛒 NextMart – Full Stack E-Commerce Application

NextMart is a modern full-stack e-commerce web application built with **Next.js (App Router)**, **MongoDB**, and **NextAuth.js**.  
The project focuses on clean UI, secure authentication, protected routes, and full CRUD operations for products.

This project is designed as a **learning-focused yet production-ready** application, following real-world development patterns.

---

## 🚀 Live Demo

🔗 **Live Site:**https://next-mart-asf.vercel.app/ 

---

## 📌 Project Overview

NextMart allows users to:
- Browse products publicly
- View detailed product information
- Authenticate using credentials or Google
- Add products securely when logged in
- Manage product data stored in MongoDB

The app uses **Next.js App Router**, server components, API routes, and protected pages using **NextAuth.js**.

---

## 🧰 Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Radix UI**
- **Lucide Icons**

### Backend
- **Next.js API Routes**
- **MongoDB (Native Driver)**
- **NextAuth.js** (Authentication)

### Forms & Validation
- **React Hook Form**
- **Zod**

---

## 📦 Dependencies

```json
{
  "@hookform/resolvers": "^5.2.2",
  "@radix-ui/react-avatar": "^1.1.11",
  "@radix-ui/react-slot": "^1.2.4",
  "bcrypt": "^6.0.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^12.26.2",
  "lucide-react": "^0.562.0",
  "mongodb": "^7.0.0",
  "next": "16.1.1",
  "next-auth": "^4.24.13",
  "next-themes": "^0.4.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "react-hook-form": "^7.71.1",
  "sonner": "^2.0.7",
  "tailwind-animate": "^0.2.10",
  "tailwind-merge": "^3.4.0",
  "zod": "^4.3.5"
}


---

## ⚙️ Setup & Installation

### 1️⃣ Install Dependencies
```bash
npm install

2️⃣ Environment Variables

Create a .env.local file in the root directory and add the following:
URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret



