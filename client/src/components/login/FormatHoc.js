import React from 'react';


const signUpFields = (
    <div>
        <input type="text" placeholder="Name" id="inputey"/>
        <input type="email" placeholder="Email" id="inputey"/>
        <input type="password" placeholder="Password" id="inputey"/>
        <input type="password" placeholder="Confirm Password" id="inputey"/>
        <button className="buttoney">Sign Up</button>
    </div>
);

const signInFields = (
    <div>
        <input type="email" placeholder="Email" id="inputey"/>
        <input type="password" placeholder="Password" id="inputey"/>
        <a href="#" className="social">Forgot your password?</a>
        <button className="buttoney">Sign In</button>
    </div>
);

const socialIcons = (
    <div className="social-container">
        <a href="#" className="social"><i className="fa fa-fw fa-facebook"></i></a>
        <a href="#" className="social"><i className="fa fa-fw fa-google"></i></a>
        <a href="#" className="social"><i className="fa fa-fw fa-linkedin"></i></a>
    </div>
);

function FormatHoc(WrappedComponent) {
    let formFields;
    if(WrappedComponent.name==="SigninBit"){
        formFields = signInFields;
    }
    if(WrappedComponent.name==="SignupBit"){
        formFields = signUpFields;
    }
    return function formTemplate(props) {
        return <WrappedComponent formFields={formFields} socialIcons={socialIcons} {...props} />
    }
}

export default FormatHoc;