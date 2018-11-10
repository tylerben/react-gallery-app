import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/search/durango" onClick={ () => props.handleSearch('durango') }>Durango</NavLink></li>
      <li><NavLink to="/search/silverton" onClick={ () => props.handleSearch('silverton') }>Silverton</NavLink></li>
      <li><NavLink to="/search/ouray" onClick={ () => props.handleSearch('ouray') }>Ouray</NavLink></li>
    </ul>
  </nav>;

export default Nav;
