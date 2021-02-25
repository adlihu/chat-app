import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';


const Message = ({ message: {user, text}, name}) => {
     let isSentByCurrentUser = false;

     if (user === name){
          isSentByCurrentUser = true;
     }
     if (user === 'Admin'){
          return (
               <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                         <p className="messageText colorAdmin">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10 colorAdmin"><b>{user}</b></p>
               </div>
          )
     }
     return (
          isSentByCurrentUser
          ? (
               <div className="messageContainer justtifyEnd">
                    <p className="sentText pr-10">{name}</p>
                    <div className="messageBox backgroundBlue">
                         <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
               </div>
          )
          : (
               <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                         <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
               </div>
          )
     )
}

export default Message;