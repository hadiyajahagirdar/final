import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/item/1">Detail</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
