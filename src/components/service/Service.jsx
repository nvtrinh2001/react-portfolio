import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';

function Service() {
  return (
    <section id="service">
      <h5>What I would love to work in</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Participate in developing Decentralized Applications</p>
            </li>

            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Write Ethereum smart contracts using Solidity</p>
            </li>

            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>Use Javascript to interact with smart contracts</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__header">
            <h3>Blockchain Researcher</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                I am intrigued by things that blockchain technology could do to
                our life
              </p>
            </li>

            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                My goal is to be able to apply blockchain usecases to solve our
                real world problems
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__header">
            <h3>Other Positions</h3>
          </div>

          <ul className="service__list">
            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                I am open to learn more about blockchain-related technologies
              </p>
            </li>

            <li className="service__item">
              <BiCheck className="service__item-icon" />
              <p>
                Some related fields that I am currently interested in: NFTs,
                DAOs, and Crypto Security
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
