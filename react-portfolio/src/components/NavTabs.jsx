import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

function NavTabs() {
  const items = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/About',
    },
    {
      label: 'Blog',
      to: '/Blog',
    },
    {
      label: 'Contact',
      to: '/Contact',
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
