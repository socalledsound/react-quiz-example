import React, { Component } from 'react'
import RadioInput from './RadioInput'

class QuestionForm extends Component {

    state = {
        selectedOption: null
    }

    onChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { idx, checkAnswer } = this.props
        const { selectedOption } = this.state
        e.preventDefault()
        checkAnswer(selectedOption, idx)
        this.setState({selectedOption : null })

    }


    render(){
        const {answerOptions } = this.props
        const { selectedOption } = this.state
        console.log(answerOptions)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {
                        answerOptions.map((answer, idx) => 
                            <RadioInput 
                                key={`radio${idx}`}
                                text={answer.answerText}
                                checked={selectedOption === answer.answerText}
                                updateParent={this.onChange}
                            />)
                    }
                    <button type='submit'>check answer</button>
                </form>
                
            </div>
        )
    }
}
export default QuestionForm
 



//   <div className='question-section'>
//   <div className='question-count'>
//       <span>Question {currentQuestion + 1}</span>/{questions.length}
//   </div>
//   <div className='question-text'>
//       {questions[currentQuestion].questionText}
//   </div>
// </div>

// <div className='answer-section'>
// {
// questions[currentQuestion].answerOptions.map((answerOption) => (
// <button 
// onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}
// >
// {answerOption.answerText}
// </button>
// ))}
// </div>
// </>
// )}
// </div>