import React, { useState } from 'react';
import SignInSignup from './OsigninSignup';

function OverLayContainer(){
    const overlayRef = React.createRef();
    const [display, setDisplay] = useState("none");
    const show = () => {
        setDisplay("block")
    };
    const hide = () => {
        setDisplay("none")
    }
    return(
    <div>
        <button style={{position:'relative', bottom:'340px', left:'598px', cursor: 'pointer'}} onClick={show}>Login</button>
        <div className="overlay-effect" ref={overlayRef} style={{display: `${display}`}}>
        <div style={{display: `${display}`}} className="close-signinup" name="none" onClick={hide}>X</div>
             <SignInSignup />
        </div>
    </div>)
}

export default OverLayContainer;