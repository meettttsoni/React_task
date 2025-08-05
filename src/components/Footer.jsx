import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          
          <Col md={4} sm={12} className="mb-4">
            <h5 className="fw-bold">👨‍💻 K R A T Developers</h5>
            <p>
              We are passionate developers who craft user-friendly websites with modern technologies like React, Bootstrap, and AI-based tools.
            </p>
          </Col>

        
          <Col md={4} sm={12} className="mb-4">
            <h5 className="fw-bold">🔗 Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#blogs" className="text-light text-decoration-none">Blogs</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

       
          <Col md={4} sm={12} className="mb-4">
            <h5 className="fw-bold">📞 Contact</h5>
            <p>Email: support@k r a t.com</p>
            <p>Phone: +91-98765-43210</p>
            <p>Address: Ahmedabad, Gujarat, India</p>
          </Col>
        </Row>

      
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Visionary Team. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
