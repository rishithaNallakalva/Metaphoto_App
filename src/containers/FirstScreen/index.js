import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from './actions';
import './index.css'; // Import CSS file

const PhotoComponent = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ title: '', albumTitle: '', userEmail: '' });
  const [pagination, setPagination] = useState({ limit: 25, offset: 0, currentPage: 0 });
  const [tempFilters, setTempFilters] = useState({ title: '', albumTitle: '', userEmail: '' });

  const { title, albumTitle, userEmail } = filters;
  const { limit, offset,currentPage } = pagination;

  useEffect(() => {
    dispatch(fetchPhoto({ ...filters, limit, offset }));
  }, [dispatch, filters, limit, offset]);


  const photos = useSelector(state => state.photo);

  const handleFilterChange = (event, filterKey) => {
    setTempFilters({ ...tempFilters, [filterKey]: event.target.value });
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
    console.log('i am at start click')
    handlePagination(0);
  };

  const handleEndPageClick = () => {
    const totalPages=Math.ceil(5000/25)
    handlePagination((totalPages - 1) * limit);
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
      {photos && photos.photo && photos.photo.length > 0 ? (
        <div className="photo-gallery">
          <div className="gallery-container">
            {photos.photo.map((photoItem, index) => (
              <div key={photoItem.id} className="gallery-item">
                <img src={photoItem.thumbnailUrl} alt={photoItem.title} />
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
      ) : (
        <div className="no-data-message">
          <p>The filtered data does not exist.</p>
        </div>
      )}
      <div className="pagination-buttons">
        <button onClick={() => handleStartPageClick()} disabled={offset === 0 || !photos || !photos.photo || photos.photo.length === 0}>start page</button>
        <button onClick={() => handlePagination(offset - limit)} disabled={offset === 0 || !photos || !photos.photo || photos.photo.length === 0}>Previous</button>
        <button onClick={() => handlePagination(offset + limit)} disabled={offset + limit >= 5000 || !photos || !photos.photo || photos.photo.length === 0}>Next</button>
        <button onClick={() => handleEndPageClick()} disabled={offset + limit >= 5000 || !photos || !photos.photo || photos.photo.length === 0}>End page</button>
      </div>
    </div>
  );
  
  
};

export default PhotoComponent;
