import React from 'react'
import { Avatar } from './styled/Avatar.styled';

const Ticket = ({formData}) => {
  const {image,name,mail,gitId}=formData;
  
  return (
    <div>
      <h2>
        Congrats, {name}! Your ticket is ready.

        We've emailed your ticket to {mail} and will send updates in the run up to the event.

        Coding Conf
        Jan 31, 2025 / Austin, TX
      </h2>
      
      <Avatar src={image}/> 
      <h2>{name}</h2>
      <span>{gitId}</span>
    </div>
  )
}

export default Ticket;