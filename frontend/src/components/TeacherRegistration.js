import {React, useState }from "react";
import {Form, Button, Card,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function TeacherRegistration(){
    // Creating states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Teacher, setTeacher] = useState("");
    const [userName, setUserName] = useState("");
    const [teacherID,setteacherID]=useState("");
    const [image, setImage] = useState(null);

   
 
     const handleSubmit = (e) => {
         e.preventDefault();
 
         // Validation
         if (!email || !password || !userName || !teacherID) {
             alert("Please fill in all fields");
             return;
         }
 
         const newUser = {
             email,
             password,
             userName,
             teacherID
         };
 
         axios.post("http://localhost:5000/teacher/add", newUser)
             .then(() => {
                 alert("Teacher Registration Success");
                 // Redirect to login page
                 window.location = "/login";
             })
             .catch((error) => {
              if (error.response && error.response.status === 422) {
                  alert(error.response.data.error); // Display the error message from the backend
              } else {
                  alert("Error registering Teacher");
                  console.error(error);
              }
          });
          
     };
 
    return (
      <div className="container">
      <div className="column left-column">
     
<div className="form-container">
<div >
        <div >
             <h2 className="studentsignup-title">Registration</h2>
          <Form onSubmit={handleSubmit}>
            <div className="login-container">
              <div className="signup-content">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Teacher Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Teacher Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="login-input" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Teacher ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Teacher ID" value={teacherID} onChange={(e) => setteacherID(e.target.value)} className="login-input" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Teacher Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
                </Form.Group>
                <Form.Group controlId="formBasicImage">
                  <Form.Label>Image</Form.Label>
                  <div className="login-input">
                    <div className="file-input-container">
                      <label htmlFor="file-upload" className="file-upload-label">
                        Browse
                      </label>
                      <input id="file-upload" type="file" accept="image/*" multiple style={{ display: 'none' }} />
                      <span className="file-chosen ">No file selected </span>
                    </div>
                  </div>
                </Form.Group>
               
                <Button variant="primary" size="lg" type="submit" className="login-button">Register Teacher</Button><br/>
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
      </div>  

      </div>
      <div className="column right-column">
          <div className="form-container">
              <Image src="https://ewyse.agency/wp-content/uploads/2021/06/Blended-Learning-eWyse.gif" fluid />
          </div>
      </div>
  </div>

    );


      
}






      