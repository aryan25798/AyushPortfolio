import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={container}
    >
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="Chatify"
                  description="Personal Chat Application or Real-Time Messaging Platform build with mern stack and socket.io. Realtime functionalites and many more things added."
                  ghLink="https://github.com/aryan25798/Chatify"
                  demoLink="https://chatify-49.web.app/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Bits-0f-C0de"
                  description="My personal blog page build with Next.js and Tailwind CSS which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                  ghLink="https://github.com/aryan25798/Bits-0f-C0de"
                  demoLink="https://blogs.soumya-jit.tech/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="Editor.io"
                  description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with live preview. Built with stackblitz online compiler."
                  ghLink="https://github.com/aryan25798/Editor.io"
                  demoLink="https://editor.soumya-jit.tech/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={leaf}
                  isBlog={false}
                  title="Plant AI"
                  description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and ResNet architecture for classification"
                  ghLink="https://github.com/aryan25798/Plant_AI"
                  demoLink="https://plant49-ai.herokuapp.com/"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={suicide}
                  isBlog={false}
                  title="Ai For Social Good"
                  description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                  ghLink="https://github.com/aryan25798/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--- humorously kept but commented
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item}>
                <ProjectCard
                  imgPath={emotion}
                  isBlog={false}
                  title="Face Recognition and Emotion Detection"
                  description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow back-end. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%."
                  ghLink="https://github.com/aryan25798/Face_And_Emotion_Detection"
                // demoLink="https://blogs.soumya-jit.tech/"      <--- dummy demo
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;
