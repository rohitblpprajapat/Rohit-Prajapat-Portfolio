"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

import { useState } from "react";

const dsProjects = [
  {
    title: "Enterprise RAG ETL Pipeline",
    description: "Multi-stage RAG pipeline using PySpark for distributed text processing and pgvector for high-performance semantic search. Supports bulk ingestion from S3-like datalakes.",
    tech: ["Python", "PySpark", "PostgreSQL", "Hugging Face"],
    image: "/rag-engine.png",
    github: "https://github.com/rohitblpprajapat/Enterprise-RAG-Document-Ingestion-Vectorization-Engine",
    demo: "#"
  },
  {
    title: "Trading Data Automation",
    description: "Chrome extension for traders featuring a 4-stage screenshot capture wizard and automated trade logging (25+ fields) to Google Sheets with Telegram sharing.",
    tech: ["JavaScript", "Chrome API", "Google Sheets API", "Telegram API"],
    image: "/trading-collector.png",
    github: "https://github.com/rohitblpprajapat/Trading-Data-Collection-Automation",
    demo: "#"
  },
  {
    title: "Sahay-Ai (Zoom MCP Server)",
    description: "Advanced Model Context Protocol (MCP) server for Zoom integration. Enables AI assistants to manage meetings through natural language commands.",
    tech: ["Python", "Zoom API", "MCP", "OAuth2"],
    image: "/zoom-mcp.png",
    github: "https://github.com/rohitblpprajapat/Sahay-Ai",
    demo: "#"
  },
  {
    title: "AI Healthcare Chatbot",
    description: "End-to-end healthcare assistance chatbot built with Flask. Features conversational AI for medical inquiries and integrated live demo capabilities.",
    tech: ["Python", "Flask", "NLP", "React"],
    image: "/healthcare-chatbot.png",
    github: "https://github.com/rohitblpprajapat/Ai-Healthcare-Chatbot",
    demo: "#"
  }
];

