import React from 'react';
import {hydrate, render} from 'react-dom';
import App from './src/App';

const renderApp = Component => {
    hydrate(<Component />, root);
};

renderApp(App);