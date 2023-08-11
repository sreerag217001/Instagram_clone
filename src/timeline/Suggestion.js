import React from 'react'
import {Avatar} from "@mui/material";
import './Suggestion.css';
function Suggestion() {
  return (
    <div className='suggestions'>
     <div className="suggestions_title">
      Suggestions For You
     </div>
     <div className="suggestions_usernames">

      <div className="suggestion_username">
        <div className="username_left">
         <span className="avatar">
          <Avatar>A</Avatar>
         </span>
         <div className="username_info">
         <span className="username">Aravind</span>
       <span className="relation">New to Instagram</span>
         </div>
        </div>
        <button className="follow_button">Follow</button>
      </div>
      <div className="suggestion_username">
        <div className="username_left">
         <span className="avatar">
          <Avatar>R</Avatar>
         </span>
         <div className="username_info">
         <span className="username">Ram</span>
       <span className="relation">New to Instagram</span>
         </div>
        </div>
        <button className="follow_button">Follow</button>
      </div>
      <div className="suggestion_username">
        <div className="username_left">
         <span className="avatar">
          <Avatar>S</Avatar>
         </span>
         <div className="username_info">
         <span className="username">Sam</span>
       <span className="relation">New to Instagram</span>
         </div>
        </div>
        <button className="follow_button">Follow</button>
      </div>
      <div className="suggestion_username">
        <div className="username_left">
         <span className="avatar">
          <Avatar>S</Avatar>
         </span>
         <div className="username_info">
         <span className="username">Saniya</span>
       <span className="relation">New to Instagram</span>
         </div>
        </div>
        <button className="follow_button">Follow</button>
      </div>

     </div>
    </div>
  )
}

export default Suggestion
