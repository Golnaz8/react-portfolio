import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

function NavTabs() {
  const items = [
    {
      label: 'About Me',
      to: '/',
    },
    {
      label: 'Portfolio',
      to: '/Portfolio',
    },
    {
      label: 'Contact',
      to: '/Contact',
    },
    {
      label: 'Resume',
      to: '/Resume',
    },
  ];

  return (
    <Menubar
      model={items.map((item) => ({
        label: (
          <Link to={item.to} className={item.to === window.location.pathname ? 'nav-link active' : 'nav-link'}>
            {item.label}
          </Link>
        ),
      }))}
    />
  );
}

export default NavTabs;
