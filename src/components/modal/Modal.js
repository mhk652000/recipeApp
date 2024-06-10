import React, { useState } from 'react';
import './Modal.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToWeek1, addToWeek2, addToWeek3, addToWeek4, clearSelectedData } from '../../store'; 


const Modal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch(); 
  var selectedData = useSelector(state => state.selectedData);
  
  var week1=  useSelector(state => state.week1);
  var week2=  useSelector(state => state.week2);
  var week3=  useSelector(state => state.week3);
  var week4=  useSelector(state => state.week4);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const submitHandler = () => {
    let weekArray;
  
   
    switch (activeTab) {
      case 1:
        weekArray = week1;
        break;
      case 2:
        weekArray = week2;
        break;
      case 3:
        weekArray = week3;
        break;
      case 4:
        weekArray = week4;
        break;
      default:
        break;
    }
  
    const uniqueSelectedData = selectedData.filter(item => !weekArray.some(weekItem => weekItem.id === item.id));
    
    switch (activeTab) {
      case 1:
        dispatch(addToWeek1(uniqueSelectedData));
       
        break;
      case 2:
        dispatch(addToWeek2(uniqueSelectedData));
        
        break;
      case 3:
        dispatch(addToWeek3(uniqueSelectedData));
       
        break;
      case 4:
        dispatch(addToWeek4(uniqueSelectedData));
        
        break;
      default:
        break;
    }
    dispatch(clearSelectedData());
    onClose();
    
    
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Heading</h2>
        <div className="tab-container">
          <button
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Week 1
          </button>
          <button
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Week 2
          </button>
          <button
            className={`tab ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            Week 3
          </button>
          <button
            className={`tab ${activeTab === 4 ? 'active' : ''}`}
            onClick={() => handleTabClick(4)}
          >
            Week 4
          </button>
        </div>
        <button className="action-button" onClick={submitHandler}>Submit</button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;






