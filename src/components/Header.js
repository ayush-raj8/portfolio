import React, { useState, useEffect } from "react";
import data from "./data";

const links = data.Links;

const NAV_LINKS = [
    { label: "Experience", href: "#experience", num: "01" },
    { label: "Skills", href: "#skills", num: "02" },
    { label: "Projects", href: "#projects", num: "03" },
    { label: "Research", href: "#research", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
];

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
        return () => document.body.classList.remove("menu-open");
    }, [menuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -60;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        } else if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-inner">
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => handleNavClick(e, "#hero")}
                >
                    <span className="logo-bracket">&lt;</span>
                    AR
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <div
                    className={`nav-backdrop ${menuOpen ? "visible" : ""}`}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />

                <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
                    <ol className="nav-list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    <span className="nav-num">{link.num}.</span>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <a
                        href={links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline nav-cta"
                    >
                        Resume
                    </a>
                </nav>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}

export default Header;
