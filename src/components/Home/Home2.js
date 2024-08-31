import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Since deciding to learn how to code, I have developed a deep passion for programming. Web development has become a significant part of my life, and I think about it constantly. It's wonderful to have discovered something I am so passionate about in my professional journey. <br /><br/><br/>
            
            <h1 style={{ fontSize: "2em" }}>
              FULL STACK <span className="purple"> WEB DEVELOPMENT </span>
            </h1><br/>
            ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications<br/>
            ⚡ Building responsive website front end using ReactJS<br/>
            ⚡ Creating application backend in Node & Express<br/>
            ⚡ Managing databases with MongoDB and MySQL<br/>
            ⚡ Structuring API's using REST & GraphQL<br/>
            ⚡ Deploying websites using Vercel, Render, Heroku and GitHub Pages<br/>
            <br/>
            <h1 style={{ fontSize: "2em" }}>
              CLOUD <span className="purple"> INFRA-ARCHITECTURE </span>
            </h1><br/>
            ⚡ Experience working on multiple cloud platforms<br/>
            ⚡ Hosting and maintaining websites on virtual machines<br/>
            ⚡ Managing and configuring cloud services<br/>
            ⚡ Experience with continuous integration<br/>


              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Python, and more.. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Javascript, React.js, Node.js, and Express.js.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ndzamboni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/NickZamb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nick-zamboni-44664b10b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nickzamboni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
