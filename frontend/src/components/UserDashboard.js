import React from 'react';
import { Carousel,Container,Row,Col} from "react-bootstrap";
import UserSideBar from './UserSideBar';
import Header from './header';
import { FaUser, FaMedal, FaComment, FaChartBar,FaUserPlus,FaUsers,FaSignOutAlt,FaHome } from 'react-icons/fa';

function UserDashboard(){
    return (
        <div>
        <UserSideBar/>
        <Header/>
       <br/>
        <div  className="carousel-container">
    <Container>
    
    <Carousel>
    <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://media.vitecoelearning.eu/vitecoelearning.eu/wp-content/uploads/2023/09/e-learning-1-fb-EN.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://assets.entrepreneur.com/content/3x2/2000/20190724133745-shutterstock-579867070.jpeg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/10/07/Pictures/_78841a80-6cd8-11e5-9358-ce0f694bc37c.jpg"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
</Container>
        </div>
       </div>
    );
}

export default UserDashboard;
