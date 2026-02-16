import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { motion } from "framer-motion";

function Toolstack() {
  const tools = [
    <SiMacos />, <SiVisualstudiocode />, <SiPostman />, <SiSlack />,
    <SiVercel />
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((Tool, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 10px 30px rgba(0, 210, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-container"
              style={{
                padding: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2.5rem",
                margin: "10px"
              }}
            >
              {Tool}
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
