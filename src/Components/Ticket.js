import React from 'react'
import { Avatar } from './styled/Avatar.styled';
import { ChildContainer } from './styled/ChildConatiner.styled';
import { TicketContainer } from './styled/TicketContainer.styled';

const Ticket = ({formData}) => {
  const {image,name,mail,gitId}=formData;
  
  return (
    <ChildContainer>
      <h2>
        Congrats, {name}! Your ticket is ready.
      </h2>

      <p>
        We've emailed your ticket to {mail} and will send updates in the run up to the event.
      </p>

      <TicketContainer>
        <p>Coding Conf</p>
        <p>Jan 31, 2025 / Austin, TX</p>
        
        <Avatar src={image}/> 
        <h2>{name}</h2>
        <span>{gitId}</span>
      </TicketContainer>
    </ChildContainer>
  )
}

export default Ticket;