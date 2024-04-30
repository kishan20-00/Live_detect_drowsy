import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import TeacherSidebar from './TeacherSidebar';


function AllNotification() {
   const [users, setUsers] = useState([]);
   const [search, setSearch] = useState("");
   
   useEffect(() =>{
    function getUsers(){
        axios.get("http://localhost:5000/notify/").then((res) =>{
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
     <center> <h1>Notifications</h1> </center>
           
    <br/>
        
    <table className="achievement-table">
   <thead>
     <input type="text" placeholder = "Search Student Name " onChange ={(e) =>{
     setSearch(e.target.value);
     }} />
    <tr>
            <th>Email</th>
            <th>Status</th>
            <th style={{ color: 'red' }}>Delete</th>
      
    </tr>
  </thead>
  <tbody>

  {users.filter((User) => {
    if (search === "") {
        return true;
    } else if (
        User.email &&
        User.email.toLowerCase().includes(search.toLowerCase())
    ) {
        return true;
    }
    return false;
}).map((User) => (
    <tr key={User._id}>
        <td>{User.UserName}</td>
        <td>{User.Status}</td>
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
  
export default AllNotification;







