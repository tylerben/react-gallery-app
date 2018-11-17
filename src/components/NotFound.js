import React from 'react';
import NotFoundImage from './notfound.png';

const NotFound = props =>
  <div>
    <img className="not-found-img" src={NotFoundImage} alt="404 Error: Page Not Found" />
  </div>;

export default NotFound;
