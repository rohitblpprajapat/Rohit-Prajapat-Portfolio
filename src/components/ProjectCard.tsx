"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({ title, description, tech, image, github, demo }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        backgroundColor: "var(--background)",
        transition: "border-color 0.3s ease",
      }}
    >
      <div 
        style={{ 
          height: "200px", 
          backgroundColor: "var(--secondary)",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} 
      />
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{title}</h3>
        <p style={{ fontSize: "0.95rem", marginBottom: "1.25rem", color: "var(--muted-foreground)" }}>
          {description}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.75rem",
                backgroundColor: "var(--secondary)",
                padding: "0.25rem 0.6rem",
                borderRadius: "100px",
                fontWeight: 500,
                color: "var(--secondary-foreground)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 500 }}>
              <Github size={16} /> GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 500, color: "var(--accent)" }}>
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
