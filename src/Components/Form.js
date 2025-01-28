import React, { useState } from 'react';
import { UploadArea } from './styled/UploadArea.styled';
import { Avatar } from './styled/Avatar.styled';
import { ChildContainer } from './styled/ChildConatiner.styled';
import { Input } from './styled/Input.styled';
import { ImageButton } from './styled/ImageButton.styled';
import { HeroTextContainer } from './styled/HeroTextContainer.styled';
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
        if(!image){
            setErr("Upload an image");
            return;
        }
        
        getData({image,name,mail,gitId});
    }

    return (
    <ChildContainer>
        <HeroTextContainer>
            Your Journey to Coding Conf 2025 Starts Here!
        </HeroTextContainer>

        <p className='subTitle'>
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
                :<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30">
                        <path fill="#F57463" fill-rule="evenodd" d="M21.894 11.252a.264.264 0 0 1-.229-.225c-.368-2.634-2.51-5.924-6.663-5.924-4.465 0-6.3 3.636-6.657 5.928a.264.264 0 0 1-.228.22c-2.95.362-4.945 2.622-4.945 5.729a5.802 5.802 0 0 0 3.423 5.277 6.274 6.274 0 0 0 2.305.468h2.528a.45.45 0 0 0 .45-.45c0-.267-.233-.472-.5-.484a3.077 3.077 0 0 1-2.049-.9 3.123 3.123 0 0 1 0-4.418l3.461-3.462c.147-.146.307-.277.479-.392.076-.05.158-.085.236-.129.1-.054.196-.114.301-.158.1-.04.206-.065.308-.096.092-.027.181-.062.276-.081.191-.039.384-.056.578-.059.011 0 .022-.004.034-.004.01 0 .018.003.027.004.196.002.391.02.584.059.094.019.18.053.271.08.105.031.211.055.313.098.1.042.193.098.288.15.084.046.17.083.25.137.154.103.295.221.428.349.016.014.034.024.049.039l3.463 3.463a3.124 3.124 0 0 1 0 4.42c-.558.56-1.284.86-2.05.897-.266.013-.497.219-.497.486 0 .249.202.451.451.451h2.512c.435 0 1.314-.06 2.344-.473a5.794 5.794 0 0 0 3.394-5.272c0-3.104-1.991-5.363-4.935-5.728Z" clip-rule="evenodd"/><path fill="#F57463" fill-rule="evenodd" d="M18.464 19.62a.936.936 0 0 0 .663-1.6l-3.464-3.464a.938.938 0 0 0-.664-.275l-.014.002a.932.932 0 0 0-.65.274l-3.462 3.462a.936.936 0 1 0 1.326 1.325l1.864-1.862v6.479a.937.937 0 1 0 1.875 0v-6.48l1.864 1.863a.93.93 0 0 0 .662.275Z" clip-rule="evenodd"/>
                    </svg>
                    <p>Drag and drop or click to upload</p>
                </>}
            </UploadArea>
            <input 
                style={{display:'none'}}
                type="file" 
                id="fileInput"
                name="avatar" 
                accept="image/*"
                onChange={handleInputChange}
            />
            
            {!err &&
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path stroke="#D1D0D5" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke="#D1D0D5" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
                </svg>
                <div>Upload your photo (JPG or PNG, max size: 500KB).</div>
            </span>}

            {err && 
            <span className='error'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path stroke="#D1D0D5" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke="#D1D0D5" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
                </svg>
                <div>{err}</div>
            </span>}
            
            <div className='inputFields'>
                <label>Full Name</label>
                <Input type="text" required  value={name} onChange={(e)=>setName(e.target.value)}/>

                <label>Email Address</label>
                <Input type="email" required placeholder="example@email.com" value={mail} onChange={(e)=>setMail(e.target.value)}/>

                <label>Github Username</label>
                <Input type="text" required placeholder="@yourusername" value={gitId} onChange={(e)=>setGitId(e.target.value)}/>

                <SubmitButton type='submit'>Generate My Ticket</SubmitButton>
            </div>
        </form>
    </ChildContainer>
  )
}
