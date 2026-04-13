"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Grow-a-gatchi",
        description:
            "A cross-platform mobile app that gamifies indoor plant care. Water your real plant, and your virtual Tamagotchi-style sprite reacts — powered by a Raspberry Pi 5 that detects physical watering events and syncs them to the app in real time.",
        tech: ["React Native", "Expo", "TypeScript", "Firebase", "Raspberry Pi 5"],
        image: "/images/projects/grow-a-gatchi.png",
        github: "https://github.com/nykang17/grow-a-gatchi",
    },
    {
        title: "Gartic Band",
        description:
            "A multiplayer music composition game where players collaborate in real time to build songs together. Each player controls part of a sequencer, and the result is a shared piece of music — chaotic, fun, and surprisingly creative.",
        tech: ["Svelte", "Node.js", "Express", "Socket.io", "Tailwind CSS", "PostgreSQL"],
        image: "/images/projects/gartic-band.png",
        github: "https://github.com/nykang17/garticband",
    },
    
];

const olderProjects = [
    {
        title: "Bruin Market",
        description:
            "A full-stack e-commerce platform built for UCLA students to buy and sell items on campus. Includes real-time chat between buyers and sellers, Google sign-in, and a NoSQL database for managing listings and user accounts.",
        tech: ["React", "Node.js", "JavaScript", "Firebase", "CSS"],
        image: "/images/projects/bruin-market.png",
        github: "https://github.com/nykang17/BruinMarket",
    },
    {
        title: "3D Tank Trouble",
        description:
            "A 3D remake of the classic browser game Tank Trouble, built from scratch using TinyGraphics. Features keyboard-controlled tanks, collision detection, camera controls, and sound effects — all running in the browser.",
        tech: ["JavaScript", "TinyGraphics"],
        image: "/images/projects/3d-tank-trouble.png",
        github: "https://github.com/nykang17/CS174A_TankTrouble",
    },
];

const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
    transition: { delay, duration: 0.5 } 
    },
});

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="projects"
            ref={ref}
            className="flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-5xl py-24 mx-auto"
            >
                {/*featured projects*/}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2
                        className="font-mono text-sm whitespace-nowrap"
                        style={{ color: "var(--text-muted)" }}
                    >
                        03. projects
                    </h2>
                    <div
                        className="h-px w-48"
                        style={{ backgroundColor: "var(--border)" }}
                    />
                </motion.div>

                <div className="flex flex-col gap-24 mb-24">
                    {projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={project.title}
                                variants={fadeUp(0.1 + i * 0.05)}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="flex flex-row gap-12 items-center"
                                style={{ flexDirection: isEven ? "row" : "row-reverse" }}
                            >

                            {/* Image */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-80 h-52 relative rounded overflow-hidden group"
                                style={{ border: "1px solid var(--border)" }}
                            >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="320px"
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                                style={{ backgroundColor: "rgba(245, 240, 232, 0.7)" }}
                            >
                            <span
                                className="font-mono text-xs"
                                style={{ color: "var(--text-primary)" }}
                            >
                                View on GitHub ↗
                            </span>
                            </div>
                            </a>

                            {/* Text */}
                            <div className="flex flex-col gap-4 flex-1">
                                <h3
                                className="text-xl font-medium"
                                style={{ color: "var(--text-primary)" }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                className="text-sm leading-relaxed"
                                style={{ color: "var(--text-secondary)" }}
                                >
                                    {project.description}
                                </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-xs px-2 py-1 rounded"
                                        style={{
                                        color: "var(--text-muted)",
                                        backgroundColor: "var(--bg-secondary)",
                                        border: "1px solid var(--border)",
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub button */}
                            <div className="mt-2">
                                <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs px-4 py-2 rounded border inline-block transition-all duration-200"
                                style={{
                                    color: "var(--text-primary)",
                                    borderColor: "var(--border)",
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
                                    GitHub ↗
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    );
                    })}
                </div>
            
                {/*older projects*/}
                <motion.div
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-4 mb-10"
                >
                    <h2
                    className="font-mono text-sm whitespace-nowrap"
                    style={{ color: "var(--text-muted)" }}
                    >
                        03.5 older work
                    </h2>
                    <div className="h-px w-48" style={{ backgroundColor: "var(--border)" }} />
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                    {olderProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeUp(0.35 + i * 0.05)}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-col rounded overflow-hidden"
                            style={{ border: "1px solid var(--border)" }}
                        >
                            {/* Image */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-40 group flex-shrink-0"
                            >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="50vw"
                            />
                            <div
                                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                                style={{ backgroundColor: "rgba(245, 240, 232, 0.7)" }}
                            >
                                <span className="font-mono text-xs" style={{ color: "var(--text-primary)" }}>
                                View on GitHub ↗
                                </span>
                            </div>
                            </a>
                
                            {/* Text */}
                            <div className="flex flex-col gap-3 p-5">
                            <h3 className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                                {project.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="font-mono text-xs px-2 py-1 rounded"
                                    style={{
                                    color: "var(--text-muted)",
                                    backgroundColor: "var(--bg-secondary)",
                                    border: "1px solid var(--border)",
                                    }}
                                >
                                    {t}
                                </span>
                                ))}
                            </div>
                            <div className="mt-1">
                                <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs px-4 py-2 rounded border inline-block transition-all duration-200"
                                style={{
                                    color: "var(--text-primary)",
                                    borderColor: "var(--border)",
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
                                GitHub ↗
                                </a>
                            </div>
                            </div>
                        </motion.div>
                        ))}
                </div>

        </section>
    )
}