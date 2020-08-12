import React from 'react';
import Ball from './components/magicball/Ball';
import OverLayContainer from './components/login/OverlayContainer';

const App = () => {
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Hello from client</h1>
            <Ball />
            <OverLayContainer />
        </div>
    )
};

export default App;