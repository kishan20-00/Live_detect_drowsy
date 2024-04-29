import React from 'react';
import '../components/css/Performance.css'; // Import CSS file for styling
import { FaUser } from 'react-icons/fa';
import UserSideBar from './UserSideBar';
import Header from './header';
import '../components/css/Feedback.css'


const Performance = () => {
    // Example percentage values
    const performancePercentage1 = 50;
    const performancePercentage2 = 5;
    const jriscore =0;
    const quizAverage=84;


  return (
    <div>
      <UserSideBar/>
      <Header/>
      <div  className="performace-view">
        <div className="custom-box">
          <h5 className="custom-box-title"><b>SL_CBC_OND23_FSJAVA_SEC1</b></h5>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className='card-container-performace' >
              <div className="card-performance" >
                <div style={{ display: 'flex', alignItems: 'left' }}>
                <div>
                  <FaUser className="icon"  style={{ fontSize: '24px', marginTop: '20px' }} />
                </div>
                <div>
                  <p style={{ marginTop: '21px' }}><b>Gowthami Ravichandran</b> <br/>T-code: gawthamipragathi@gmail.com</p>
               </div>
               </div><br/>
               <div class="circle-wrapper" style={{ display: 'flex' }}>
            <div class="circle-container">
         

          <svg width="100%" height="100%" >
            <circle cx="25%" cy="25%" r="10%" strokeWidth="3" fill="none" stroke="#ddd"></circle>
            <circle cx="25%" cy="25%" r="10%" strokeWidth="3" strokeDasharray="calc(2 * 10 * 3.14)" style={{ strokeDashoffset: `calc(2 * 10 * 3.14 - (2 * 10 * 3.14 * ${jriscore}) / 100)` }} stroke="#87CEEB" ></circle>
          </svg>
          <div class="circle-text" style={{ marginLeft: '-120px' }}>
            <h5>52%</h5>
            <p>JRI Score</p>
          </div>
        </div>
        <div class="circle-container">
        <svg width="100%" height="100%">
        <circle cx="25%" cy="25%" r="10%" strokeWidth="3" fill="none" stroke="#ddd"></circle>
        <circle cx="25%" cy="25%" r="10%" strokeWidth="3" strokeDasharray="calc(2 * 10 * 3.14)" style={{ strokeDashoffset: `calc(2 * 10 * 3.14 - (2 * 10 * 3.14 * ${performancePercentage1}) / 100)` }} stroke="#87CEEB" ></circle>
        </svg>
          <div class="circle-text" style={{ marginLeft: '-120px' }}>
            <h5>75%</h5>
            <p>Attandance</p>
          </div>
        </div>
        <div class="circle-container">
        <svg width="100%" height="100%">
        <circle cx="25%" cy="25%" r="10%" strokeWidth="3" fill="none" stroke="#ddd"></circle>
        <circle cx="25%" cy="25%" r="10%" strokeWidth="3" strokeDasharray="calc(2 * 10 * 3.14)" style={{ strokeDashoffset: `calc(2 * 10 * 3.14 - (2 * 10 * 3.14 * ${quizAverage}) / 100)` }} stroke="#87CEEB" ></circle>
        </svg>
          <div class="circle-text" style={{ marginLeft: '-140px' }}>
            <h5>84%</h5>
            <p>Daily Quiz Avg. Score</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          
        <br/>
        <div className="tab-container">
          <div className="mcq-container">
            <div className= "mcq-container-title">
              <h4 >MCQ Assessment</h4>
              <p>Avg score</p>
            </div>
          </div><br/><br/>
          <div className="assessments-container">
            <div >
              <h6 className="icon"><span className="dot-icon" style={{ fontSize: '24px', marginLeft: '10px', color: 'green' }}>•</span></h6>
              <p className="icon"><span className="dot-icon" style={{ fontSize: '24px', marginLeft: '10px', color: 'green' }}>•</span></p>
              <p className="icon"><span className="dot-icon" style={{ fontSize: '24px', marginLeft: '10px', color: 'green' }}>•</span></p>
              <p className="icon"><span className="dot-icon" style={{ fontSize: '24px', marginLeft: '10px', color: 'green' }}>•</span></p>
              </div>
              <div className="assessment-col">
                <h4>Assessments</h4>
                <p>Term1_S2_JAVA_MCQ_Assessment</p>
                <p >Term2_S2_JAVA_MCQ_Assessment</p>
                <p>Term3_S2_JAVA_MCQ_Assessment</p>
                <p>Term4_S2_JAVA_MCQ_Assessment</p>
              </div>
              <div className="percentage-col">
                <h6>%</h6>
                <p>73.3%</p>
                <p>61.7%</p>
                <p>81.7%</p>
                <p>51.7%</p>
              </div>
          </div>
          <div className="grid-wrapper">
            <div className="grid-card-1">
              <br/><br/>
              <h3 className= "mcq-container-title">Performance</h3>
              <br/><br/><br/>
              <div className="circle-graph-container">
              <div className="circle-graph">
                <svg>
                  <circle cx="50%" cy="50%" r="25%" strokeWidth="3" fill="none" stroke="#ddd"></circle>
                  <circle cx="50%" cy="50%" r="25%" strokeWidth="3" strokeDasharray="calc(2 * 25 * 3.14)" style={{ strokeDashoffset: `calc(2 * 25 * 3.14 - (2 * 25 * 3.14 * ${performancePercentage1}) / 100)` }} stroke="#007bff"></circle>
                </svg>
                <div className="percentage"><b>{performancePercentage1}% </b></div>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#007bff" className='mine2'> <b>Mine </b></text>
                </div>
                <div className="circle-graph">
                  <svg>
                    <circle cx="50%" cy="50%" r="25%" strokeWidth="3" fill="none" stroke="#ddd"></circle>
                    <circle cx="50%" cy="50%" r="25%" strokeWidth="3" strokeDasharray="calc(2 * 25 * 3.14)" style={{ strokeDashoffset: `calc(2 * 25 * 3.14 - (2 * 25 * 3.14 * ${performancePercentage2}) / 100)` }} stroke="#87CEEB" ></circle>
                    </svg>
                    <div className="percentage"><b>{performancePercentage2}%</b></div>
                    <text x="50%" y="50%" dominantBaseline="bottom" textAnchor="bottom" fill="#87CEEB" className='mine2'><b>My peers</b></text>
                 </div>

              </div>
            </div>
            <div className="grid-card-1">
              <br/><br/>
              <h3 className="mcq-container-title">Participation</h3><br/>
              <p className="mcq-container-title">The Required Attendance is 75%.</p>
              <br/><br/><br/>
              <div className="graph-container">
                <h4 className="mcq-container-title mine">Mine</h4>
                <svg width="100%" height="100">
                  {/* Background line */}
                  <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#ddd" strokeWidth="10" />
                  {/* Dynamic blue line based on attendance percentage */}
                  <line x1="10%" y1="50%" x2={`${10 + performancePercentage1 * 0.8}%`} y2="50%" stroke="#007bff" strokeWidth="10" />
                  {/* Flag for attendance percentage over 75% */}
                  <>
                  <text className='attendance-perecentage' x={`${10 + performancePercentage1 * 0.8 + 5}%`} y="30%"   fill="black">{performancePercentage1}%</text>
                  <polygon points={`${10 + performancePercentage1 * 0.8 + 10}%, 20% ${10 + performancePercentage1 * 0.8 + 20}%, 15% ${10 + performancePercentage1 * 0.8 + 20}%, 25%`} fill="#007bff" />
                  </>
                </svg>
              </div>
            </div>
            <div className="grid-card-3"></div>
            <div className="grid-card-4">
              <br/><br/>
              <h3 className="mcq-container-title">Your Educator(s)</h3><br/>
              <div className="assessments-container"  style={{ display: 'flex', alignItems: 'center' }}>
                <div >
                  <FaUser className="icon"  style={{ fontSize: '24px', marginTop: '18px', marginLeft: '20px' }} />
                </div>
                <div className="assessment-col">
                  <h5 style={{ marginTop: '18px' }} ><b>Gowthami Ravichandran</b></h5>
                </div>
              </div>
              
              <p  style={{ marginTop: '-250px', marginLeft: '50px' }} >Full Stack Java Trainer, Worked as Capstone squad lead</p>
              <p  style={{ marginTop: '-5px', marginLeft: '50px' }} >15250</p>
            </div>
            <div className="grid-card-4">
              <div className="assessments-container">
                <div className="assessment-col">
                  <h3><b>Quize</b></h3>
                  <p>DQ_Angular_Day36</p>
                  <p>DQ_Angular_Day35</p>
                  <p>DQ_Angular_Day34</p>
                  <p>DQ_Angular_SpringBoot_Microservices</p>
                </div>
              <div className="percentage-col">
                <p>%</p>
                <p>100%</p>
                <p>80%</p>
                <p>90%</p>
                <p>85%</p>
              </div>
             </div>
         </div>
        </div>
      </div>
     </div>
     </div>
     );
};

export default Performance;








