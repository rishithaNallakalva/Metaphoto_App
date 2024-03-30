// CardDetails.js
import React from 'react';
import './index.css'; 
const CardDetails = ({ photo }) => {
    console.log('i am in car5d')
  return (
    <div className="card-details">
      <h3>Photo Details</h3>
      <div className="details-content">
      <img src={photo.url} alt={photo.title} />

        <p><strong>Username:</strong> {photo.album.user.email}</p>
      </div>
    </div>
  );
};

export default CardDetails;
