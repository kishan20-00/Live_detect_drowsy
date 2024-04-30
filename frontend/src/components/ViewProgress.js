import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/css/ViewProgress.css';
import UserSideBar from './UserSideBar';
import { useParams } from "react-router";
import { FaSearch } from 'react-icons/fa';
import Header from './header';

function ViewProgress() {
   const [marks, setMarks] = useState([]);
   const [search, setSearch] = useState("");
   const { email } = useParams(); // Get the logged-in user's email from the URL params
   
   useEffect(() => {
      async function getProgress() {
         try {
            const response = await axios.get(`http://localhost:5000/marks/get/${email}`);
            setMarks(response.data.marks);

         } catch (error) {
            console.error("Error fetching progress: ", error);
           
         }
      }
      getProgress();
   }, [email]); // Fetch progress data when the email changes (component mounts or email changes)

   return (
      <div> 
         <UserSideBar />
         <Header />
         <div className="achievement-view">
            <center><h1>Student Progress</h1></center>
            <br />
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            {marks.length === 0 ? (
               <p>No records found</p>
            ) : (
               <table className="achievement-table">
                  <thead>
                     <tr>
                        <th>Student ID</th>
                        <th>Email</th>
                        <th>Exam Type</th>
                        <th>Score</th>
                        <th>Date</th>
                     </tr>
                  </thead>
                  <tbody>
                     {marks
                        .filter((mark) => {
                           const searchTerm = search.toLowerCase();
                           if (searchTerm === "") {
                              return true;
                           } else if (mark.examType && mark.examType.toLowerCase().includes(searchTerm)) {
                              return true;
                           }
                           return false;
                        })
                        .map((mark) => (
                           <tr key={mark._id}>
                              <td>{mark.studentID}</td>
                              <td>{mark.email}</td>
                              <td>{mark.examType}</td>
                              <td>{mark.score}</td>
                              <td>{mark.date}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
            )}
         </div>
      </div>
   );
}

export default ViewProgress;
