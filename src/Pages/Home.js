import React, { useState } from 'react';
import Form from '../Components/Form';
import Ticket from '../Components/Ticket';
import { Container } from '../Components/styled/Container.styled';
import Logo from '../Components/Logo';

const Home = () => {
    const [formData,setFormData]=useState(null);
    const [flag,setFlag]=useState(false);

    const getData=({image,name,mail,gitId})=>{
        setFormData({image,name,mail,gitId});
        setFlag(true);
    }

    const getHome=()=>{
        setFlag(false);
    }

    return (
        <Container>
            <Logo />
            {!flag && <Form getData={getData}/>}
            {flag && <Ticket formData={formData} getHome={getHome}/>}
        </Container>
    );
}

export default Home;