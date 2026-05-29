import React, { useState } from "react";
import data from "./data.js";

function ExperienceSection() {
    const [expanded, setExpanded] = useState(0);
    const experiences = data["Experiences"];

    return (
        <section id="experience" className="portfolio-section">
            <h2 className="section-title">
                <span className="section-number">01.</span> Experience
                <span className="section-line" />
            </h2>
            <div className="exp-layout">
                <div className="exp-tabs">
                    {experiences.map((exp, idx) => (
                        <button
                            key={idx}
                            className={`exp-tab ${expanded === idx ? "active" : ""}`}
                            onClick={() => setExpanded(idx)}
                        >
                            <span className="exp-tab-company">{exp.company}</span>
                            {exp.current && <span className="exp-tab-badge">Now</span>}
                        </button>
                    ))}
                </div>
                <div className="exp-panel">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className={`exp-content ${expanded === idx ? "visible" : "hidden"}`}
                        >
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-role">
                                        {exp.title}{" "}
                                        <span className="exp-company-name">@ {exp.company}</span>
                                    </h3>
                                    <p className="exp-meta">
                                        <span className="exp-time">{exp.time}</span>
                                        <span className="exp-sep">·</span>
                                        <span className="exp-location">{exp.location}</span>
                                    </p>
                                </div>
                                {exp.current && (
                                    <span className="current-badge">Current</span>
                                )}
                            </div>
                            <ul className="exp-bullets">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="exp-tags">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="education-card">
                <div className="edu-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                </div>
                <div className="edu-body">
                    {data["Education"].map((edu, idx) => (
                        <div key={idx}>
                            <h3 className="edu-title">{edu.title}</h3>
                            <p className="edu-degree">{edu.subtitle}</p>
                            <p className="edu-meta">
                                <span>{edu.time}</span>
                                <span className="exp-sep">·</span>
                                <span>{edu.location}</span>
                                <span className="exp-sep">·</span>
                                <span className="accent">{edu.summary}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectsSection() {
    const projects = data["Projects"];

    return (
        <section id="projects" className="portfolio-section">
            <h2 className="section-title">
                <span className="section-number">03.</span> Projects
                <span className="section-line" />
            </h2>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <div className="project-card-top">
                            <span className="project-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </span>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-summary">{project.summary}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ResearchSection() {
    const papers = data["Published Research Paper"];
    const articles = data["Published Articles"];

    return (
        <section id="research" className="portfolio-section">
            <h2 className="section-title">
                <span className="section-number">04.</span> Research & Writing
                <span className="section-line" />
            </h2>

            <div className="research-block">
                <h3 className="research-sub-heading">
                    <span className="accent">—</span> Published Research
                </h3>
                {papers.map((paper, idx) => (
                    <a
                        key={idx}
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication-card featured"
                    >
                        <div className="pub-card-inner">
                            <div className="pub-venue">{paper.subtitle}</div>
                            <h4 className="pub-title">{paper.title}</h4>
                            <p className="pub-summary">{paper.summary}</p>
                            <span className="pub-link-label">
                                View on ACM Digital Library
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="research-block">
                <h3 className="research-sub-heading">
                    <span className="accent">—</span> Technical Articles
                </h3>
                <div className="articles-grid">
                    {articles.map((article, idx) => (
                        <a
                            key={idx}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-card"
                        >
                            <div className="pub-card-inner">
                                <div className="pub-venue">{article.subtitle}</div>
                                <h4 className="pub-title">{article.title}</h4>
                                <p className="pub-summary">{article.summary}</p>
                                <span className="pub-link-label">
                                    Read article
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DataAccordion() {
    return (
        <>
            <ExperienceSection />
            <ProjectsSection />
            <ResearchSection />
        </>
    );
}

export default DataAccordion;
