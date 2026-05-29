import React from "react";
import data from "./data";

const links = data.Links;

function Footer() {
    return (
        <footer className="site-footer">
            <p>
                Designed & Built by{" "}
                <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Ayush Raj
                </a>
            </p>
        </footer>
    );
}

export default Footer;
