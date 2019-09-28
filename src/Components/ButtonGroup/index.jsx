
import React from 'react';
import {Previous, Next, Random } from '../Buttons'



const ButtonGroup = ({handlePreviousClick, handleRandomClick, handleNextClick, isDarkMode}) => {
    return ( 

        <>
        <Previous isDarkMode={isDarkMode} handleClick={handlePreviousClick}/>
        <Random isDarkMode={isDarkMode} handleClick={handleRandomClick}/>
        <Next isDarkMode={isDarkMode} handleClick={handleNextClick}/>
        </>
        
     );
}
 
export default ButtonGroup;