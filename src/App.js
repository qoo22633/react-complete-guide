import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  // 初期値
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Taro', age: 19 },
      { id: 3, name: 'hoge', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // テキストから受け取った値で変更する
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deleteNameHandler = (personIndex) => {
    // slice()でpersonsをコピーする。
    // そうすることで、元のpersonsを傷つけることなくこの後のspliceすることができる
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // 表示する
  togglePersonsHandler =() => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if ( this.state.showPersons ) {
      
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deleteNameHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    // 動的なクラスの生成
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React app </h1>
          <p className={assignedClasses.join(' ')}>This is realry working!</p>
          <button
          style={style}
          onClick={this.togglePersonsHandler}>switch name</button>
          {persons}
        </div>
    );
  }
}

export default App;
