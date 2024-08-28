import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";
import BookIcon from "@mui/icons-material/Book";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "./data.js";

function DataAccordion() {
    const badgeColors = ["warning", "info", "success", "error", "primary"];
    const len = badgeColors.length;

    const keyIcons = {
        "Experiences": <WorkIcon sx={{ color: "#fff", mr: 1 }} />,
        "Education": <SchoolIcon sx={{ color: "#fff", mr: 1 }} />,
        "Projects": <BuildIcon sx={{ color: "#fff", mr: 1 }} />,
        "Published Research Paper": <BookIcon sx={{ color: "#fff", mr: 1 }} />,
        "Published Articles": <ArticleIcon sx={{ color: "#fff", mr: 1 }} />,
    };

    return (
        <div>
            {Object.keys(data).map((key, index) => (
                <Accordion key={index} sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    marginBottom: '20px'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}>
                       
                        {keyIcons[key]}
                        <Typography sx={{ color: "#fff" }}>{key}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stepper orientation="vertical">
                            {data[key].map((item, subIndex) => (
                                <Step key={subIndex} active>
                                    <StepLabel  >
                                    <Typography sx={{ color: "white"}}>
                                    {item.title} {item.time}{" "}
                                       
                                        
                                        {item.url && (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                <i style={{color: "white"}} className="fa fa-external-link" aria-hidden="true"></i>
                                            </a>
                                        )}
                                         </Typography>
                                    </StepLabel>
                                    <StepContent sx={{
                                        mt: 2,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                                    }}>
                                        {item.subtitle.split(",").map((word, i) => (
                                            <Chip
                                                key={i}
                                                color={badgeColors[i % len]}
                                                sx={{ mr: 1, mb: 1 }}
                                                variant="filled"
                                                label={word}
                                            />
                                        ))}
                                        <Typography sx={{ mt: 2, color: "#64ffda" }}>
                                            {item.summary}
                                        </Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default DataAccordion;
