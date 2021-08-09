import React from 'react'

const RadioInput = ({text, checked, updateParent}) => {
    return ( 
        <div>
            <label>
            <input
                type='radio'
                value={text}
                checked={checked}
                onChange={updateParent}
            />
            {text}
            </label>
        </div>
     );
}
 
export default RadioInput;