// CardDetails.js
import React from 'react';
import './index.css'; 
const CardDetails = ({ photo }) => {
  return (
    <div className="card-details">
      <div className="details-content">
      <img src={photo.url} alt={photo.title} />
        <p><strong>Username:</strong> {photo.album.user.username}</p>
        <p><strong>Phone Number:</strong> {photo.album.user.phone}</p>
        <p><strong>Website URl:</strong> {photo.album.user.website}</p>
        <p><strong>Address:</strong> {photo.album.user.address.city}
          {photo.album.user.address.street},
          {photo.album.user.address.city},
          {photo.album.user.address.suite},
          {photo.album.user.address.city},
          {photo.album.user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default CardDetails;
