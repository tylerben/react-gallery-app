import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem'

const Gallery = props => {
  let photos = props.photos.map( photo => {
    return <GalleryItem
      key={photo.id}
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />;
  });

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
        {/* <NotFound /> */}
      </ul>
    </div>
  );
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Gallery;
