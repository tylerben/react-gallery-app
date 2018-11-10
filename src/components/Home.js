import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Gallery from './Gallery';

const Home = props => {
  // let { params } = match;

  return (<div>
    <Header handleSearch={props.handleSearch} />
    <Gallery photos={props.photos}/>
  </div>)
};

Home.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Home;
