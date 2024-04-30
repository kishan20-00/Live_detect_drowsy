import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


import Login from './components/Login';
import StudentRegistration from'./components/StudentRegistration';
import Feedback from './components/Feedback';
import Performance from './components/Performance';
import UserSideBar from './components/UserSideBar';
import UserDashboard from './components/UserDashboard';
import Header from './components/header';
import ViewProgress from './components/ViewProgress';
import MyProfile from './components/MyProfile';
import TeacherRegistration from './components/TeacherRegistration';
import Video from './components/Video';
import TeacherDashboard from './components/TeacherDashboard';
import SplashScreen from './components/SplashScreen';
import StudentsList from './components/StudentsList';
import AllNotification from './components/AllNotifications';
import AddMarks from './components/AddMarks';
import AllResults from './components/AllResults';

function App() {
  return (

    <Router>
      <div>
        {/* Use Routes instead of directly using Route */}
        <Routes>
          {/* Specify your routes inside Routes */}
          
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<StudentRegistration />} />
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/performance" element={<Performance/>}/>
          <Route path="/sidebar" element={<UserSideBar/>}/>
          <Route path="/userDashboard" element={<UserDashboard/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/progress/:email" element={<ViewProgress/>}/>
          <Route path="/profile/:email" element={<MyProfile/>}/>
          <Route path="/teacher" element={<TeacherRegistration/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/teacherDashboard" element={<TeacherDashboard/>}/>
          <Route path="/all-students" element={<StudentsList/>}/>
          <Route path="/notifications" element={<AllNotification/>}/>
          <Route path="/add-marks" element={<AddMarks/>}/>
          <Route path="/all-results" element={<AllResults/>}/>
      
          
          

          
          
        </Routes>
      </div>
    </Router>
   
    
  );
}

export default App;
