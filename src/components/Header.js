import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = props =>
  <header>
    <h1>Flickr Photo Search</h1>
    <SearchForm {...props} handleSearch={props.handleSearch} />
    <Nav handleSearch={props.handleSearch} />
  </header>;


export default Header;
