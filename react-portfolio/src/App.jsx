// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './styles/App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">        
        <Outlet />
      </main>
      <footer style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', paddingBottom:'3%' }}>
        <a style={{marginRight: '2%'}} href="https://github.com/golnaz8" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/naz-brj" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </footer>
    </>
  );
}

export default App;
