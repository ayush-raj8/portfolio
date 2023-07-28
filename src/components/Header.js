import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'
import data1 from './data';
import profilePic from './pic.jpeg';

import html2pdf from 'html2pdf.js';

function generateResume() {

    // Preprocess experiences to group experiences with the same title
    const groupedExperiences = data1.Experiences.reduce((acc, experience) => {
      const existingExperience = acc.find((item) => item.title === experience.title);
      if (existingExperience) {
        existingExperience.subExperiences.push({ subtitle: experience.subtitle, time: experience.time,summary:experience.summary });
      } else {
        acc.push({
          title: experience.title,
          subExperiences: [{ subtitle: experience.subtitle, time: experience.time,summary:experience.summary }],
          summary: experience.summary,
        });
      }
      return acc;
    }, []);

     // Function to check if an article has a link
  function hasLink(article) {
    return article.url && article.url !== "";
  }

  // Function to get the font-awesome icon for a link
  function getLinkIcon() {
    return '<i class="fas fa-external-link-alt"></i>';
  }

    console.log(groupedExperiences)
  const resumeContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="display: flex; align-items: center; background-color: #1d2026; padding: 10px;">
      <div style="flex: 1;">
        <img src="${profilePic}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;">
      </div>
      <div style="flex: 1; text-align: right;">
        <p style="color: #8FEBDF; font-size: 20px; font-weight: bold; margin-bottom: 2px;"> Ayush Raj</p>
        <p style="color: #e7e7f4; font-size: 8px; margin-bottom: 2px;">Software Developer,Nutanix</p>
        <p style="color: #e7e7f4; font-size: 8px;margin-bottom: 2px;">ayushraj763@gmail.com</p>
        <p style="color: #e7e7f4; font-size: 8px; margin-bottom: 2px;">BITS Pilani, Goa</p>
        <p style="color: #e7e7f4; font-size: 8px;margin-bottom: 2px;">B.E Computer Science and MSc. Chemistry</p>
        <p style="color: #e7e7f4; font-size: 8px; margin-bottom: 2px;">2018-2023</p>
        <p style="font-weight: bold; font-size: 8px; color: #ffffff;">CGPA: 8.55/10.0</p>
        <!-- Flexbox container for the icons -->
        <div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 5px;">
          <!-- LinkedIn icon with link -->
          <a href="https://www.linkedin.com/in/ayush-raj-3427b71ab/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff; margin-right: 5px;">
            <i class="fab fa-linkedin"></i>
          </a>
          <!-- GitHub icon with link -->
          <a href="https://github.com/ayush-raj8" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff;">
            <i class="fab fa-github"></i>
          </a>
          <!-- Medium icon with link -->
          <a href="https://medium.com/@ayushraj763" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff;">
            <i class="fab fa-medium"></i>
          </a>
        </div>
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; margin-top: 20px;">
      <div style="flex: 1; margin-right: 20px; padding-left: 20px;">
        <h2 style="color: #007bff; font-size: 14px; font-style: italic;">Experience(s):</h2>
        <ul style="list-style: none; padding: 0;">

          ${groupedExperiences.map((experience) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${experience.title}</p>
              ${experience.subExperiences.map((subExp) => (
                `<div>
                    <p style="font-size: 10px; color: #666; font-weight: bold; margin-bottom: 2px;">${subExp.subtitle} | ${subExp.time}</p>
                    <p style="font-size: 8px; margin-bottom: 4px;">${subExp.summary}</p>
                  </div>`
              )).join('')}
            </li>`
          )).join('')}
        </ul>

        <h2 style="color: #007bff; font-size: 14px; font-style: italic; margin-top: 20px;">Project(s):</h2>
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
        <h2 style="color: #007bff; font-size: 14px; font-style: italic;">Published Research Paper(s):</h2>
        <ul style="list-style: none;  padding: 0;">
          ${data1["Published Research Papers"].map((paper) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px; style="text-decoration: none;">  ${ paper.title} ${hasLink(paper) ? `<a href="${paper.url}" target="_blank" > ${getLinkIcon()}</a>` :''}</p>
              <p style="font-size: 10px; color: #666;  margin-bottom: 4px;">${paper.subtitle}</p>
              <p style="font-size: 8px;">${paper.summary}</p>
            </li>`
          )).join('')}
        </ul>

        <h2 style="color: #007bff; font-size: 14px; font-style: italic; margin-top: 20px;">Published Article(s):</h2>
        <ul style="list-style: none; padding: 0;">
          ${data1["Published Articles"].map((article) => (
            `<li>
              <p style="font-size: 12px; font-weight: bold; margin-bottom: 4px;"> ${article.title} ${hasLink(article) ? `<a href="${article.url}" target="_blank" > ${getLinkIcon()}</a>` : ''}</p>
              <p style="font-size: 10px; color: #666;  margin-bottom: 4px;">${article.subtitle}</p>
              <p style="font-size: 8px;">${article.summary}</p>
            </li>`
          )).join('')}
        </ul>
      </div>
    </div>
  </div>
`;

// Show the message if in LinkedIn in-app browser
if (isLinkedInInAppBrowser()) {
  const messageEl = document.getElementById('in-app-browser-message');
  if (messageEl) {
    messageEl.style.display = 'block';
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 3000); // Hide the message after 3 seconds
  }
}
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

function isLinkedInInAppBrowser() {
  const userAgent = window.navigator.userAgent;
  return /linkedin/.test(userAgent.toLowerCase());
}

function Header() {

  
  
  return (
    <>
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

    <div
        id="in-app-browser-message"
        className="position-fixed bottom-0 end-0 p-3 bg-danger text-white"
        style={{ display: 'none', zIndex: 9999 }}
      >
        Downloading may not work in the in-app browser on LinkedIn.
      </div>
    
  </>
  )
}

export default Header
