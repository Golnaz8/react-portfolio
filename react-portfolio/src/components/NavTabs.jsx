import { Link, useLocation } from 'react-router-dom';
import reactLogo from '../assets/react.svg'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h3>Golnaz Berenjian</h3>
      </div>
      <div>
        <ul className="nav nav-tabs custom-container">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active custom-radius' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active custom-radius' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active custom-radius' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active custom-radius' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default NavTabs;
