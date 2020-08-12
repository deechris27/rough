import React, { useState, useEffect } from 'react';
import './osigninsignup.css';
import SignupBit from './SignUp';
import SigninBit from './SignIn';
import OverLayBit from './Overlay';

function SignInSignup() {

    const [containerClass, setContainerClass] = useState("");

    const handleSignInUp = (e) => {
   
        if(e && e.target && e.target.name){
           return  e.target.name === "signup" ? setContainerClass("right-panel-active") : setContainerClass("");
        }else{
            setContainerClass("")
        }  
    };

    useEffect(()=>{
        handleSignInUp()
    },[])

    return (
        <React.Fragment>
            <div className={`main-container ${containerClass ? containerClass : ""}`}>
                <SignupBit />
                <SigninBit />
                <OverLayBit handleSignInUp={handleSignInUp}/>
            </div>
        </React.Fragment>
    )
}

export default SignInSignup;