import React, { Component } from 'react';
import questions from './questions'
import Scoreboard from './components/ScoreBoard'
import QuestionCard from './components/QuestionCard'
import SelectedQuestion from './components/SelectedQuestion';
import WrongAnswer from './components/WrongAnswer'
import styles from './App.module.css'
class App extends Component {
  
    state = {
      selectedQuestionIdx: null,
      score: 0,
      correctlyAnswered: [],
      wrongAnswer: false
    }

    checkAnswer = (answer, idx) => {
      const { selectedQuestionIdx, score, correctlyAnswered } = this.state
      console.log(answer)
      if(answer === questions[selectedQuestionIdx].correctAnswer){
        this.setState({ score: score + 1,  correctlyAnswered: correctlyAnswered.concat([selectedQuestionIdx])})
      } else {
        this.setState({ wrongAnswer : true })
      }
    }

    resetWrongAnswer = () => {
      this.setState({ wrongAnswer: false})
    }

    selectQuestion = (idx) => {
      this.setState({selectedQuestionIdx : idx})
    } 

  render(){
    const { score, selectedQuestionIdx, correctlyAnswered, wrongAnswer } = this.state
   
    return (
      <div className={styles.appContainer}>
          <Scoreboard 
            score={score} 
            numQuestions={questions.length}
            correctlyAnswered={correctlyAnswered}
          />
          <div className={styles.questionCardsContainer}>
            {
            // I'm thinking these will be just divs with the questions and you
            // can select which question you want to answer?
            questions.map((question, idx) => 
                  <QuestionCard 
                        key={`question-card-${idx}`} 
                        question={question}
                        idx={idx}
                        updateParent={this.selectQuestion}
                        />
                        )
            }
          </div>
          <div>
            {
                              wrongAnswer ? 
                              <WrongAnswer resetWrongAnswer={this.resetWrongAnswer}/> 
                              :
              selectedQuestionIdx !== null ?

                <SelectedQuestion 
                  question={questions[selectedQuestionIdx]} 
                  checkAnswer={this.checkAnswer}
                  idx={selectedQuestionIdx}/>
             
                :

                <p>please select a question above</p>
              }
          </div>    
      </div>
     )
  }  

}
export default App