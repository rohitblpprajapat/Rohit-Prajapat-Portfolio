"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(var(--background), 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        height: "4rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.25rem", fontFamily: "var(--font-heading)" }}>
          RP<span className="text-accent">.</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <ul style={{ display: "flex", gap: "2rem" }} className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
