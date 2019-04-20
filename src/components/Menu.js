import React from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Menu = (props) => (
    <div>
        <Navbar brand = "XD" left>
            <li><NavLink to = "/" activeClassName = "active">Usuarios</NavLink></li>
            {/*<li><NavLink to = "/dependants">Dependientes</NavLink></li>*/}
        </Navbar>
    </div>
);

export default Menu;