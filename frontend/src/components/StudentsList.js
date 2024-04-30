import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../components/css/StudentsList.css'
import TeacherSidebar from './TeacherSidebar';


function StudentsList() {
   const [users, setUsers] = useState([]);
   const [search, setSearch] = useState("");
   
   useEffect(() =>{
    function getUsers(){
        axios.get("http://localhost:5000/user/").then((res) =>{
            setUsers(res.data);
        }).catch((err) => {
            alert(err.message);
        })
      }
     getUsers();
     },[])


function handleDeleteUser(id){

    const r = window.confirm ("Do you really want to Remove this User?"); 
    if(r ==true){
        axios.delete(`http://localhost:5000/user/delete/${id}`).then ((res)=>{
            alert("Delete Successfully");
            window.location = `/all-students`;
            setUsers()
        })
    }
 }


  return (
   
    <div> 
        <TeacherSidebar/>

        <div className="achievement-view">
     <center> <h1>Students Details</h1> </center>
           
    <br/>
        
    <table className="achievement-table">
   <thead>
     <input type="text" placeholder = "Search Student Name " onChange ={(e) =>{
     setSearch(e.target.value);
     }} />
    <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>City</th>
            <th>Contact Number</th>
            <th>Date of Birthday</th>
            <th style={{ color: 'red' }}>Delete</th>
      
    </tr>
  </thead>
  <tbody>

  {users.filter((User) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === "") {
        return true;
    } else if (
        (User.userName && User.userName.toLowerCase().includes(searchTerm)) ||
        (User.email && User.email.toLowerCase().includes(searchTerm))
    ) {
        return true;
    }
    return false;
}).map((User) => (
    <tr key={User._id}>
        <td>{User.studentID}</td>
        <td>{User.userName}</td>
        <td>{User.email}</td>
        <td>{User.country}</td>
        <td>{User.city}</td>
        <td>{User.contactNo}</td>
        <td>{User.birthday}</td>
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
  
export default StudentsList;







