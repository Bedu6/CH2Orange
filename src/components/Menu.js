import React from 'react';
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
);

export default Menu;