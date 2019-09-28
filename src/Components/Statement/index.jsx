import React from 'react';

const Statement = ({statement, highlight, color, handleMouseOver, link, isDarkMode}) => {
   console.log(isDarkMode, color)
       if (highlight) {
        return (
            <h2>
            {statement} 
            <a 
            onMouseOver={handleMouseOver} 
            href={link ? `${link}` : '#'} 
            style={{ borderBottom: `${isDarkMode && color === '#000' ? '#fff' : color} 5px solid`, paddingBottom: '.07em'}}
            target="_blank"
            rel="noreferrer noopener"
            >
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