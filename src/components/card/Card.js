


import React, { useState, useEffect } from 'react';
import './card.css';
import { FaStar, FaTrash } from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedData, removeFromSelectedData, removeFromWeek1,removeFromWeek2,removeFromWeek3,removeFromWeek4 } from '../../store'; 

const Card = ({ id, imageUrl, title, details, rating, cuisine, mealType }) => {
  const [isClicked, setIsClicked] = useState(false);
  const selectedData = useSelector(state => state.selectedData);
  const activeTab = useSelector(state => state.activeTab); 
  const dispatch = useDispatch();

  const handleClick = () => {
    if(activeTab==="All"){
      if (!isClicked) {
        dispatch(addSelectedData({ id, imageUrl, title, details, rating, cuisine, mealType }));
      } else {
        dispatch(removeFromSelectedData({ id }));
      }
      setIsClicked(!isClicked);
    }
    
  };

  const handleDelete = () => {
    switch (activeTab) {
      case 'Week 1':
        dispatch(removeFromWeek1({ id }));
        break;
      case 'Week 2':
        dispatch(removeFromWeek2({ id }));
        break;
      case 'Week 3':
        dispatch(removeFromWeek3({ id }));
        break;
      case 'Week 4':
        dispatch(removeFromWeek4({ id }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (selectedData.length === 0) {
      setIsClicked(false);
    }
  }, [selectedData]);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleClick} tabIndex="0">
      <div className="card-details">
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
          {activeTab !== 'All' && (
            <button className="delete-button" onClick={handleDelete}>
              <FaTrash />
            </button>
          )}
          <div className="image-label">{mealType}</div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{details}</p>
        <div className="card-footer">
          <span className="label">Cuisine:</span>
          <span>{cuisine}</span>
          <span className="label">Ratings:</span>
          <span>
            {rating} <span className="rating-container">{renderStars()}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
