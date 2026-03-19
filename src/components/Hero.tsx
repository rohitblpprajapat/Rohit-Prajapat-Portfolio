"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent" style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
            IIT Madras BS Student
          </p>
          <h1>
            Rohit Prajapat<span className="text-accent">.</span>
          </h1>
          <h2 style={{ color: "var(--muted-foreground)", fontWeight: 400, marginTop: "-0.5rem" }}>
            Aspiring Data Scientist & Developer
          </h2>
          <p style={{ maxWidth: "600px", marginTop: "1.5rem", marginBottom: "2.5rem" }}>
            Passionate about building elegant solutions to complex problems. Currently pursuing my BS in Data Science and Applications at IIT Madras.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#projects"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-foreground)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid var(--border)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
