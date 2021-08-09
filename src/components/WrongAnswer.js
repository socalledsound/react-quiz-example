import React from 'react'

const WrongAnswer = ({resetWrongAnswer}) => {
    return ( 
        <div>
            <p>sorry, that's the wrong answer</p>
            <button onClick={resetWrongAnswer}>try again</button>
        </div>
     );
}
 
export default WrongAnswer;