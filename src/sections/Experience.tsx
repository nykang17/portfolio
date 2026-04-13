"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Daily Bruin",
        team: "Main Sites Team",
        date: "Oct. 2025 - Mar. 2026",
        bullets: [
            "Developed and maintained full-stack features for dailybruin.com, serving 60,000+ weekly readers using React and Node.js.",
            "Collaborated with a cross-functional team in weekly meetings to design, implement, and deploy new projects for the main news site.",
            "Worked with deployment infrastructure including Kubernetes, servers, and databases to scale production applications.",
            "Refactored and upgraded the existing codebase to improve site design, layout, and performance for student readership.",
        ],
    },
    {
        title: "Software & AI Engineer Intern",
        company: "Twelverays",
        date: "Jun. 2025 - Aug. 2025",
        bullets: [
            "Built an AI-powered research assistant by integrating the OpenRouter API into n8n workflows, automatically generating company research briefs from upcoming Google Calendar meetings and delivering them via Slack — saving interview teams 30+ minutes of manual prep per lead.",
            "Led the full lifecycle of an internal HR chatbot project (requirements → design → deployment), enabling 100% of employees to quickly access HR policy and benefits information through Slack.",
            "Optimized automation pipelines by integrating APIs (Google Calendar, Slack, OpenAI, OpenRouter), resulting in more reliable and scalable workflows used by multiple cross-functional teams.",
            "Enhanced AI-driven automation by fine-tuning prompts for two workflows, boosting response accuracy to ~85–90% and reducing the need for manual corrections.",
        ],
    }
];

const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
    transition: { delay, duration: 0.5 } 
    },
});

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section
            id="experience"
            ref={ref} 
            className="flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-5xl py-24 mx-auto"
        >
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
                    02. experience
                </h2>
                <div
                    className="h-px w-48"
                    style={{ backgroundColor: "var(--border)" }}
                />
            </motion.div>

            <div className="flex flex-col gap-16">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        variants={fadeUp(0.1 * (i + 0.1))}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/*Title + company*/}
                        <h3
                            className="text-lg font-medium mb-1"
                        >
                            {exp.title}{" "}
                            <span style={{ color: "var(--text-muted)" }}>@ {exp.company}</span>
                        </h3>

                        {/*Team (if applicable)*/}
                        {exp.team && (
                            <p
                                className="font-mono text-sm mb-1"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {exp.team}
                            </p>
                        )}

                        {/*Date*/}
                        <p
                            className="font-mono text-sm mb-5"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {exp.date}
                        </p>

                        {/*Bullets*/}
                        <ul className="flex flex-col gap-3">
                            {exp.bullets.map((bullet, j) => (
                                <li
                                    key={j}
                                    className="flex text-sm leading-relaxed gap-3"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    <span 
                                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: "var(--text-muted)" }}
                                    />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                        
                    </motion.div>

                ))}
            </div>
        </section>
    )

}