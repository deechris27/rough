import React from 'react';

function OverLayBit({handleSignInUp}) {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className="titley">Good to see you!</h1>
                    <p className="sub-text">Login with Facebook, Google LinkedIn or with your registered email.</p>
                    <button className="ghost" name="signin" onClick={handleSignInUp}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className="titley">Hello, Deepak!</h1>
                    <p className="sub-text">Enter your name and email address to get started</p>
                    <button className="ghost" name="signup" onClick={handleSignInUp}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default OverLayBit;