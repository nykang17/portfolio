"use client";

import { motion, useInView } from "framer-motion";
import {useRef} from "react";

const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
    transition: { delay, duration: 0.5 } 
    },
});

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section
            id="contact"
            ref={ref}
            className="flex flex-col mx-auto px-6 md:px-16 lg:px-32 max-w-5xl py-24"
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
                    04. contact
                </h2>
                <div className="h-px w-48" style={{ backgroundColor: "var(--border)" }} />
            </motion.div>

            <div className="max-w-lg">
                <motion.h3
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-3xl font-medium mb-4"
                    style={{ color: "var(--text-primary)" }}
                >
                    Get in Touch
                </motion.h3>
        
                <motion.p
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "var(--text-secondary)" }}
                >
                    I&apos;m currently looking for new opportunities and my inbox is always open.
                    Whether you have a role in mind or just want to say hi, I&apos;d love to hear from you.
                </motion.p>
        
                <motion.a
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    href="mailto:nykang17@gmail.com"
                    className="font-mono text-sm px-6 py-3 rounded border inline-block transition-all duration-200"
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
                    Say Hello ↗
                </motion.a>
            </div>
        
        </section>
    );
};