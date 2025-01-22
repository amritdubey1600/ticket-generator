import React, { useState } from 'react';
import { UploadArea } from './styled/UploadArea.styled';
import { Avatar } from './styled/Avatar.styled';

export default function Form({getData}) {
    const [image,setImage]=useState(null);
    const [err,setErr]=useState("");

    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [gitId,setGitId]=useState("");

    const handleFileInput=(file)=>{
        if(!file) return;

        if(!file.type.startsWith("image/")){
            setErr("File type must be PNG or JPG");
            return;
        }

        if(file.size>500*1024){
            setErr("File size must be less than 500KB");
            return;
        }

        setErr("");

        //reading the file
        const reader=new FileReader();
        reader.onload=(e)=>setImage(e.target.result);
        
        //image preview
        reader.readAsDataURL(file);
    };

    const handleInputChange=(e)=>{
        const file=e.target.files[0];
        handleFileInput(file);
    }

    const handleDragOver=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.effect="click";
    }

    const handleDrop=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        handleFileInput(e.dataTransfer.files[0]);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        getData({image,name,mail,gitId});
    }

    return (
    <div>
        <h2>
            Your Journey to Coding Conf 2025 Starts Here!
            Secure your spot at next year's biggest coding conference.
        </h2>

        <form onSubmit={handleSubmit}>
            <label>Upload Avatar</label>
            <UploadArea
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={()=>document.getElementById("fileInput").click()}
            >
                {image?
                <>
                    <Avatar src={image} />
                    <button onClick={()=>document.getElementById("fileInput").click()}>Change Image</button>
                </>
                :<p>Drag and drop or click to upload</p>}
            </UploadArea>
            <input 
                style={{display:'none'}}
                type="file" 
                id="fileInput"
                name="avatar" 
                accept="image/*"
                onChange={handleInputChange}
            />
            <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
            {err && <p>{err}</p>}
            
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Email Address</label>
            <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>

            <label>Github Username</label>
            <input type="text" value={gitId} onChange={(e)=>setGitId(e.target.value)}/>

            <button type='submit'>Generate My Ticket</button>
        </form>
    </div>
  )
}
