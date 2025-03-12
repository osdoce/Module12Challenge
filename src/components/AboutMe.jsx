import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Photo from "../assets/photo.png";

// Functional component to display the "About Me" section
function AboutMe() {
  return (
    <section className="text-dark p-3" style={{ backgroundColor: "white" }} id="about">
      {/* Container for the entire section */}
      <Container>
        {/* Row to organize the content into two columns */}
        <Row>
          {/* Column for the profile picture */}
          <Col md={4}>
            <img
              src={Photo}
              alt="Your Name"
              className="img-fluid rounded-circle"
            />
          </Col>
          {/* Column for the text content */}
          <Col md={8}>
            <h2>About Me</h2>
            <p>
            I am a marketing and digital communications professional with expertise in email marketing, CRM management, web development, and campaign optimization. My experience spans across corporate communications, marketing automation, and content strategy, helping brands enhance their digital presence and engagement.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
