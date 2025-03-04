import React from 'react';
import { Avatar } from './styled/Avatar.styled';
import { ChildContainer } from './styled/ChildConatiner.styled';
import { TicketContainer } from './styled/TicketContainer.styled';
import { HeroTextContainer } from './styled/HeroTextContainer.styled';
import { PrintButton } from './styled/PrintButton.styled';
import { faHome, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer } from './styled/ButtonContainer.styled';

const Ticket = ({formData,getHome}) => {
  const {image,name,mail,gitId}=formData;

  const handlePrint=()=>{
    // media query in global css handles the printing logic
    window.print();
  }

  const handleHome=()=>{
    getHome();
  }
  
  return (
    <ChildContainer>
      <HeroTextContainer>
        Congrats, <em className='name'>{name}</em>! Your ticket is ready.
      </HeroTextContainer>

      <p className='subTitle'>
        We've emailed your ticket to <em className='mail'>{mail}</em> and will send updates in the run up to the event.
      </p>

      <TicketContainer id="ticket-container">
        <div>
          <div className='header'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
              <path fill="#F57463" d="M0 36c6.628 0 12-5.373 12-12S6.628 12 0 12v8.4a3.6 3.6 0 1 1 0 7.2V36ZM40 16c-2.05-.65-4.234-1-6.5-1C21.626 15 12 24.626 12 36.5c0 1.192.097 2.361.283 3.5h13.36A8.6 8.6 0 0 1 40 30.869V16ZM2.11 0C3.103 9 10.734 16 20 16S36.895 9 37.89 0H25.017a5.402 5.402 0 0 1-10.035 0H2.11Z"/>
            </svg>
            <h2>Coding Conf</h2>
          </div>
          <span>Jan 31, 2025 / Austin, TX</span>
        </div>
        
        <div className='footer'>
          <Avatar src={image}/> 
          <div className='names'>
            <h3>{name}</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" fill="none" viewBox="0 0 22 23">
                <path fill="#D1D0D5" fill-rule="evenodd" d="M13.022 15.221c.08.268.11.55.088.833l.002.44a.66.66 0 0 1-1.32 0v-.492c.025-.336-.074-.61-.276-.821a.66.66 0 0 1 .405-1.112c1.536-.17 2.559-.704 2.559-2.763 0-.515-.196-1.004-.55-1.375a.66.66 0 0 1-.142-.687c.108-.29.14-.598.096-.897-.225.076-.578.233-1.064.559a.66.66 0 0 1-.542.088 5.81 5.81 0 0 0-3.071 0 .66.66 0 0 1-.543-.088c-.48-.322-.831-.48-1.064-.556-.043.299-.01.606.096.895a.66.66 0 0 1-.14.684c-.359.377-.554.87-.551 1.39 0 2.032 1.027 2.576 2.568 2.768a.66.66 0 0 1 .394 1.112.992.992 0 0 0-.276.756l.001.475c0 .29-.192.549-.47.632a4.082 4.082 0 0 1-1.164.189c-1.22 0-1.799-.735-2.177-1.216-.157-.199-.319-.404-.43-.43a.66.66 0 0 1 .32-1.282c.55.137.867.54 1.147.895.377.478.64.817 1.449.691a2.174 2.174 0 0 1 .096-.683c-1.18-.31-2.778-1.177-2.778-3.904a3.296 3.296 0 0 1 .659-2 3.125 3.125 0 0 1 .17-1.948A.661.661 0 0 1 6.936 7c.192-.058.899-.166 2.214.648a7.105 7.105 0 0 1 3.186 0c1.315-.813 2.021-.704 2.213-.648a.66.66 0 0 1 .42.373c.267.62.325 1.3.172 1.949.428.57.66 1.26.66 1.984 0 2.76-1.596 3.617-2.778 3.915Zm1.252-11.853H6.846c-2.912 0-4.866 2.05-4.866 5.086v6.987c0 3.045 1.954 5.087 4.866 5.087h7.428c2.912 0 4.866-2.042 4.866-5.087V8.454c0-3.036-1.954-5.086-4.866-5.086Z" clip-rule="evenodd"/>
              </svg>
              <div>{gitId}</div>
            </span>
          </div>
        </div>
      </TicketContainer>

      <ButtonContainer>
        <PrintButton onClick={handlePrint}>
          <FontAwesomeIcon className='printIcon' icon={faPrint}/>Print
        </PrintButton>

        <PrintButton onClick={handleHome}>
          <FontAwesomeIcon className='homeIcon' icon={faHome}/>Home
        </PrintButton>
      </ButtonContainer>
      
    </ChildContainer>
  )
}

export default Ticket;