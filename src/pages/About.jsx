import profileImage from "../assets/rudra.png";
import cv from '../assets/Rudra prasad Rath Front-end Developer with 1.7 years experience.pdf';
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-section">
      <header>
        <h1 className="fade-in-bottom">About</h1>
        <div className="image fade-in-right"></div>
      </header>
      <div className="about-header">
        <h2>I'm Rudra prasad Rath. A developer, coder and problem solver.</h2>
      </div>
      <p>
        The cusp of art and technology has always fascinated me and I've never
        been afraid to just jump in and give it a go, whether it's HTML, Css,
        JavaScript or React. I’ve been designing with computers since the day I
        first learned HTMl.
      </p>
      <p>
        I am a hard Working Engineering graduate specialized in Electrical
        Engineering from National Institure of Science and Technology with
        overal CGPA of 7.40. During my final year project named Engineering of
        bio-electochemical interface based on functionalized nano-hybrid
        materials I found myself a team player. After my graduation I complete
        Java, HTML, CSS, Sass, Bootstrap, JavaScript, React like technologies.
        Using my technical skills I have complete some projects like Google
        store clone, Online Hotel booking site, Tic-Tac-Toy game, Myntra-clone.
        During these projects I found I have Leadership Quality and problem
        solving skills. Except my technical knowledge my hobbies are playing
        badminton, photography, pencil sketching. My goal is to get hired by a
        company and to see myself in a good position by leaning new technology
        and hard work.
      </p>
      <h3 className="experience-header">Experience</h3>
      <p>I have 2 years of experience in Web Development</p>
      <p>In these 2 years, I have: ‍</p>
      <ul>
        <li>1.3 year of experience in React and Tailwind Css</li>
        <li>
          8 months of experience in Laravel, Mysql, PostgreySql including stored
          procedures
        </li>
      </ul>

      <h3 className="experience-header">Skills</h3>
      <p>
        UI Design / HTML and CSS / Tailwind / JavaScript / React Js / Material
        UI / Node Js / Laravel / Java / MySql / PostgreySql / MongoDB /
        Photography
      </p>

      <button className="cv-btn"><a href={cv} target="_blank">My CV</a></button>
      <button className="contact-btn"><Link to={"/contact"}>Contact Me</Link></button>
    </div>
  );
};
