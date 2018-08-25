import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // 初期値
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Taro', age: 19 },
      { name: 'hoge', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // テキストから受け取った値で変更する
  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 19 },
        { name: 'hoge', age: 26 },
      ],
     } )
  }

  // ボタンを押した時のイベント
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 19 },
        { name: 'hoge', age: 26 },
      ]
     } )
  }

  // 表示する
  togglePersonsHandler =() => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow })
  }

  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
        <div className="App">
          <h1>hi, i'm a react app </h1>
          <button
          style={style}
          onClick={this.togglePersonsHandler}>switch name</button>
          {persons}
        </div>
    );
  }
}

export default App;
