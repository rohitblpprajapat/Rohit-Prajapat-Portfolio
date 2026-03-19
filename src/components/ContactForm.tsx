"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.5rem" }}>Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.5rem" }}>Email</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.5rem" }}>Message</label>
        <textarea
          required
          rows={5}
          placeholder="I'd like to talk about..."
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            resize: "vertical",
          }}
        />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "var(--radius)",
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transition: "opacity 0.2s ease",
        }}
      >
        {status === "idle" && <><Send size={18} /> Send Message</>}
        {status === "sending" && "Sending..."}
        {status === "success" && "Message Sent!"}
      </button>
      
      <style jsx>{`
        @media (max-width: 640px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  );
}
