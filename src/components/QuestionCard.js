import React from 'react'
import styles from './QuestionCard.module.css'

const QuestionCard = ({question, idx, updateParent, alreadyCorrect}) => {
    console.log(alreadyCorrect)
    return ( 
        <div>
        {alreadyCorrect ? 
            <div 
            className={styles.answeredQuestionCardContainer}

        >

            {'\u2713'}
            
        </div>
        
        : 
         <div 
            onClick={() => updateParent(idx)}
            className={styles.activeQuestionCardContainer}

        >
            {
                question.heading
            }
            
            
        </div>

        }
        </div>
     );
}
 
export default QuestionCard
