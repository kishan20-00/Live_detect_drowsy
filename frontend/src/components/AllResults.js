import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import TeacherSidebar from './TeacherSidebar';


function AllResults() {
   const [marks, setMarks] = useState([]);
   const [search, setSearch] = useState("");
   
   useEffect(() =>{
    function getUsers(){
        axios.get("http://localhost:5000/marks/").then((res) =>{
            setMarks(res.data);
        }).catch((err) => {
            alert(err.message);
        })
      }
     getUsers();
     },[])


function handleDeleteUser(id){

    const r = window.confirm ("Do you really want to Remove this Record?"); 
    if(r ==true){
        axios.delete(`http://localhost:5000/user/marks/${id}`).then ((res)=>{
            alert("Delete Successfully");
            window.location = `/all-results`;
            setMarks()
        })
    }
 }

 

  return (
   
    <div> 
        <TeacherSidebar/>

        <div className="achievement-view">
     <center> <h1>Students Results</h1> </center>
           
    <br/>
        
    <table className="achievement-table">
   <thead>
     <input type="text" placeholder = "Search  " onChange ={(e) =>{
     setSearch(e.target.value);
     }} />
    <tr>
            <th>Student ID</th>
            <th>Email</th>
            <th>Exam Type</th>
            <th>Score</th>
            <th>Date</th>
            <th style={{ color: 'red' }}>Delete</th>
      
    </tr>
  </thead>
  <tbody>

  {marks.filter((User) => {
     const searchTerm = search.toLowerCase();
    if (searchTerm === "") {
        return true;
    } else if (
        (User.studentID && User.studentID.toLowerCase().includes(searchTerm)) ||
        (User.examType && User.examType.toLowerCase().includes(searchTerm))
  ) {
        return true;
    }
    return false;
}).map((User) => (
    <tr key={User._id}>
        <td>{User.studentID}</td>
        <td>{User.email}</td>
        <td>{User.examType}</td>
        <td>{User.score}</td>
        <td>{User.date}</td>
        <td>
            <button
                onClick={() => handleDeleteUser(User._id)}
                style={{ color: "black" }}
            >
                Remove
            </button>
        </td>
    </tr>
))}


   
    </tbody>
</table>
</div>

</div>
    
  )

}
  
export default AllResults;







