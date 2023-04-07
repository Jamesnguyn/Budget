import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>HOME </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">PORTFOLIO </NavLink>
    <NavLink to="/contact" activeClassName="is-active">CONTACT </NavLink>
  </header>
);

export default Header;