





import React, { useState, useEffect } from 'react';
import './sticky.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab ,clearSelectedData} from '../../store';
import Modal from '../modal/Modal';

const Sticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeTab, setActiveTabLocal] = useState(1); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const selectedData = useSelector(state => state.selectedData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0.3 * window.innerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
 
    const handleTabClick = (tabIndex, tabName) => {
      setActiveTabLocal(tabIndex); 
      dispatch(setActiveTab(tabName)); 
      dispatch(clearSelectedData());
    };
  
    const isButtonEnabled = selectedData.length > 0;
  
   
    const openModal = () => {
      setIsModalOpen(true);
      
    };
  
 
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="tabs">
          <h3
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => handleTabClick(1, "All")}
          >
            All Meals
          </h3>
          <h3
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => handleTabClick(2, "Week 1")}
          >
            Week 1
          </h3>
          <h3
            className={activeTab === 3 ? 'active' : ''}
            onClick={() => handleTabClick(3, "Week 2")}
          >
            Week 2
          </h3>
          <h3
            className={activeTab === 4 ? 'active' : ''}
            onClick={() => handleTabClick(4, "Week 3")}
          >
            Week 3
          </h3>
          <h3
            className={activeTab === 5 ? 'active' : ''}
            onClick={() => handleTabClick(5, "Week 4")}
          >
            Week 4
          </h3>
          <button
            className={`rectangular-button ${selectedData.length > 0 ? 'enabled' : ''}`}
            disabled={!isButtonEnabled}
            onClick={openModal} 
          >
            Add to Week
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} /> 
      </div>
    );
  };
  
  export default Sticky;

