import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

import { motion } from "framer-motion";

function Techstack() {
  const icons = [
    <CgCPlusPlus />, <DiJavascript1 />, <TbBrandGolang />, <DiNodejs />,
    <DiReact />, <SiSolidity />, <DiMongodb />, <SiNextdotjs />,
    <DiGit />, <SiFirebase />, <SiRedis />, <SiPostgresql />,
    <DiPython />, <DiJava />
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
        {icons.map((Icon, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 10px 30px rgba(155, 81, 224, 0.4)" }}
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
              {Icon}
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
