import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Resume() {
  // Array of programming skills and technologies
  const proficiencies = ["JavaScript", "React", "HTML", "CSS", "Node.js"];

  return (
    <section id="resume">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Resume</h2>
            {/* Button to download the resume PDF */}
            <a
              href=""
              download="Resume"
            >
              <Button variant="primary">Download Resume</Button>
            </a>

            <h3>Proficiencies</h3>
            {/* List of programming skills */}
            <ul>
              {/* Loop through the proficiencies array and display each skill in a list item */}
              {proficiencies.map((proficiency, index) => (
                <li key={index}>{proficiency}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
