import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading'
import NoSearchResults from './NoSearchResults'
import GalleryItem from './GalleryItem'

const Gallery = props => {
  let photos = props.photos.map( photo => {
    return <GalleryItem
      key={photo.id}
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />;
  });

  if ( props.loading ) {
    return (
      <Loading />
    );
  } else if ( photos.length === 0 ) {
    return (
      <NoSearchResults />
    )
  } else {
    return (
      <div className="photo-container">
        <h2>{props.title}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Gallery;
