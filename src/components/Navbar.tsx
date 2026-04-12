"use client";

import {useState, useEffect} from "react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <style>{`
            @keyframes nav-fade-in {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            .nav-fade {
                opacity: 0;
                animation: nav-fade-in 0.5s ease forwards;
                animation-delay: 0.3s;
            }
        `}</style>
        
        <header
            className="nav-fade fixed top-0 w-full z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled ? "rgba(245, 240, 232, 0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            }}
        >
            <nav className="w-full px-6 md:px-16 lg:px-32 flex items-center justify-between h-16">

                {/* Logo */}
                <a
                    href="#hero"
                    className="font-mono text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                    style={{ color: "var(--text-primary)" }}
                >
                    nyk.
                </a>

                {/* Desktop nav links */}
                <ul className="flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-mono text-sm transition-colors duration-200"
                                style={{ color: "var(--text-muted)" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color =
                                    "var(--text-primary)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color =
                                    "var(--text-muted)";
                                }}
                                >
                            {link.label}
                            </a>
                        </li>
                    ))}

                    {/* Resume button */}
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm px-4 py-2 rounded border transition-all duration-200"
                            style={{
                                color: "var(--text-primary)",
                                borderColor: "var(--border)",
                                backgroundColor: "transparent",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-hover)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                            }}
                        >
                            Resume
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
        </>
    );


}