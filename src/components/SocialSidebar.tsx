"use client";
 
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
 
const linkStyles = {
    color: "var(--text-muted)",
    transition: "color 0.2s, transform 0.2s",
};
 
function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        aria-label={label}
        style={linkStyles}
        onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0px)";
        }}
        >
        {children}
        </a>
    );
}
 
export default function SocialSidebar() {
    return (
        <>
        <style>{`
            @keyframes sidebar-fade-in {
            from { opacity: 0; }
            to   { opacity: 1; }
            }
            .sidebar-fade {
            opacity: 0;
            animation: sidebar-fade-in 0.5s ease forwards;
            animation-delay: 0.8s;
            }
        `}</style>

        <div className="sidebar-fade fixed right-8 bottom-0 flex flex-col items-center gap-5 z-50">
        <SocialLink href="https://github.com/nykang17" label="GitHub">
            <FiGithub size={18} />
        </SocialLink>
    
        <SocialLink href="https://linkedin.com/in/na-yoon-kang-b89376330/" label="LinkedIn">
            <FiLinkedin size={18} />
        </SocialLink>
    
        <SocialLink href="mailto:nykang17@gmail.com" label="Email">
            <FiMail size={18} />
        </SocialLink>
    
        {/* Vertical line */}
        <div
            className="w-px h-24"
            style={{ backgroundColor: "var(--border)" }}
        />
        </div>
    </>
    );
}