const seProjects = [
  {
    title: "Vehicle Parking Management",
    description: "A comprehensive multiuser system for managing parking lots and spots. Features real-time availability, Flask-Security, Celery tasks, and Redis caching.",
    tech: ["Flask", "Vue.js 3", "Redis", "Celery", "PostgreSQL"],
    image: "/parking-app.png",
    github: "https://github.com/rohitblpprajapat/vehicle-parking-app",
    demo: "#"
  },
  {
    title: "TOMATO - Food Ordering",
    description: "MERN stack-powered food delivery website with secure JWT authentication, Stripe payments, and dedicated user and admin panels.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    image: "/food-delivery.png",
    github: "https://github.com/rohitblpprajapat/Food-Delivery",
    demo: "https://food-delivery-frontend-s2l9.onrender.com/"
  },
  {
    title: "FreshCorner Grocery Store",
    description: "Full-stack grocery application with structured DB schema and RESTful APIs. Empowers customers to browse and buy products with inventory management.",
    tech: ["Flask", "SQLite", "Bootstrap", "Swagger", "REST API"],
    image: "/grocery-store.png",
    github: "https://github.com/rohitblpprajapat/grocery-store",
    demo: "#"
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"ds" | "se">("ds");

  return (
    <main>
      <Navbar />
      
      <Hero />
      
      <motion.section 
        id="about" 
        className="bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <h2 style={{ marginBottom: "1.5rem" }}>About Me</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Currently pursuing a <strong>Bachelor’s degree in Data Science and Applications at IIT Madras</strong>, with an expected graduation in December 2025. I have gained hands-on experience as a <strong>Software Developer Intern at SahayAI</strong>, focusing on front-end development and Vue.js applications.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Beyond technical development, I've showcased organizational and project management skills as an event coordinator at <strong>Paradox, IIT Madras</strong>. I am committed to continuous learning, holding certifications in <strong>AI Agents Fundamentals</strong> by Hugging Face and participating in the <strong>Aspire Leaders Program</strong>.
            </p>
            <p>
              My goal is to drive innovation in the field of data science and web development by building efficient, scalable, and user-centric solutions.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 style={{ marginBottom: "3rem" }}>Work Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", left: "-6px", top: "0", width: "10px", height: "10px", backgroundColor: "var(--accent)", borderRadius: "50%" }}></div>
              <h3 style={{ marginBottom: "0.25rem" }}>Software Developer Internship</h3>
              <p style={{ fontWeight: 600 }}>SahayAI</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>June 2025 - July 2025 | Bengaluru, India</p>
              <p style={{ marginTop: "0.75rem", maxWidth: "750px" }}>
                Focused on front-end development and applications of Vue.js. Contributed to building intuitive user interfaces and optimizing web application performance.
              </p>
            </div>
            
            <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", left: "-6px", top: "0", width: "10px", height: "10px", backgroundColor: "var(--border)", borderRadius: "50%" }}></div>
              <h3 style={{ marginBottom: "0.25rem" }}>Event Coordinator</h3>
              <p style={{ fontWeight: 600 }}>Paradox, IIT Madras</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>June 2022 - June 2022 | Chennai, India</p>
              <p style={{ marginTop: "0.75rem", maxWidth: "750px" }}>
                Coordinated events for Paradox, demonstrating strong organizational, communication, and project management skills within a high-pressure environment.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="projects"
        className="bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2 style={{ marginBottom: 0 }}>Featured Projects</h2>
            <div style={{ 
              display: "flex", 
              backgroundColor: "var(--background)", 
              padding: "0.25rem", 
              borderRadius: "100px",
              border: "1px solid var(--border)"
            }}>
              <button
                onClick={() => setActiveTab("ds")}
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "100px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: activeTab === "ds" ? "var(--secondary)" : "transparent",
                  color: activeTab === "ds" ? "var(--foreground)" : "var(--muted-foreground)",
                  boxShadow: activeTab === "ds" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
                  transition: "all 0.2s ease"
                }}
              >
                Data Science & AI
              </button>
              <button
                onClick={() => setActiveTab("se")}
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "100px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: activeTab === "se" ? "var(--secondary)" : "transparent",
                  color: activeTab === "se" ? "var(--foreground)" : "var(--muted-foreground)",
                  boxShadow: activeTab === "se" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
                  transition: "all 0.2s ease"
                }}
              >
                Software Engineering
              </button>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}
          >
            {(activeTab === "ds" ? dsProjects : seProjects).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 style={{ marginBottom: "3rem" }}>Skills & Expertise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
            <div>
              <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Programming</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>Python <span style={{ fontSize: "0.8rem", color: "var(--accent)" }}>Expert</span></li>
                <li>JavaScript / TypeScript</li>
                <li>Vue.js / React</li>
                <li>SQL (Advanced)</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Data Science</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li>Machine Learning (Hugging Face)</li>
                <li>GenAI & AI Agents</li>
                <li>Statistical Modeling</li>
                <li>Big Data Analytics</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>Certifications</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li>AI Agents Fundamentals</li>
                <li>Aspire Leaders Program</li>
                <li>SQL (Intermediate & Advanced)</li>
                <li>Intro to Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="education"
        className="bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2 style={{ marginBottom: "3rem" }}>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "2rem", position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                left: "-7px", 
                top: "0", 
                width: "12px", 
                height: "12px", 
                backgroundColor: "var(--accent)", 
                borderRadius: "50%",
                boxShadow: "0 0 0 4px var(--secondary)"
              }}></div>
              <h3 style={{ marginBottom: "0.25rem", fontSize: "1.5rem" }}>BS in Data Science and Applications</h3>
              <p style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Indian Institute of Technology Madras (IITM)</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>2021 - 2025 (Dec)</p>
              <p style={{ maxWidth: "750px" }}>
                Specializing in AI and Machine Learning. Relevant coursework includes Computational Thinking, Statistical Modeling, Machine Learning foundations, and Database Management Systems.
              </p>
            </div>

            <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "2rem", position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                left: "-7px", 
                top: "0", 
                width: "12px", 
                height: "12px", 
                backgroundColor: "var(--border)", 
                borderRadius: "50%",
                boxShadow: "0 0 0 4px var(--secondary)"
              }}></div>
              <h3 style={{ marginBottom: "0.25rem", fontSize: "1.3rem" }}>Senior Secondary - Science & Maths</h3>
              <p style={{ color: "var(--foreground)", fontWeight: 600 }}>Sangam School of Excellence</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>2019 - 2021</p>
            </div>
            
            <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "2rem", position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                left: "-7px", 
                top: "0", 
                width: "12px", 
                height: "12px", 
                backgroundColor: "var(--border)", 
                borderRadius: "50%",
                boxShadow: "0 0 0 4px var(--secondary)"
              }}></div>
              <h3 style={{ marginBottom: "0.25rem", fontSize: "1.1rem" }}>Secondary Schooling</h3>
              <p style={{ color: "var(--foreground)", fontWeight: 600 }}>Jawahar Navodaya Vidyalaya (JNV)</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>2014 - 2019</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Get In Touch</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 3rem" }}>
            I am always open to discussing new opportunities, collaborations, or just talking about tech and data science. Reach out!
          </p>
          
          <ContactForm />

          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "4rem" }}>
            <a href="https://linkedin.com/in/hitrohit" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted-foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/rohitblpprajapat" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted-foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://peerlist.io/hitrohit" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted-foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}>
              <Mail size={20} /> Peerlist
            </a>
            <a href="mailto:rohitblpprajapat@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted-foreground)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}>
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </motion.section>

      <footer style={{ padding: "4rem 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <p style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Rohit Prajapat<span className="text-accent">.</span></p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
          Made with excellence at IIT Madras.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", marginTop: "1rem" }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </main>
  );
}
