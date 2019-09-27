
import React from 'react';
import {Previous, Next, Random } from '../Buttons'



const ButtonGroup = ({handlePreviousClick, handleRandomClick, handleNextClick}) => {
    return ( 

        <>
        <Previous handleClick={handlePreviousClick}/>
        <Random handleClick={handleRandomClick}/>
        <Next handleClick={handleNextClick}/>
        </>
        
     );
}
 
export default ButtonGroup;