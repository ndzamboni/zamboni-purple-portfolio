import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cmsBlog from "../../Assets/Projects/cmsBlog.PNG";
import zrilla from "../../Assets/Projects/zrilla-home.PNG";
import survey from "../../Assets/Projects/surveyApp.PNG";
import discord from "../../Assets/Projects/discorddemo.PNG";
import qrCodeGenerator from "../../Assets/Projects/qrcode.PNG";
import pottyPartner from "../../Assets/Projects/pottyPartner.PNG";

function Projects() {
  return (
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
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Gaming Vision Board"
              description="Allows users to post games they would like to play to a shared vision board. Users can then react to the games they would like to play, and the bot will keep track of the games with the most reactions."
              ghLink="https://github.com/ndzamboni/discord-bot-gaming-vision-board"
              demoLink="https://github.com/ndzamboni/discord-bot-gaming-vision-board"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pottyPartner}
              isBlog={false}
              title="Potty Partner"
              description="Potty Partner is a web application designed to help users find bathrooms and leave reviews. This app aims to provide a community-driven resource for bathroom locations and conditions, ensuring that everyone has access to clean and safe facilities when they need them most."
              ghLink="https://github.com/ndzamboni/Potty_Partner"
              demoLink="https://potty-partner.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={survey}
              isBlog={false}
              title="Survey App for YMCA of Greensboro"
              description="This app allows people to scan a QR code, select their membership type, and complete a survey with questions specific to their membership. The survey responses are saved in JSON files for easy export to any database later."
              ghLink="https://github.com/ndzamboni/qr-survey-app"
              demoLink="https://github.com/ndzamboni/qr-survey-app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmsBlog}
              isBlog={false}
              title="Content Management System"
              description="A CMS-style blog site similar to a Wordpress site, where users can publish blog posts and comment on other users' posts. The site is built from scratch and follows the Model-View-Controller (MVC) paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication."
              ghLink="https://github.com/ndzamboni/Content_Management_System"
              demoLink="https://content-management-system-rigk.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrCodeGenerator}
              isBlog={false}
              title="QR Code Generator"
              description="This is a simple Python script that generates QR codes from user-provided URLs and saves them as image files. The script uses the qrcode and Pillow libraries to create and manipulate QR code images."
              ghLink="https://github.com/ndzamboni/qr-code-generator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zrilla}
              isBlog={false}
              title="Zrilla Horror Media App"
              description="Welcome to Zrilla, your go-to app for all things horror and thriller movies! Zrilla has everything you need to keep track of your favorite films, rate them, and share your thoughts with fellow horror enthusiasts. With Zrilla, you can dive into the darkest corners of cinema and emerge unscathed... or maybe not."
              ghLink="https://github.com/Zrilla-App/zrilla?tab=readme-ov-file"
              demoLink="https://zrilla-app.github.io/zrilla/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
