const getRandomAnswer = (answers) => {
    const randomAnswerIndex = Math.ceil(Math.random() * answers.length-1);
    if(Object.prototype.toString.call(answers) !== '[object Array]'){
        return null;
    }else{
        return answers[randomAnswerIndex];
    }              
};

export default getRandomAnswer;