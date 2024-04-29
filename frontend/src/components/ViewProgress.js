import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Import axios for making HTTP requests
import '../components/css/ViewProgress.css'
import UserSideBar from './UserSideBar';
import { useParams } from "react-router";
import { FaSearch } from 'react-icons/fa';
import Header from './header';
import axios from 'axios';

function ViewProgress() {
   const [email, setEmail] = useState([]);
   const [name, setName] = useState([]);
   const [attendance, setAttendance] = useState([]);
   const [progress, setProgress] = useState([]);
   const [users, setUsers] = useState([]);
   const [search, setSearch] = useState("");
   const{id} = useParams();



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




  return (
   
   

    <div> 
        <UserSideBar />
        <Header/>

     <div className="achievement-view"><br/><br/>
     <center> <h1>Student Progress</h1> </center>
           
    <br/>
        
    <table className="achievement-table">
   <thead>
    <h6>Teacher Name:</h6>
    <h6>Teacher ID:</h6><br/>
    <div style={{marginLeft:"10px"}}  ><input type="text" placeholder = "Search Email " onChange ={(e) =>{
     setSearch(e.target.value);
     }} /><FaSearch/></div>
     
    <tr>
           
            <th>email</th>
            <th>name</th>
            <th>attendance</th>
            <th>progress</th>
           
          
      
    </tr>
  </thead>
  <tbody>
  <td>gauthami@gmail.com</td>
      <td>Gauthami</td>
      <td>75%</td>
      <td>84%</td>

 {/* {users.filter(Users => {
                          if(search == ""){
                              return Users
                          }
                          else if(Users.email.toLowerCase().includes(search.toLowerCase())){
                              return Users
                          }
                      }).
    
    
  map((Users) => {

    return(
      <tr key={Users._id}>
      <td>gauthami@gmail.com</td>
      <td>Gauthami</td>
      <td>75%</td>
      <td>84%</td>
      
     
     
    </tr>
    );
    })} 
  */}
   
    </tbody>
</table>
</div>


 </div>
    
  )

}
  
export default ViewProgress;







