import React from 'react';
import Loader from './30.svg';

function Spinner({}){
   return <div style={{position: 'relative', left:'45%', top:'250px'}}>
       <img src={Loader} alt="loading......" />
   </div>
}

export default Spinner;