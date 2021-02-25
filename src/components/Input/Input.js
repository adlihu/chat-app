import React from 'react';
import './Input.css';


const Input = ({message, setMessage, sendMessage}) => (
     <form className="form">
          <input 
               style={{borderTop:"1px solid #D3D3D3"}}
               className="input"
               type="text"
               placeholder="Type a message..."
               value={message}
               onChange={(event) => setMessage(event.target.value)}
               onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          />
          
          <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
     </form>
)

export default Input;