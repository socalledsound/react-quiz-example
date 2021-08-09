import React from 'react'
import QuestionForm from './QuestionForm'

const SelectedQuestion  = ({ question, checkAnswer, idx }) => {
    
        return (
            <div>
                <p>{question.questionText}</p>
                <QuestionForm 
                    idx={idx} 
                    checkAnswer={checkAnswer} 
                    answerOptions={question.answerOptions}
                />
            </div>
        )
    
}

export default SelectedQuestion