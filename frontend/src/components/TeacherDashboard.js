import React from 'react';
import { Carousel,Container} from "react-bootstrap";
import  TeacherSidebar from './TeacherSidebar';

function TeacherDashboard(){
    return (
        <div>
        < TeacherSidebar/>
        <div style={{ marginLeft: '320px' }}> 

        <h1>Welcome to Teacher Dashboard</h1>
        </div>
      
       <br/>
        <div  className="carousel-container">
    <Container>
    
    <Carousel>
    <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://www.eschoolnews.com/files/2020/09/e-learning-teacher.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://www.fau.edu/newsdesk/images/news/teaching-tips-newsdesk.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      width={100} height={800}
      className="d-block w-100"
      src="https://exclusive.multibriefs.com/images/exclusive/0629teacheronline.jpg"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
</Container>
        </div>
       </div>
    );
}

export default TeacherDashboard;
