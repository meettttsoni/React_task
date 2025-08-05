import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const blogPosts = [
  {
    id: 1,
    title: "Ramesh Chauhan – The UI/UX Visionary",
    description:
      "Meet is a creative UI/UX developer with a strong command of HTML, CSS, and modern JavaScript. He loves turning ideas into user-friendly designs and believes in clean code with beautiful interfaces.",
    image:
      "https://hdstockimages.com/wp-content/uploads/2024/11/old-man-wearing-business-costume_23-2150833782.jpg",
    date: "August 4, 2025",
  },
  {
    id: 2,
    title: "Anjali Patel – Frontend Enthusiast",
    description:
      "Anjali is a frontend specialist focused on responsive design and component-based architecture using React. She enjoys working on intuitive layouts and seamless user experiences.",
    image:
      "https://t4.ftcdn.net/jpg/10/17/46/67/360_F_1017466748_sPimgAiwEJECag85DWHsrufuLsugsh6b.jpg",
    date: "August 3, 2025",
  },
  {
    id: 3,
    title: "Ravi Patel – JavaScript Guru",
    description:
      "Ravi is a JavaScript developer passionate about building fast and scalable web apps. He mentors new developers and contributes to open-source tools for modern frontend frameworks.",
    image: "https://cdn.koreapost.com/news/photo/202109/24542_28815_13.jpg",
    date: "August 1, 2025",
  },
];

export default function Blog() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Meet Our Developers</h2>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} md={4} sm={12} className="mb-4">
            <Card className="h-100 shadow-lg border-0">
              <Card.Img
                variant="top"
                src={post.image}
                alt={post.title}
                style={{
                  height: "280px",
                  objectFit: "contain",
                  objectPosition: "center",
                  backgroundColor: "#f8f9fa",
                }}
              />

              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description.slice(0, 120)}...</Card.Text>
                <Button variant="dark">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Published on {post.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
