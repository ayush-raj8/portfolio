import React from "react";
import pic from "../assests/pic.png";
import data from "./data";

const links = data.Links;

function Starter() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-name">Ayush Raj.</h1>
                    <h2 className="hero-tagline">Software Developer.</h2>
                    <p className="hero-bio">
                        Currently at <span className="accent">Nutanix</span>,
                        working on distributed microservices, high-throughput
                        telemetry pipelines, and network security policy systems.
                        I work primarily in <span className="accent">Go</span> and{" "}
                        <span className="accent">Python</span>, with a focus on
                        reliability, observability, and scalable architecture.
                    </p>
                    <div className="hero-meta">
                        <span className="hero-location">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            Bengaluru, Karnataka, India
                        </span>
                        <span className="hero-status">
                            <span className="status-dot" /> Available for opportunities
                        </span>
                    </div>
                    <div className="hero-actions">
                        <a
                            href={`mailto:${links.email}`}
                            className="btn-primary"
                        >
                            Get In Touch
                        </a>
                        <div className="hero-socials">
                            <a
                                href={links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a
                                href={links.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Medium"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-image-wrap">
                    <div className="hero-image-frame">
                        <img src={pic} alt="Ayush Raj" className="hero-photo" />
                    </div>
                </div>
            </div>
            <div className="hero-scroll-hint">
                <span>scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}

export default Starter;
