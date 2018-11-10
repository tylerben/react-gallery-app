import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = props =>
  <header>
    <h1>Flickr API Search</h1>
    <SearchForm />
    <Nav handleSearch={props.handleSearch} tag={props.tag} />
  </header>;


export default Header;
