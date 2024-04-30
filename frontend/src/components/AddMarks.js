import React, { useState, useEffect } from 'react';
import '../components/css/AddMarks.css'; // Import your CSS file
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar';

function AddMarks() {
    // State variables for form fields
   
    const [studentID, setstudentID] = useState('');
    const [examType, setexamType] = useState('');
    const [score, setscore] = useState('');
    const [date, setdate]= useState('');
    const [email, setemail] = useState([]);
    const [users, setUsers] = useState([]);


    const handleDateChange = (e) => {
        setdate(e.target.value);
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5000/user/");
                setUsers(response.data);
                const emailsArray = response.data.map((user) => user.email);
                setemail(emailsArray);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);


    useEffect(() => {
        // Filter users based on entered student ID
        const filteredUsers = users.filter((user) => user.studentID === studentID);
        const filteredEmails = filteredUsers.map((user) => user.email);
        setemail(filteredEmails);
    }, [studentID, users]);



    const handleSubmit = (e) => {
        if(!studentID || !email || !examType || !score  || !date ){
            alert("Please fill  in all  fields");
            return
        } 
  
        e.preventDefault();
  
        const newMarks ={
          studentID,
          email,
          examType,
          score,
          date,
          
        }
        console.log(newMarks)  
        //alert("Success");
  
        axios.post("http://localhost:5000/marks/add", newMarks).then(() => {
             alert("Marks Successfully Saved")
            // history.push('/')
            window.location = `/add-marks`;
  
         }).catch((err) =>{
             alert(err)
         })
    };

  
    return (
        <div>
        <TeacherSidebar/>
        <div className="achievement-form-container">
            <h2>Results Form</h2>
            <form onSubmit={handleSubmit}>
                
            <div className="form-group">
            <div className="form-group">
                    <label>Student ID:</label>
                    <input type="text" placeholder="Enter studentID Id" value={studentID} onChange={(e) => setstudentID(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                        <label>Email:</label>
                        <select
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control"
                        >
                            <option value="">Select an email</option>
                            {email.map((email) => (
                                <option key={email} value={email}>
                                    {email}
                                </option>
                            ))}
                        </select>
                    </div>


                <label>Exam Type:</label>
                <select value={examType} onChange={(e) => setexamType(e.target.value)} className="form-control">
                     <option value="">Select an examType</option>
                     <option value="Quiz">Quiz</option>
                     <option value="Assignment">Assignment</option>
                     <option value="Exam">Exam</option>
                     </select>
                     </div>
                     
                    <div className="form-group">
                         <label>Score:</label>
                         <input type="text" value={score} onChange={(e) => setscore(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setdate(e.target.value)} />
                    </div><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default AddMarks;
