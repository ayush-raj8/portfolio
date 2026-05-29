import React from "react";
import data from "./data";

const links = data.Links;

const GetInTouch = () => {
    const handleEmail = () => {
        const subject = encodeURIComponent("Hello from your portfolio");
        const body = encodeURIComponent("Hi Ayush,\n\n");
        window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="contact-section">
            <p className="contact-overline">
                <span className="section-number">05.</span> What's Next?
            </p>
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-body">
                I'm currently open to new opportunities. Whether you have a role in
                mind, a project to discuss, or just want to connect — my inbox is
                always open.
            </p>
            <div className="contact-actions">
                <button className="btn-primary" onClick={handleEmail}>
                    Say Hello
                </button>
                <div className="contact-socials">
                    <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
