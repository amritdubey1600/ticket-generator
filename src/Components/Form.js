import React, { useState } from 'react';
import { UploadArea } from './styled/UploadArea.styled';
import { Avatar } from './styled/Avatar.styled';
import { ChildContainer } from './styled/ChildConatiner.styled';
import { Input } from './styled/Input.styled';
import { ImageButton } from './styled/ImageButton.styled';
import { SubmitButton } from './styled/SubmitButton.styled';

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

    const removeImage=(e)=>{
        e.stopPropagation();
        setImage(null);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        getData({image,name,mail,gitId});
    }

    return (
    <ChildContainer>
        <h2>
            Your Journey to Coding Conf 2025 Starts Here!
        </h2>

        <p>
            Secure your spot at next year's biggest coding conference.
        </p>    

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
                    <div>
                        <ImageButton onClick={removeImage}>Remove Image</ImageButton>
                        <ImageButton type='button' 
                        onClick={(e)=>{
                            document.getElementById("fileInput").click();
                            e.stopPropagation();
                        }}>Change Image</ImageButton>
                    </div>
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
            <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Email Address</label>
            <Input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>

            <label>Github Username</label>
            <Input type="text" value={gitId} onChange={(e)=>setGitId(e.target.value)}/>

            <SubmitButton type='submit'>Generate My Ticket</SubmitButton>
        </form>
    </ChildContainer>
  )
}
