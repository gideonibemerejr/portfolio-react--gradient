
import React from 'react';
import {Previous, Next, Random } from '../Buttons'



const ButtonGroup = (props) => {
    return ( 
        <div>
        <Previous />
        <Random />
        <Next />
        </div>
        
     );
}
 
export default ButtonGroup;