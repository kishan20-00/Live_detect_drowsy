import React, { Fragment, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../components/css/Feedback.css'
import moment from 'moment';
import UserSideBar from './UserSideBar';
import Header from './header';

const localizer = momentLocalizer(moment);

const Feedback = ({ userName }) => {
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0); // State for the rating
    const [rating3, setRating3] = useState(0); 
    const [rating4, setRating4] = useState(0); 
    const [rating5, setRating5] = useState(0); 
    const [rating6, setRating6] = useState(0); 
    const [comments, setComments] = useState(''); // State for the comments

 
    const handleRatingChange = (event) => {
        const clickedValue = Number(event.target.value); // Convert the value to a number
        setRating(clickedValue); // Update the rating state with the clicked value
        
    };

    const handleRatingChange2 = (event) => {
        const clickedValue = Number(event.target.value); // Convert the value to a number
        setRating2(clickedValue); // Update the second rating state with the clicked value
    };
    

    const handleRatingChange3 = (event) => {
      const clickedValue = Number(event.target.value); // Convert the value to a number
      setRating3(clickedValue); // Update the second rating state with the clicked value
  };

    const handleRatingChange4 = (event) => {
    const clickedValue = Number(event.target.value); // Convert the value to a number
    setRating4(clickedValue); // Update the second rating state with the clicked value
  };

  const handleRatingChange5 = (event) => {
    const clickedValue = Number(event.target.value); // Convert the value to a number
    setRating5(clickedValue); // Update the second rating state with the clicked value
  };

  const handleRatingChange6 = (event) => {
    const clickedValue = Number(event.target.value); // Convert the value to a number
    setRating6(clickedValue); // Update the second rating state with the clicked value
  };





    const handleCommentsChange = (event) => {
        setComments(event.target.value); // Update the comments state
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any submission logic here, for example:
        console.log('Rating:', rating);
        console.log('Comments:', comments);
        // Reset the form after submission if needed
        setRating(0);
        setComments('');
    };

 // Sample event data with some events marked as completed
 const events = [
    {
      id: 1,
      title: 'Upcoming Event',
      start: new Date(2024, 1, 24, 10, 0),
      end: new Date(2024, 1, 24, 12, 0),
      completed: false,
    },
    {
      id: 2,
      title: 'Completed Event',
      start: new Date(2024, 1, 25, 14, 0),
      end: new Date(2024, 1, 25, 16, 0),
      completed: true,
    },
    // Add more events as needed
  ];

  // Function to set event styles based on completed status
  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: event.completed ? '#ccc' : '#007bff', // Set background color based on completion status
      borderRadius: '0px', // Adjust border radius as needed
      opacity: 0.8,
      color: 'white',
      border: 'none',
      display: 'block',
    };
    return {
      style: style
    };
  };


  

    return (
        <div >
        <UserSideBar/>
        <Header/>
        <div className="feedback-page">
         
          
          <div className="announcement-container">
            
           
                <div className=" event-calendar">
                 <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    eventPropGetter={eventStyleGetter} // Pass event styling function 
                 /><br/><br/>
                 <label style={{color: '#ccc'}}>completed events</label><br/><br/>
                 <label style={{color: '#007bff'}}>Upcoming events</label>
           </div>
           

          </div>
          <div className="custom-box">
            <p>SL_CBC_OND23_FSJAVA_SEC1</p>
         </div> 
        
            
        </div>
         <div className='feedback-form'>
         <h1>Feedback Form</h1>
         <div className="sub-headings-feedback">
            <label>Rating info.</label>
            <div>
            
            <select className="feedback-dropdown-box1">
            <option value="">Topic</option>
            <option value="topic1">Topic1</option>
            <option value="topic1">Topic1</option>
            </select>
            <select className="feedback-dropdown-box2">
            <option value="">Educator</option>
            <option value="topic1">Educator1</option>
            <option value="topic1">Educator2</option>
            </select>
            <select className="feedback-dropdown-box3">
            <option value="">Training Week#</option>
            <option value="topic1">Training Week1</option>
            <option value="topic1">Training Week2</option>
            </select>
            </div>
            
         </div>
         <div className="feedback-for-eductor-form">
         <form className="form"onSubmit={handleSubmit}>
                <h3>Feedback For Educator</h3>
                <div className="question">
                    <label>1. My educator explained concepts well:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star${value}`}
                                name="rating"
                                value={value}
                                checked={rating === value}
                                onChange={handleRatingChange}
                                />
                                <label htmlFor={`star${value}`} style={{backgroundImage: `url(${value <= rating ? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div>
                 <div className="question">
                    <label>2. I received constant support for the lab work/ exercises/ activities:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star1${value}`}
                                name="rating2"
                                value={value}
                                checked={rating2 === value}
                                onChange={handleRatingChange2}
                                />
                                <label htmlFor={`star1${value}`} style={{backgroundImage: `url(${value <= rating2 ? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div>
                 <div className="question">
                    <label>2. My educator explained concepts well:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star2${value}`}
                                name="rating3"
                                value={value}
                                checked={rating3 === value}
                                onChange={handleRatingChange3}
                                />
                                <label htmlFor={`star2${value}`} style={{backgroundImage: `url(${value <= rating3 ? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div><br/><br/>
                 <h3>Feedback For LMS</h3>
                 <div className="question">
                    <label>1. The LMS was accessible when needed:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star3${value}`}
                                name="rating4"
                                value={value}
                                checked={rating4 === value}
                                onChange={handleRatingChange4}
                                />
                                <label htmlFor={`star3${value}`} style={{backgroundImage: `url(${value <= rating4? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div>

                 <div className="question">
                    <label>2. The Speed of upload was good:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star4${value}`}
                                name="rating5"
                                value={value}
                                checked={rating5 === value}
                                onChange={handleRatingChange5}
                                />
                                <label htmlFor={`star4${value}`} style={{backgroundImage: `url(${value <= rating5? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div>

                 <div className="question">
                    <label>3. It was easy to use the LMS and complete Exercise & Assessment:</label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                             <React.Fragment key={value}>
                                <input
                                type="radio"
                                id={`star5${value}`}
                                name="rating6"
                                value={value}
                                checked={rating6 === value}
                                onChange={handleRatingChange6}
                                />
                                <label htmlFor={`star5${value}`} style={{backgroundImage: `url(${value <= rating6 ? 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png' : 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'})`}}></label>
                                </React.Fragment>
                           ))}
                    </div>

                 </div>


                {/* Add more questions and ratings here */}
                <div className="comment">
                    <label>Comments:</label>
                    <textarea
                        value={comments}
                        onChange={handleCommentsChange}
                        rows="4"
                        cols="50"
                        placeholder="Enter your comments"
                    ></textarea>
                </div>
                <button type="submit">Submit Your Feedback</button>
            </form>
         </div>
        
      </div>
        </div>
      );
  };
  

export default Feedback;