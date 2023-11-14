import React from 'react';
import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import project1Image from '../../src/assets/images/image1.png';
import project2Image from '../../src/assets/images/image2.png';
import project3Image from '../../src/assets/images/image3.png';
import project4Image from '../../src/assets/images/write-away.png';
import project5Image from '../../src/assets/images/image9.png';

function Portfolio() {
  const applicationData = [
    {
      name: 'Recipe-planner',
      link: 'https://golnaz8.github.io/Recipe-Planner/',
      github: 'https://github.com/golnaz8/Recipe-Planner',
      imageSrc: project1Image,
    },
    {
      name: 'Wealth-tracker',
      link: 'https://boiling-gorge-22354-0c68df1ecb5a.herokuapp.com/',
      github: 'https://github.com/golnaz8/Wealth-Tracker',
      imageSrc: project2Image,
    },
    {
      name: 'Weather',
      link: 'https://golnaz8.github.io/challenge6-weather-dashboard/',
      github: 'https://github.com/Golnaz8/challenge6-weather-dashboard',
      imageSrc: project3Image,
    },
    {
      name: 'Marketing',
      link: 'https://golnaz8.github.io/challenge1-refactory/',
      github: 'https://github.com/golnaz8/Challenge1-refactory',
      imageSrc: project5Image,
    },
    {
      name: 'write-away',
      link: 'https://writeaway-ai-1d0d4bee3d2b.herokuapp.com/',
      github: '',
      imageSrc: project4Image,
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

