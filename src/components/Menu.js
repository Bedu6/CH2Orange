import React from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Menu = () => (
    <div>
        <Navbar brand = "Bedu" left>
            <li>
                <NavLink
                    to = "/"
                    activeClassName = "active"
                >
                    Usuarios
                </NavLink>
            </li>
            <li>
                <NavLink
                    to = "/dependents">
                    Dependientes
                </NavLink>
            </li>
        </Navbar>
    </div>
);

export default Menu;