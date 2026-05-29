import React from "react";
import data from "./data.js";

const skillCategoryIcons = {
    "Languages": "⟨/⟩",
    "Backend & Distributed": "⚡",
    "Databases": "🗄",
    "Infrastructure": "☁",
    "Frameworks": "🔧",
    "Payments": "💳",
};

function Skills() {
    const skills = data["Skills"];

    return (
        <section id="skills" className="portfolio-section">
            <h2 className="section-title">
                <span className="section-number">02.</span> Technical Skills
                <span className="section-line" />
            </h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], idx) => (
                    <div key={idx} className="skill-card">
                        <div className="skill-card-header">
                            <span className="skill-icon">{skillCategoryIcons[category] || "◈"}</span>
                            <h3 className="skill-category">{category}</h3>
                        </div>
                        <div className="skill-tags">
                            {items.map((item, i) => (
                                <span key={i} className="skill-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
