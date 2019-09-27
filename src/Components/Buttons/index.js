import React from 'react';
import previous from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import random from '../../assets/random.svg'

const Previous = ({handleClick}) => {
    return ( <img onClick={handleClick}className="previous" src={previous} alt="Previous"/> );
}
 
const Next = ({handleClick}) => {
    return ( <img onClick={handleClick} className="next" src={next} alt="Next"/> );
}
 
const Random = ({handleClick}) => {
    return ( <img onClick={handleClick} className="random" src={random} alt="Random"/> );
}
 

export  {
    Previous,
    Next,
    Random
}