import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Sharma</span>
            from <span className="purple"> India.</span>
            <br />
            I am a passionate student exploring the fields of AI, Web Development, and Competitive Programming.
            <br />
            Currently, I am working on AI projects, building web applications, and constantly learning new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging about AI & Web Dev
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code, Innovate, and Build for a Better Tomorrow!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
