import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button,Image } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
     // Creating states
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [imageSrc, setImageSrc] = useState(null); // State to hold the image captured from the camera
     const navigate = useNavigate();
    
     const handleSubmit = async (e) => {
         e.preventDefault();
 
         // Validation
         if (!email || !password ) {
             alert("Please fill in all fields");
             return;
         }
 
         const data = { email, password };
 
         try {
             const studentResponse = await axios.post("http://localhost:5000/user/log", data);
             handleLoginResponse(studentResponse);
         } catch (error) {
             try {
                 const teacherResponse = await axios.post("http://localhost:5000/teacher/log", data);
                 handleLoginResponse(teacherResponse);
             } catch (error) {
                 alert("Invalid Email or Password");
             }
         }
     };
 
     const handleLoginResponse = (response) => {
         const { userType } = response.data;
         alert("Sign in successfully");
         localStorage.setItem('email', email); // Store email in local storage
         if (userType === "student") {
             navigate('/userDashboard'); // Redirect student to student dashboard
         } else if (userType === "teacher") {
             navigate('/teacherDashboard'); // Redirect teacher to teacher dashboard
         }
     };
 
     // Function to handle capturing image from camera
     const handleCaptureImage = async () => {
         try {
             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
             const mediaStreamTrack = stream.getVideoTracks()[0];
             const imageCapture = new ImageCapture(mediaStreamTrack);
             const blob = await imageCapture.takePhoto();
             const imageUrl = URL.createObjectURL(blob);
             setImageSrc(imageUrl);
         } catch (error) {
             console.error("Error capturing image:", error);
         }
     };
 
    return (
        <div className="container">
            <div className="column left-column">
                <div className="form-container">
                    <h2 className="login-title">Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="login-container">
                            <div className="login-content">
                                <br /> <br />
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label><br/><br/>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label><br/><br/>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
                                </Form.Group>
                                <Button variant="primary" onClick={handleCaptureImage}>Capture Image</Button> {/* Button to capture image */}
                                {imageSrc && <img src={imageSrc} alt="Captured" />} {/* Display captured image */}
                                <Link to="/forgotpassword" className="forgot-password-link hover:text-[#2347C5] hover:underline">
                                    <p className="text-[#5473E3]">Forgot Password?</p>
                                </Link>
                                <br /> <br />
                                <center>
                                    <Button variant="primary" size="lg" type="submit" className="login-button">Sign In</Button>
                                    <br/>
                                    <Link to="/signup" className="hover:text-[#2347C5] hover:underline">
                                        <p className="text-[#5473E3] ">Don't have an account? Sign up as a Student</p>
                                    </Link>
                                    <Link to="/teacher" className="hover:text-[#2347C5] hover:underline">
                                        <p className="text-[#5473E3] ">Sign up as a Teacher</p>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="column right-column">
                <div className="form-container">
                    <Image src="https://cdn.dribbble.com/users/6985884/screenshots/15849659/media/7d52cfa85e08d88a9bc9acabf290b103.gif" fluid />
                </div>
            </div>
        </div>
    );
};

export default Login;
