import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  // Array of project objects containing details
  const projects = [
    {
      title: "Project1",
      image: "../../uno.png",
      description:
        "Description for Project1",
      liveLink:
        "https://drive.google.com/",
      githubLink: "https://github.com/osdoce",
    },

    {
      title: "Project2",
      image: "../../dos.png",
      description:
        "Description for Project2",
      liveLink:
        "https://drive.google.com",
      githubLink: "https://github.com/osdoce",
    },
    {
      title: "Project 3",
      image: "../../tres.png",
      description: "Description for Project 3",
      liveLink:
        "https://drive.google.com/",
      githubLink: "https://github.com/osdoce",
    },
  ];

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Portfolio</h2>
            {/* Display projects in a grid layout */}
            <div className="row">
              {projects.map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      {/* Link to live demo */}
                      <a href={project.liveLink} className="btn btn-primary">
                        Google Drive
                      </a>
                      {/* Link to GitHub repository */}
                      <a
                        href={project.githubLink}
                        className="btn btn-secondary"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
