"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:support@nextmart.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-14 overflow-hidden border-t border-border/40 bg-background text-foreground">
      
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-primary/10 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-indigo-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-extrabold tracking-tight">
              <span className="text-primary">Next</span>
              <span className="text-foreground">Mart</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Modern product management platform with scalable architecture, 
              high performance, and professional-grade tools.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  className="p-2 rounded-full border border-border/40 hover:bg-primary/10 transition flex items-center justify-center"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Columns */}
          <FooterColumn
            title="Product"
            links={[
              { label: "Items", href: "/items" },
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Updates", href: "#" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Blog", href: "#" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Security", href: "#" },
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NextMart. All rights reserved.</p>
          <p>Built with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <h4 className="text-md font-bold text-foreground uppercase tracking-wide">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
