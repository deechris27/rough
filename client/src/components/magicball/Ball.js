import React, {useEffect, useState} from 'react';
import './ball.css';
import getRandomAnswer from '../../utils/utils';
import Spinner from '../spinner/Spinner';

const Ball = ({answers}) => {

    const [displayAnswer, setDisplayAnswer] = useState("");

    const getAnswer = ()=>{
        setDisplayAnswer(getRandomAnswer(answers));
     };

   return <div className="ball-container" onClick={getAnswer}>
        <div className="outer-ball">
             <div className="inner-ball">
                 {displayAnswer ? displayAnswer : <div style={{fontSize: '50px'}}>8</div>}
             </div>
        </div>
        <div className="ball-shadow"></div>
    </div>
};

const MagicBall = ()=>{

  let answers = [
    "Hello Deeps",
    "Yeah dee is smart",
    "the fact is, deepak made this",
    "Wassupp",
    "Oh I see",
    "Without a doubt",
    "Yes definitely",
    "You may go ahead",
    "As I see it, yes",
    "Most likely",
    "Wonderful",
    "Yes..",
    "Hello Mytidbit",
    "Ask Maolins",
    "Ask again later",
    "Better not tell you now",
    "Will tell you later",
    "Concentrate and ask again",
    "Don't think so",
    "My reply is no",
    "My sources say no",
    "I doubt that",
    "Hmm surprised..."
  ];

  //  const [isLoading, setIsLoading] = useState(true);
  //  const [answers, setAnswers] = useState(["doggy", "wassup"]);
   

   useEffect(()=>{
      fetch('http://localhost:3000/yo')
      .then(res=>res.json()).then(data=>{
         console.log("******", data);
      }).catch(e=>{
          throw("Error Occurred ", e)
        })
   }, []);

    return (
       <div>
          {<Ball answers={answers} />}
       </div>
   )
};

export default MagicBall;