import React from 'react';
import FormatHoc from './FormatHoc';


function SigninBit({ formFields, socialIcons }) {
    return (
        <div className="form-container sign-in-container">
            <form action="#" id="formey">
                <h1 className="sub-title">Sign in</h1>
                 {socialIcons}
                <span className="or-text">or use your account</span>
                 {formFields}
            </form>
        </div>
    )
}

export default FormatHoc(SigninBit);