import React from 'react';

const Statement = ({statement, highlight, color}) => {
   
       if (highlight) {
        return (
            <h2>
            {statement} <a href="#" style={{ borderBottom: `${color} 5px solid`, paddingBottom: '.07em'}}>
            {highlight}
            </a>
            </h2>
        )
       } 
       return (
        <h2>{statement}</h2>
       )
    
}
 
export default Statement;