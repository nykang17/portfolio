"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay, duration: 0.5 } 
},
});

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
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
                    01. about me
                </h2>
                <div
                    className="h-px w-48"
                    style={{ backgroundColor: "var(--border)" }}
                />
            </motion.div>

            {/* Two-column layout: text on the left, image on the right */}
            <div className="flex flex-row gap-16 items-start">

                {/* Left - Text content with fade-up animation */}
                <div className="flex flex-col gap-6 flex-1">
                    <motion.p
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-base leading-relaxed"
                        style={{color: "var(--text-secondary)"}}
                    >
                        Hey! I&apos;m Na Yoon — though most people call me{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            Kevin
                        </span>
                        . I&apos;m a software engineer who just graduated from{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            UCLA
                        </span>{" "}
                        with a degree in Computer Science.
                    </motion.p>

                    <motion.p
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-base leading-relaxed"
                        style={{color: "var(--text-secondary)"}}
                    >
                        My interest in coding started back in middle school, when I spent hours making games on{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            Scratch
                        </span>
                        . There was something addictive about the idea that you could dream something up and then just... build it.
                    </motion.p>

                    <motion.p
                        variants={fadeUp(0.3)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Since then, I&apos;ve chased that curiosity across a pretty wide range of projects, from{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            multiplayer web apps
                        </span>{" "}
                        and{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            3D graphics
                        </span>{" "}
                        to{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                            mobile apps wired up to Raspberry Pi hardware
                        </span>
                        . I like working across the stack and picking up whatever tools the problem calls for.
                    </motion.p>

                    <motion.p
                        variants={fadeUp(0.4)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Right now, I&apos;m actively looking for my first full-time role as a software engineer. If you think I&apos;d be a good fit for your team, I&apos;d
                        love to hear from you.
                    </motion.p>
                </div>

                {/* Right - Profile image*/}
                <motion.div
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex-shrink-0"
                >
                    <div
                        className="relative w-56 h-64 rounded overflow-hidden"
                        style={{ border: "1px solid var(--border)" }}
                    >
                        <Image
                            src="/images/profile.jpg"
                            alt="Na Yoon Kang"
                            fill
                            className="object-cover object-top"
                            sizes="224px"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )

}