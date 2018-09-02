import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    // 動的なクラスの生成
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
          <h1>Hi, I'm a React app </h1>
          <p className={assignedClasses.join(' ')}>This is realry working!</p>
          <button
          className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;