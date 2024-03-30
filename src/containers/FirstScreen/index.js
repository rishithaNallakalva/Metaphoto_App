import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from './actions';
import CardDetails from '../CardDetails/index.js';
import './index.css'; // Import CSS file

const PhotoComponent = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ title: '', albumTitle: '', userEmail: '' });
  const [pagination, setPagination] = useState({ limit: 25, offset: 0, currentPage: 0 });
  const [tempFilters, setTempFilters] = useState({ title: '', albumTitle: '', userEmail: '' });

  const { title, albumTitle, userEmail } = filters;
  const { limit, offset, currentPage } = pagination;
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Initialize selectedPhoto with null


  useEffect(() => {
    dispatch(fetchPhoto({ ...filters, limit, offset }));
  }, [dispatch, filters, limit, offset]);

  const photos = useSelector(state => state.photo);
const loading=useSelector(state=>state.loading)
  const handleFilterChange = (event, filterKey) => {
    setTempFilters({ ...tempFilters, [filterKey]: event.target.value });
  };

  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value);
    setPagination(prevPagination => ({
      ...prevPagination,
      limit: newLimit,
      offset: 0, // Reset offset when changing limit
      currentPage: 0 // Reset currentPage when changing limit
    }));
    dispatch(fetchPhoto({ ...filters, limit: newLimit, offset: 0 }));
  };

  const handleSubmit = () => {
    setFilters(tempFilters); // Update filters with temporary filter data
    dispatch(fetchPhoto({ ...tempFilters, limit, offset }));
  };

  const handlePagination = (newOffset) => {
    setPagination({ ...pagination, offset: newOffset, currentPage: Math.ceil((newOffset + 1) / limit) });
  };

  useEffect(() => {
    if (photos && photos.total) {
      setPagination({ ...pagination, currentPage: Math.ceil((offset + 1) / limit) });
    }
  }, [photos, limit, offset]);

  const handleStartPageClick = () => {
    handlePagination(0);
  };

  const handleEndPageClick = () => {
    const totalPages = Math.ceil(5000 / limit);
    handlePagination((totalPages - 1) * limit);
  };
const handleImageClick=(photo)=>{
  console.log('Imageeeeeeeeeeeeeeeeee',photo.url);
  setSelectedPhoto(photo)

}
 const handleCloseModal = () => {
  setSelectedPhoto(null); // Reset selected photo to close the modal
};


return (
  <div>
    <div className="header">
      <h2>Meta Photos</h2>
    </div>
    <div className="filter-container">
      <input type="text" placeholder="Filter by Photo Title" value={tempFilters.title} onChange={(e) => handleFilterChange(e, 'title')} className="input-field" />
      <input type="text" placeholder="Filter by Album Title" value={tempFilters.albumTitle} onChange={(e) => handleFilterChange(e, 'albumTitle')} className="input-field" />
      <input type="text" placeholder="Filter by email" value={tempFilters.userEmail} onChange={(e) => handleFilterChange(e, 'userEmail')} className="input-field" />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
    <div className="limit-dropdown-container">
      <div className="limit-dropdown">
        <label htmlFor="limit">Records Per Page: </label>
        <select id="limit" value={limit} onChange={handleLimitChange} disabled={photos.photo.length < limit }>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="pagination-buttons">
        <button onClick={handleStartPageClick} disabled={offset === 0 || !photos || !photos.photo || photos.photo.length === 0}>Start Page</button>
        <button onClick={() => handlePagination(offset - limit)} disabled={offset === 0 || !photos || !photos.photo || photos.photo.length === 0}>Previous</button>
        <button onClick={() => handlePagination(offset + limit)} disabled={offset + limit >= 5000 ||  photos.photo.length < limit|| !photos || !photos.photo}>Next</button>
        <button onClick={handleEndPageClick} disabled={offset + limit >= 5000 || !photos ||photos.photo.length < limit || !photos.photo || photos.photo.length === 0}>End Page</button>
      </div>
    </div>
    {/* Display the gallery only if photos are available and data fetching is completed */}
    {(photos && photos.photo && photos.photo.length > 0) && (
        <div className="photo-gallery">
          <div className="gallery-container">
            {photos.photo.map((photoItem, index) => (
              <div key={photoItem.id} className="gallery-item">
                <img src={photoItem.thumbnailUrl} alt={photoItem.title} onClick={() => handleImageClick(photoItem)} />
                <div className="item-content">
                  <p>
                    <strong>Title:</strong> {photoItem.title} {photoItem.id}<br />
                    <strong>Album Title:</strong> {photoItem.album.title}<br />
                    <strong>UserEmail:</strong> {photoItem.album.user.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
{selectedPhoto && (
  <div className="modal">
    <div className="modal-content">
    <span className="close" onClick={handleCloseModal}>&times;</span>
      <CardDetails photo={selectedPhoto} />
    </div>
  </div>
)}
{(!loading && Object.values(tempFilters).some(value => value !== '') && photos && photos.photo && photos.photo.length === 0) && (
  <div className="no-data-message">
    <p>The filtered data does not exist.</p>
  </div>
)}

  </div>
);


};

export default PhotoComponent;
