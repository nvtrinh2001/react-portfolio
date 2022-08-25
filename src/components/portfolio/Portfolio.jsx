import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.jpg';

const projectArray = [
  {
    id: 1,
    title: 'hardhat-defi',
    github: 'https://github.com/nvtrinh2001/hardhat-defi',
    img: img1,
  },
  {
    id: 2,
    title: 'hardhat-erc20',
    github: 'https://github.com/nvtrinh2001/hardhat-erc20',
    img: img2,
  },
  {
    id: 3,
    title: 'hardhat-nft-marketplace',
    github: 'https://github.com/nvtrinh2001/hardhat-nft-marketplace',
    img: img3,
  },
  {
    id: 4,
    title: 'nextjs-moralis-nft-marketplace',
    github: 'https://github.com/nvtrinh2001/nextjs-moralis-nft-marketplace',
    img: img4,
  },
  {
    id: 5,
    title: 'placemark-hapi',
    github: 'https://github.com/nvtrinh2001/placemark-hapi',
    img: img5,
  },
  {
    id: 6,
    title: 'placemark-svelte',
    github: 'https://github.com/nvtrinh2001/placemark-svelte',
    img: img6,
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectArray.map(({ id, title, github, demo, img }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt={title} />
              </div>
              <h3 className="portfolio__item-title">{title}</h3>
              <div className="portfolio__item-btns">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check on Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
