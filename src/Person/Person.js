import React from 'react';

import './Person.css';

const person =(props)=> {
   return(
       <div className="Person">
        <p>I'm a {props.name} and I'm {props.age} years old</p> 
        <p>{props.children}</p>
        <input type="text" value={props.name}></input>
       </div>
   )
 };

export default person;