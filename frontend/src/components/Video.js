import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import UserSideBar from "./UserSideBar";
import '../components/css/Video.css'
function Video() {
  const videoRef = useRef(null);
  const [predictions, setPredictions] = useState('');
  const [sendingInterval, setSendingInterval] = useState(null);
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [UserName, setUserName] = useState('');
  const [Status, setStatus] = useState('');

  useEffect(() => {
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(sendingInterval);
    };
  }, [sendingInterval]);

  const toggleVideoAndSendFrames = () => {
    if (!isVideoStarted) {
      // Start video and send frames
      startVideo();
      startSendingFrames();
    } else {
      // Stop video
      stopVideo();
    }
  };

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        setIsVideoStarted(true);
      })
      .catch(err => console.error('Error accessing webcam:', err));
  };

  const stopVideo = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setIsVideoStarted(false);
    }
    // Clear the sending interval
    clearInterval(sendingInterval);
  };

  const startSendingFrames = () => {
    // Set up interval to send frames every 2 seconds
    const intervalId = setInterval(() => {
      sendFrameToServer();
    }, 1000); // Send every 2 seconds
    setSendingInterval(intervalId);
  };

  const sendFrameToServer = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg');

    const blob = dataURItoBlob(imageData);
    const formData = new FormData();
    formData.Videoend('image', blob, 'image.jpg');

    axios.post('http://127.0.0.1:5000/predict', formData)
      .then(response => {
        const prediction = response.data.prediction;
        setPredictions(prediction);
        if (prediction === 'closed') {
          // Send prediction result to MongoDB database
          sendPredictionToMongoDB(prediction);
        }
      })
      .catch(error => {
        console.error('Error sending frame to server:', error);
      });
  };

  const sendPredictionToMongoDB = (prediction) => {
    const email = localStorage.getItem("email"); // Fetch email from localStorage

    // Replace 'your_mongodb_endpoint' with your actual MongoDB endpoint
    axios.post('http://localhost:5200/notify/add', { 
      UserName: email,
      Status: prediction })
      .then(response => {
        console.log('Prediction sent to MongoDB:', response.data);
      })
      .catch(error => {
        console.error('Error sending prediction to MongoDB:', error);
      });
  };

  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    return blob;
  }

  return (
    <div>
       <UserSideBar />
       <div className="container-video">
      <div className="video-container">
        <video className='detect' ref={videoRef} width="640" height="480" autoPlay></video>
      </div>
      <div className="buttons-container">
        <button onClick={toggleVideoAndSendFrames}>
          {isVideoStarted ? 'Video Started' : 'Start Video'}
        </button>
        <button onClick={stopVideo}>Stop Video</button>
      </div>
      <p>Predictions: {predictions}</p>
    </div>
    </div>
    
  );
}

export default Video;
