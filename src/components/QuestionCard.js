import React from 'react'
import styles from './QuestionCard.module.css'

const QuestionCard = ({question, idx, updateParent}) => {
    return ( 
        <div 
            onClick={() => updateParent(idx)}
            className={styles.questionCardContainer}

        >
            {
                //could have the whole question here or just a number?
                idx
            }
            
            
        </div>
     );
}
 
export default QuestionCard
