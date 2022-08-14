import React from 'react';
import './about.css';
import AboutMe from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { BsFolderPlus, BsTrophy } from 'react-icons/bs';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="about-me" className="about__me-link" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Technologies</h5>
              <small>5+ Programming Languages/Frameworks</small>
            </article>
            <article className="about__card">
              <BsFolderPlus className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Personal Projects Completed</small>
            </article>
            <article className="about__card">
              <BsTrophy className="about__icon" />
              <h5>Achievements</h5>
              <small>3+ Learning Achievements</small>
            </article>
          </div>

          <p>
            My name is Nguyen Van Trinh. I am currently a student of Hanoi
            University of Science and Technology from Vietnam. I am trying my
            best to become a blockchain developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            My Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
