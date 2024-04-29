import React from 'react';
import '../components/css/Header.css'; // Import CSS file for styling
import { FaUser, FaMedal, FaComment, FaSignOutAlt, FaHome } from 'react-icons/fa';
import '../components/css/Feedback.css';


const Header = () => {
  const userEmail = localStorage.getItem('email');
  return (
    <div>
     
  <div  className="performace-view">
  <div >
          <div className="greeting">
          <span className="badge"> <FaMedal className="icon" style={{ marginLeft: '10px' }} /></span>
          
            <span style={{ color:'blue' }}><b><h5>Hi {userEmail} :)</h5></b></span>
          </div>
          <div className="message">
            <span>You are doing great!</span>
          </div>
          <div className="announcement-container">
            <div className="announcement-box">
                 <p>No announcements</p>
            </div>
            <div className="custom-textbox" style={{height: '40px', marginLeft: '30px'}}>
           
            <a href="/userDashboard"><FaSignOutAlt className="icon" /></a>
            <a href="/feedback"><FaComment className="icon" /></a>
            <a href="/login"><FaUser className="icon" /></a>
            
           </div> 
            </div>
            </div>
            </div>
            </div>    
           
            
        

  );
};

export default Header;
