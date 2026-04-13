"use client";

export default function Footer() {
    return (
        <footer
        className="w-full flex flex-col items-center justify-center py-8 gap-2"
        >
        <p
            className="font-mono text-xs"
            style={{ color: "var(--text-muted)" }}
        >
            Designed & Built by Na Yoon Kang
        </p>
        <p
            className="font-mono text-xs"
            style={{ color: "var(--text-muted)" }}
        >
            © {new Date().getFullYear()}
        </p>
        </footer>
    );
}