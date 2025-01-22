import React, { useState } from 'react'
import Form from './Components/Form'
import Ticket from './Components/Ticket';

const Home = () => {
    const [formData,setFormData]=useState(null);
    const [flag,setFlag]=useState(false);

    const getData=({image,name,mail,gitId})=>{
        setFormData({image,name,mail,gitId});
        setFlag(true);
    }

    return (
        <>
            {!flag && <Form getData={getData}/>}
            {flag && <Ticket formData={formData}/>}
        </>
    );
}

export default Home;