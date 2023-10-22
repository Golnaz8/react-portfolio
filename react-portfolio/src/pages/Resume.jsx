// Resume.js
import React from 'react';

function Resume() {
  return (
    <div className='container' style={{marginTop: '2%'}}>
      <h2 style={{display: 'inline', marginRight: '3%'}}>Resume:</h2>
      <a 
        href="./react-portfolio/src/assets/resume/Golnaz_Resume.pdf"
        className="btn btn-primary"
        download
      >
        Download Full Resume
      </a>
      <p><strong>Golnaz Berenjian</strong></p>
      <p>Email: golnaz.brg@gmail.com</p>
      <p>Phone: (647) 676-6667</p>

      <h2>Summary:</h2>
      <p>Organized and motivated employee eager to apply time management and organizational skills
        in various environments. Seeking for work opportunity in computer programming and
        networking where I can gain skills in multi disciplinary work environment and be part of cross
        team activity. ability to learn and adopt new work environment is core attributes of my
        personality.</p>

      <h2>Skills:</h2>
      <p>
        -JavaScript <br />
        -HTML <br />
        -CSS <br />
        -Bootstrap library <br />
        -Node.js <br />
        -Express.js <br />
        -MySQL <br />
        -NoSQL <br />
        -React <br />
        -Chart.js <br />
        -MERN
      </p>
      <h2>Education:</h2>
      <p>
        Bachelor of Science: Electrical And Computer Engineering, Mazandaran Science And Tech Oct 2014, Babol, Iran
      </p>
      <h2>Experience:</h2>
      <p>
        IT Technician at Tabari Higher Education/ Nov 2015 to Feb 2020, Babol, Iran. <br />
        Tasks:
        <br />-Responded to assistance requests from users and directed individuals through basic troubleshooting tasks.
        <br />-Explained technology-related details in easy-to-understand terms to individuals from different backgrounds and in various job positions.
        <br />-Consulted via telephone to understand user problems, run through testing scripts and ask probing questions to locate root causes.
        <br />-Communicated with customers to provide up-to-date information on incident response progress and resolution timeframe estimates.
        <br />-Monitored ongoing service requests to verify timely and satisfactory completion, supporting exceptional satisfaction ratings.
        <br />-Coordinated ticket fulfillment among multiple technicians and teams to reduce redundancy and accelerate response times.
        <br />-Performed troubleshooting on networking and connectivity issues to restore connections and network access.
        <br />-Removed malware and viruses from laptops and desktop systems using specialized software.
        <br />-Conducted routine maintenance on servers and systems, keeping networks fully operational during peak periods.
      </p>
    </div>
  );
}

export default Resume;
