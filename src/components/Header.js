import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'
import data1 from './data';
import profilePic from './pic.jpeg';

import html2pdf from 'html2pdf.js';

function generateResume() {

  const resumeContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="display: flex; align-items: center; background-color: #1d2026; padding: 10px;">
      <div style="flex: 1;">
        <img src="${profilePic}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;">
      </div>
      <div style="flex: 1; text-align: right;">
        <p style="color: #ffffff;">Email: ayushraj776633@gmail.com</p>
        <p style="color: #ffffff;">BITS Pilani, Goa Campus</p>
        <p style="color: #ffffff;">B.E in Computer Science and MSc. in Chemistry</p>
        <p style="font-weight: bold; color: #ffffff;">CGPA: 8.55/10.0</p>
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; margin-top: 20px;">
      <div style="flex: 1; margin-right: 20px; padding-left: 20px;">
        <h2 style="color: #007bff; font-size: 14px; font-style: italic;">Experiences:</h2>
        <ul style="list-style: none; padding: 0;">
          ${data1.Experiences.map((experience) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${experience.subtitle}, ${experience.title} | ${experience.time}</p>
              <p  style="font-size: 8px;">${experience.summary}</p>
            </li>`
          )).join('')}
        </ul>

        <h2 style="color: #007bff; font-size: 14px; font-style: italic; margin-top: 20px;">Projects:</h2>
        <ul style="list-style: none; padding: 0;">
          ${data1.Projects.map((project) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${project.title}</p>
              <p style="font-size: 10px; color: #666;  margin-bottom: 4px;">${project.subtitle}</p>
              <p  style="font-size: 8px; ">${project.summary}</p>
            </li>`
          )).join('')}
        </ul>
      </div>

      <div style="flex: 1; margin-right: 20px; padding-left: 20px;">
        <h2 style="color: #007bff; font-size: 14px; font-style: italic;">Published Research Papers:</h2>
        <ul style="list-style: none;  padding: 0;">
          ${data1["Published Research Papers"].map((paper) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${paper.title}</p>
              <p style="font-size: 8px;">${paper.summary}</p>
            </li>`
          )).join('')}
        </ul>

        <h2 style="color: #007bff; font-size: 14px; font-style: italic; margin-top: 20px;">Published Articles:</h2>
        <ul style="list-style: none; padding: 0;">
          ${data1["Published Articles"].map((article) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${article.title}</p>
              <p style="font-size: 8px;">${article.summary}</p>
            </li>`
          )).join('')}
        </ul>
      </div>
    </div>
  </div>
`;

  // Create a new div element to render the resume content
  const resumeDiv = document.createElement('div');
  resumeDiv.innerHTML = resumeContent;

  // Add CSS styles to preserve indentation
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    /* Add your desired CSS styles here to preserve indentation */
    /* For example, use padding or margin to add indentation */
    .indent {
      padding-left: 20px; /* Adjust the value as needed */
    }
    em {
      font-style: italic;
    }
  `;
  document.head.appendChild(styleElement);

  // Apply the "indent" class to elements that need indentation
  const indentElements = resumeDiv.querySelectorAll('.indent');
  indentElements.forEach((element) => {
    element.classList.add('indent');
  });

  // Generate the PDF using html2pdf.js
  if (resumeDiv) {
    html2pdf().from(resumeDiv).save('Ayush_Raj_Bits_Goa_Nutanix.pdf');
  }

  // Remove the added style element to avoid conflicts
  document.head.removeChild(styleElement);
}


function generateResume1() {

  const resumeContent = `
  Curriculum Vitae

  Email: ayushraj776633@gmail.com
  BITS Pilani, Goa Campus
  Bachelor of Engineering in Computer Science and Master of Sciences in Chemistry
  CGPA: 8.55/10.0

  Experiences:
  ${data1.Experiences.map((experience) => (
    `${experience.title}
    ${experience.subtitle}
    ${experience.summary}
    ${experience.time}`
  )).join('\n\n')}

  Projects:
  ${data1.Projects.map((project) => (
    `${project.title}
    ${project.subtitle}
    ${project.summary}`
  )).join('\n\n')}

  Published Research Papers:
  ${data1["Published Research Papers"].map((paper) => (
    `${paper.title}
    ${paper.subtitle}
    ${paper.summary}
    URL: ${paper.url}`
  )).join('\n\n')}

  Published Articles:
  ${data1["Published Articles"].map((article) => (
    `${article.title}
    ${article.subtitle}
    ${article.summary}
    URL: ${article.url}`
  )).join('\n\n')}
  `;

    // Create a new div element to render the resume content
    const resumeDiv = document.createElement('div');
    resumeDiv.innerHTML = resumeContent;
  
    // Add CSS styles to preserve indentation
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Add your desired CSS styles here to preserve indentation */
      /* For example, use padding or margin to add indentation */
      .indent {
        padding-left: 20px; /* Adjust the value as needed */
      }
    `;
    document.head.appendChild(styleElement);
  
    // Apply the "indent" class to elements that need indentation
    const indentElements = resumeDiv.querySelectorAll('.indent');
    indentElements.forEach((element) => {
      element.classList.add('indent');
    });
  
    // Generate the PDF using html2pdf.js
    if (resumeDiv) {
      html2pdf().from(resumeDiv).save('Resume.pdf');
    }
  
    // Remove the added style element to avoid conflicts
    document.head.removeChild(styleElement);
    
/*
  // Create a Blob from the resume content
  const blob = new Blob([resumeContent], { type: 'text/html' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an anchor element with the URL
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Resume.txt'; // Set the desired file name with extension

  // Append the anchor element to the document and click it to trigger the download
  document.body.appendChild(a);
  a.click();

  // Remove the anchor element from the document
  document.body.removeChild(a);
*/


/*
  // Create a new div element to render the resume content
  const resumeDiv = document.createElement('div');
  resumeDiv.innerHTML = resumeContent;

  // Generate the PDF using html2pdf.js
  if (resumeDiv) {
    html2pdf().from(resumeDiv).save('Resume.pdf');
  }
  */
}

function Header() {
  
  return (
    <Navbar variant='dark' bg="dark" expand="lg" collapseOnSelect >
      <Container fluid>
        <Navbar.Brand href="/">Ayush Raj </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://www.linkedin.com/in/ayush-raj-3427b71ab/" target="_blank" ><i className="fab fa-linkedin-in" ></i> </Nav.Link>
            <Nav.Link href="https://medium.com/@ayushraj763" target="_blank"><i className="fab fa-medium" ></i> </Nav.Link>
            <Nav.Link href="https://github.com/ayush-raj8" target="_blank"><i className="fab fa-github" ></i> </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={generateResume}><i className="fas fa-file-download"></i> Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
