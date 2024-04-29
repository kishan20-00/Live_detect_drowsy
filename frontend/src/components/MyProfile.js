/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from "react-bootstrap";
import UserSideBar from "./UserSideBar";

import '../components/css/MyProfile.css'

const MyProfile = (props) => {
    const [user, setUser] = useState(null);
   
    const email = localStorage.getItem("email");

    useEffect(() => {
        async function getUser() {
            try {
                // Fetch user data based on the email state
                const response = await axios.get(`http://localhost:5000/user/get/${email}`);
                setUser(response.data.user);
            } catch (error) {
                alert(error.message);
            }
        }
        getUser();
    }, [email]); // Fetch data when email state changes

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/user/update/${email}`, user);
            alert('Profile updated successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    if (!user) {
        // Render loading state or return null if user data is not available yet
        return null;
    }

    return (
        <div>
            <UserSideBar />
            <h6 className="profile-title" style={{ marginLeft: '300px' }}>LPF ACADEMY</h6> <br />
            <h6 className="profile-sub-title" style={{ marginLeft: '300px' }}>Colombo</h6>

            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <Image src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 class="f-w-600">{user.userName}</h6>
                                            <p>{user.userType}</p>
                                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{user.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Date of Birth</p>
                                                    <h6 class="text-muted f-w-400">98979989898</h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Recent</p>
                                                    <h6 class="text-muted f-w-400">Sam Disuja</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Most Viewed</p>
                                                    <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                            </div>
                                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MyProfile;
*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserSideBar from './UserSideBar';

function MyProfile() {
    const [user, setUser] = useState(null);
    const email = localStorage.getItem("email"); // Fetch email from localStorage

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:5000/user/get/${email}`);
                setUser(response.data.user);
            } catch (error) {
                alert(error.message);
            }
        }
        getUser();
    }, [email]); // Include email in the dependency array to fetch data whenever it changes

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/user/update/${email}`, user);
            alert('Profile updated successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <UserSideBar />
            <div className="user-profile-card">
                <form onSubmit={handleSubmit}>

                    <h1>User Profile</h1>
                    <div className="user-avatar">
                       
                        <img src="https://static.thenounproject.com/png/363640-200.png" alt="Avatar" />
                    </div>
                    <br />
                    <table className="achievement-table">
                        <thead>
                            <tr>
                                <th scope="col">Student ID</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date of Birthday</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user ? (
                                <tr>
                                    <td>{user.email}</td>
                                    <td>
                                        <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
                                    </td>
                                    <td>
                                        <input type="text" name="rank" value={user.email} onChange={handleInputChange} />
                                    </td>
                                   
                                    <td>
                                        <input type="date" name="birthday" value={user.birthday  ? new Date(user.birthday).toISOString().split('T')[0] : ''} onChange={handleInputChange} />
                                    </td>
                                   
                                    <td>
                                        <button type="submit">Update</button>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="9">Loading...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default MyProfile;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from "react-bootstrap";
import UserSideBar from "./UserSideBar";

import '../components/css/MyProfile.css'
function MyProfile() {
    const [user, setUser] = useState("");
    const email = localStorage.getItem("email"); // Fetch email from localStorage

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:5000/user/get/${email}`);
                setUser(response.data.user);
            } catch (error) {
                alert(error.message);
            }
        }
        getUser();
    }, [email]); // Include email in the dependency array to fetch data whenever it changes

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/user/update/${email}`, user);
            alert('Profile updated successfully');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <UserSideBar />
            <h6 className="profile-title" style={{ marginLeft: '300px' }}>LPF ACADEMY</h6> <br />
            <h6 className="profile-sub-title" style={{ marginLeft: '300px' }}>Colombo</h6>

            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <Image src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 class="f-w-600">Student</h6>
                                            
                                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <form onSubmit={handleSubmit}>
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label for="userName" class="m-b-10 f-w-600">User Name</label>
                                                        <input type="text" id="userName" name="userName" value={user.userName} onChange={handleInputChange} />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label for="email" class="m-b-10 f-w-600">Email</label>
                                                        <input type="text" id="email" name="email" value={user.email} readOnly/>
                                                    </div>
                                                </div><br/>
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Address</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label for="country" class="m-b-10 f-w-600">Country</label>
                                                        <input type="text" id="country" name="country" value={user.country} onChange={handleInputChange} />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label for="city" class="m-b-10 f-w-600">City</label>
                                                        <input type="text" id="city" name="city" value={user.city}  onChange={handleInputChange}/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label for="birthday" class="m-b-10 f-w-600">Date of Birth</label>
                                                        <input type="date" id="birthday" name="birthday" value={user.birthday ? new Date(user.birthday).toISOString().split('T')[0] : ''} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Update</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
