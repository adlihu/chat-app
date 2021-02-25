import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = (props) => (
     
     <div className="infoBar">
          <div className="leftInnerContainer">
               <h3>{props.room}</h3>
          </div>
          
          <div className="rightInnerContainer">
               {/* <a href="/"><img src={closeIcon} alt="close icon"/></a> */}
               <Link to="/"><img src={closeIcon} alt="close icon"/></Link>
          </div>
     </div>
)

export default InfoBar;

//"homepage": "http://adlihu.github.io/chat-app/",