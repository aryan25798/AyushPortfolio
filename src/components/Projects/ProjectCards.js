import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -12,
        rotateX: 2,
        rotateY: -2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(155, 81, 224, 0.4)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ perspective: "1000px" }}
      className="project-card-view glass-container"
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="purple" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
        <div className="d-flex gap-2 mt-4">
          <Button variant="primary" href={props.ghLink} target="_blank" className="glass-btn">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              className="glass-btn"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </motion.div>
  );
}
export default ProjectCards;
