import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technologies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>HTML</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Javascript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Svelte</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Reactjs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Nextjs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Bulma CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Tailwindcss</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend/Blockchain Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Nodejs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Ethersjs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Hardhat</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Solidity</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Chainlink</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Open Zeppelin</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div className="experience__item">
                <h4>Moralis</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
