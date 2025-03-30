import React from 'react'
import image from '../assets/image.png' 
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className="user-container">
    <p id='user-name'>{props.name}</p>
    <img id='user-img' src={image} alt='My Image' />

    <p id='user-desc'>Description of Tushar Pandey</p>
      
    </div>
  )
}

export default UserCard
