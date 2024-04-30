import React, { useState } from "react";
import { Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function StudentRegistration() {
    // Creating states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [studentID, setStudentID] = useState("");
    const [birthday, setBirthday] = useState("");
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        const selectedImages = event.target.files;
        // Convert FileList to an array
        const imagesArray = Array.from(selectedImages);
        setImages(imagesArray);
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!email || !password || !userName || !studentID || !birthday) {
            alert("Please fill in all fields");
            return;
        }

        const newUser = {
            email,
            password,
            userName,
            studentID,
            birthday,
        };

        axios.post("http://localhost:5000/user/add", newUser)
            .then(() => {
                alert("Student Registration Success");
                // Redirect to login page
                window.location = "/login";
            })
            .catch((error) => {
                if (error.response && error.response.status === 422) {
                    alert("User already exists with this email");
                } else {
                    alert("Error registering student");
                    console.error(error);
                }
            });
    };

    return (
        <div className="card-container">
            <div className="card">
                <Image src='https://www.biztechcs.com/wp-content/uploads/2020/12/VR-in-Education-01.png' className='image-header' alt="Sample photo" />
                <h2 className="studentsignup-title">Online Class Monitoring System Registration</h2>
                <Form onSubmit={handleSubmit}>
                    <div className="login-container">
                        <div className="signup-content">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Student Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="login-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} className="login-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="login-input" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicImage">
    <div>
        {/* Input for file selection */}
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="uploadImageInput"
            onChange={handleFileChange}
            multiple // Allow multiple file selection
        />
        <label htmlFor="uploadImageInput">
            <Button
                variant="outlined"
                sx={{
                    color: "black",
                    borderRadius: "30px",
                    borderColor: "black",
                    "&:hover": {
                        color: "black",
                        borderRadius: "30px",
                        borderColor: "black",
                    },
                    marginTop: "16px",
                    marginBottom: "16px",
                }}
                as="span" // Ensure the button behaves like a span
            >
                Upload images
            </Button>
        </label>
        {/* Display selected images */}
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index}`}
                    style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        margin: "5px",
                    }}
                />
            ))}
        </div>
    </div>
</Form.Group>
                            <Button variant="primary" size="lg" type="submit" className="login-button">Register</Button><br/>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/login" className="hover:text-[#2347C5] hover:underline">
                                    <p className="text-[#5473E3] ">Have already an account? Sign In here</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}
