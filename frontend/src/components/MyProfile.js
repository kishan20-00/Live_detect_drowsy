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
