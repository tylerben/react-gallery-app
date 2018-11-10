import React from 'react';

import Header from './Header';
import Gallery from './Gallery';

const Search = props =>
  <div>
    <Header handleSearch={props.handleSearch} tag={props.match.params.tag} />
    <Gallery photos={props.photos}/>
  </div>;

export default Search;
