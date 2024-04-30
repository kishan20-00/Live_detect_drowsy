import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaMedal, FaChartBar,FaSignOutAlt,FaHome, FaComment } from 'react-icons/fa';


function TeacherSidebar() {
   
    const handleLogout = () => {
        // Clear any user-related session data (e.g., tokens, user info)
        localStorage.removeItem('email'); // Assuming 'email' is used for session management

        // Redirect to the login page
        window.location.href = '/login'; // Replace '/login' with the actual URL of your login page
    };
    return (
        <div>
        <div className="sidebar">
            <ul>
            <li><br/><br/><br/>
                    <Link to="/teacherDashboard">
                        <FaHome className="icon"  style={{ fontSize: '-20px',}} />
                        Dashboard
                    </Link>
                </li>
                <li><br/><br/>
                    <Link to={`/all-students`}>
                        <FaUser className="icon" />
                       Students Information
                    </Link>
                </li><br/><br/>
                <li>
                    <Link to={`/notifications`}>
                        <FaUser className="icon" />
                       My ClassRoom Notifications
                    </Link>
                </li><br/><br/>
                <li>
                    <Link to={`/add-marks`}>
                        <FaMedal className="icon" />
                        Add Students Marks
                    </Link>
                </li><br/><br/>
                
                <li>
                    <Link to={`/all-results`}>
                        <FaComment className="icon" />
                       View All Students Results
                    </Link>
                </li><br/><br/>
                <li>
                        <div className="logout">
                            <button onClick={handleLogout}  style={{ color: 'black' }}>
                                <FaSignOutAlt className="icon" />
                                Logout
                            </button>
                        </div>
                    </li>
       
               
            </ul>
            
        </div>
        
       </div>
    );
}

export default TeacherSidebar;
