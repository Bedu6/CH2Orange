import React from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';


const Menu = (props) => (
	<div >
		<Navbar left>
  		<li>
  			<Link to='/'>
  				Comentarios
  			</Link>
  		</li>
      
      <li>
        <Link to='/fotos'>
          Fotos
        </Link>
  		</li>
		</Navbar>
	</div>
>>>>>>> leticia
);

export default Menu;