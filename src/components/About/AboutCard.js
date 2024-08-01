import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I am <span className="purple">Nick Zamboni </span>
            from <span className="purple"> Greensboro, North Carolina</span>
            <br />
            I am currently employed as the <span className="purple">Membership Director</span> at the <span className="purple">Greensboro YMCA.</span>
            <br /><br />
            When I'm not working, I'm coding! I am a Full Stack Web Developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL, Python, MongoDB, and much more. <br /><br />
            I have completed the Full Stack Web Development Bootcamp at UNC Chapel Hill.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            ⭐ Playing Games
            </li>
            <li className="about-activity">
            ⭐ Gardening
            </li>
            <li className="about-activity">
            ⭐ Playing Pickleball
            </li>
            <li className="about-activity">
            ⭐ Travelling
            </li>
            <li className="about-activity">
            ⭐ Watching Horror Movies
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Solve problems one block at a time"{" "}
          </p>
          <footer className="blockquote-footer">Nick Z.</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
