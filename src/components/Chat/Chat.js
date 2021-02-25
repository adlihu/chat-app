//import queryString from 'query-string'; //help get data from url
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InforBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Users from '../Users/Users';
import './Chat.css';


let socket;

const Chat = (props) => {
     const [name, setName] = useState('');
     const [room, setRoom] = useState('');
     const [users, setUsers] = useState('');
     const [message, setMessage] = useState('');
     const [messages, setMessages] = useState([]);
     const ENDPOINT = 'https://chat-app-react-2020.herokuapp.com/'; //Online application sever (not localhost:5000)

     useEffect(() => {
          const {name, room} = props.location.state;
          socket = io(ENDPOINT);  

          setName(name);
          setRoom(room);
          
          socket.emit('join', { name, room }, (error) => {
               if(error !== undefined){
                    //Redirects to home page if same username
                    alert(error);
                    return <Redirect to="/" />;
                    //window.location.href='/';
               }
               
          });

          //Unmount.. disconnect function
          return () => {
               socket.emit('disconnect');
               
               socket.off();
          }
     }, [ENDPOINT,props.location.state]);


     useEffect(() => {
          socket.on('message', (message) => {
               setMessages([...messages, message]);
          })
          socket.on('roomData',({users}) => {
               setUsers(users);
               console.log(users);
          })
     }, [messages]);

     // function for sending messages
     const sendMessage = (event) => {
          event.preventDefault();

          if(message) {
               socket.emit('sendMessage', message, () => setMessage(''));
          }
     }
     
     return (
          <div className="outerContainer">
               <Users users={users}/>
               <div className="container">
                    <InfoBar room={room}/>
                    <Messages messages={messages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
               </div>
               
          </div>
     )
}

export default Chat;