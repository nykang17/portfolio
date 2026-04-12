"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-5xl mx-auto"
    >
      <motion.p
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="visible"
        className="font-mono mb-5 text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        Hi there, I&apos;m
      </motion.p>

      <motion.h1
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        Hi, I&apos;m Na Yoon.
      </motion.h1>

      <motion.h2
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-semibold mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        Fresh grad. Hungry to build.
      </motion.h2>

      <motion.p
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="visible"
        className="max-w-xl text-base leading-relaxed mb-10"
        style={{ color: "var(--text-secondary)" }}
      >
        I&apos;m a CS grad from UCLA who loves turning ideas into real, working software and learning new things along the way. 
        I am actively looking for my first full-time role where I can contribute from
        day one and keep growing fast.
      </motion.p>

      <motion.div
        variants={fadeUp(0.5)}
        initial="hidden"
        animate="visible"
        className="flex gap-4 flex-wrap"
      >
        <a
          href="#projects"
          className="font-mono text-sm px-6 py-3 rounded border transition-all duration-300"
          style={{
            color: "var(--text-primary)",
            borderColor: "var(--accent)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "var(--accent-hover)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
          }}
        >
          See what I have built
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm px-6 py-3 rounded border transition-all duration-300"
          style={{
            color: "var(--text-secondary)",
            borderColor: "var(--border)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "var(--border-hover)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
          }}
        >
          View Résumé
        </a>
      </motion.div>
    </section>
  );
}
