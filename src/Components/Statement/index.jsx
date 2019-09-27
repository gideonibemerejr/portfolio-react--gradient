import React from 'react';

const Statement = ({statement, highlight, color, handleMouseOver}) => {
   
       if (highlight) {
        return (
            <h2>
            {statement} <a onMouseOver={handleMouseOver} href="#" style={{ borderBottom: `${color} 5px solid`, paddingBottom: '.07em'}}>
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