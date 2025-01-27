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

    return (
        <Container>
            <h2><Logo />Conding Conf</h2>
            {!flag && <Form getData={getData}/>}
            {flag && <Ticket formData={formData}/>}
        </Container>
    );
}

export default Home;