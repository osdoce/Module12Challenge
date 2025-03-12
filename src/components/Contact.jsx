import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to store form data
  const [formErrors, setFormErrors] = useState({});

  // Function to handle changes in form fields
  const handleChange = (e) => {
    // Update the corresponding field in formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Update the corresponding field in formData state

    // Initialize an empty errors object
    const errors = {};
    // Basic validation
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    // Update formErrors state with any validation errors
    setFormErrors(errors);

    // If there are no errors, submit the form (e.g., send an email)
    if (Object.keys(errors).length === 0) {
      // Send the form data to your email or a server
      console.log("Form submitted:", formData);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col md={12}>
          <h2 style={{ color: "black" }}>Contact Me</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
              <Form.Label className="text-dark">Name</Form.Label>
                <Form.Control
                  className="p-2 mb-2 text-dark"
                  style={{ backgroundColor: "white" }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {/* Display error message if name is empty */}
                {formErrors.name && (
                  <Form.Text className="text-danger">
                    {formErrors.name}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Form group for Email */}
              <Form.Group controlId="formEmail">
              <Form.Label className="text-dark">Email</Form.Label>
                <Form.Control
                  className="p-2 mb-2 text-dark"
                  style={{ backgroundColor: "white" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* Display error message if email is invalid */}
                {formErrors.email && (
                  <Form.Text className="text-danger">
                    {formErrors.email}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Form group for Message */}
              <Form.Group controlId="formMessage">
              <Form.Label className="text-dark">Message</Form.Label>
                <Form.Control
                  className="p-2 mb-2 text-dark"
                  style={{ backgroundColor: "white" }}
                  as="textarea"
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {/* Display error message if message is empty */}
                {formErrors.message && (
                  <Form.Text className="text-danger">
                    {formErrors.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
