import React from 'react';
import { Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Menu = (props) => (
    <div>
        <Navbar brand = "React - Redux Example" left>
            <li><NavLink to = "/" activeClassName = "active">Comments</NavLink></li>
            <li><NavLink to = "/photos">Photos</NavLink></li>
        </Navbar>
    </div>
);

export default Menu;