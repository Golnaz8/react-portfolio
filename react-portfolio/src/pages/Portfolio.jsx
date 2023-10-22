import React from 'react';
import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';

function Portfolio() {
  const applicationData = [
    {
      name: 'Recipe-planner',
      link: 'https://golnaz8.github.io/Recipe-Planner/',
      github: 'https://github.com/golnaz8/Recipe-Planner',
      imageSrc: './src/assets/images/projec1.png',
    },
    {
      name: 'Wealth-tracker',
      link: 'https://boiling-gorge-22354-0c68df1ecb5a.herokuapp.com/',
      github: 'https://github.com/golnaz8/Wealth-Tracker',
      imageSrc: './src/assets/images/projec2.png',
    },
    {
      name: 'Calculator',
      link: 'https://golnaz8.github.io/challenge1-refactory/',
      github: 'https://github.com/golnaz8/Challenge1-refactory',
      imageSrc: './src/assets/images/image.3.png',
    },
    {
      name: 'Shop',
      link: 'https://golnaz8.github.io/challenge1-refactory/',
      github: 'https://github.com/golnaz8/Challenge1-refactory',
      imageSrc: './src/assets/images/image.4.png',
    },
    {
      name: 'Educational',
      link: 'https://golnaz8.github.io/challenge1-refactory/',
      github: 'https://github.com/golnaz8/Challenge1-refactory',
      imageSrc: './src/assets/images/image.5.png',
    },
  ];

  return (
    <>
    <h2 style={{marginTop: '2%'}}>Works:</h2>
      <div className="applications">
        {applicationData.map((app, index) => (
          <section className={index === 0 ? 'different' : 'same'} key={index}>
            <a href={app.link} target="_blank" alt={`${app.name} application link`}>
              <img src={app.imageSrc} alt={`Image of ${app.name}`} />
              <div className="bottom-right">{app.name}</div>
            </a>
            <a
              href={app.github}
              target="_blank"
              className="top-right"
              alt={`${app.name} GitHub link`}
            >
              <FaGithub size={30} />
            </a>
          </section>
        ))}
      </div>
    </>

  );
}

export default Portfolio;

