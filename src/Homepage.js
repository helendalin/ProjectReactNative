import React,{useState} from "react";
//import { Link } from "react-router-dom";
import './Homepage.css';
import ImageLogo from './images/Lao2.png'
import ImagePic from './images/pic.jpg'
import ImagePic2 from './images/pic2.jpg'


function Homepage(){

return (
    // <div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
    //     <div className=""></div>
        
    // </div>
    <div className="mobile-frame ">
      <div className="mobile-screen">
        <div className="content">
        <img src={ImageLogo} alt="Example Image" width="130" />
        
        <div className="header">
            <h1 id="title">TOURISM GOALS</h1>
        </div>

        <div className="content1">
          <p className="tle1"> The Wat Phou Temple Complex in Chmpasak</p>
          <img src={ImagePic} width="150"/>
          <p id="text1">This is one of Southeast Asia’s best examples of both early and classic Khmer architecture dating from the 7th to 12th centuries in year 2001. </p>
        </div>
        <div className="content2">
          <p className="tle2"> The Wat Phou Temple Complex</p>
          <img src={ImagePic2} width="150"/>
          <p id="text2">This is one of Southeast Asia’s best examples of both early and classic Khmer architecture dating from the 7th to 12th centuries in year 2001. </p>
        </div>
            
            
         
        </div>
      </div>
    </div>
) 
};
export default Homepage;
