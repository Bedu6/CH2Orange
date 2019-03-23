import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Menu =(props) => (
  
  <div>
<Navbar left>
  <li>
    <Link to='/'>
    Comments
    </Link>
  </li>  
  <li>
  <Link to='/users'>
    Users
    </Link>
  </li>
</Navbar>
  </div>
);

export default Menu;