import React from 'react'

const Scoreboard = ({score, numQuestions}) => {


    return (
        <div className='score-section'>
           You have gotten {score} out of {numQuestions} correct so far
        </div>
    )

}

export default Scoreboard




// {showScore ? (
//     <div className='score-section'>
//      

// {showScore ? (
//     <div className='score-section'>
//       You scored {score} out of {questions.length}
//     </div>
// ) : (
//     <>
//     </div>
// ) : (
//     <>