import React, { useState, useEffect } from 'react';
import logo from '../logo.PNG'; // Assuming you have a logo image
import Login from './Login'; // Assuming you have a Login component


function SplashScreen() {
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        // Simulating a delay before redirecting to the login page
        const timer = setTimeout(() => {
            setRedirectToLogin(true); // Set redirectToLogin to true after 3 seconds
        }, 4000);

        // Clean up the timer to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="splash-container">
            {!redirectToLogin ? (
                <div className="splash-screen">
                    {/* Your logo */}
                    <img src={logo} alt="Logo" />
                    <h1>LPF ACADEMY COLOMBO</h1>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default SplashScreen;
