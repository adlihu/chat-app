import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './Users.css';



const Users = (props) => (
     <div className="textContainer">
     {
          props.users
        ? (
          <div>
            <h1>Active Users:</h1>
            <div className="activeContainer">
              <h2>
                {props.users.map((user) => (
                  <div key={user.name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {user.name}
                    
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
     </div>
);

export default Users;