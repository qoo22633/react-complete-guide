import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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

  /**
   * 名前の書き換えメソッド
   */
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

  /**
   * 指定したpersonを削除するメソッド
   */
  deleteNameHandler = (personIndex) => {
    // slice()でpersonsをコピーする。
    // そうすることで、元のpersonsを傷つけることなくこの後のspliceすることができる
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  /**
   * ボタンを押した時に、フラグを切り替えるメソッド
   */
  togglePersonsHandler =() => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow })
  }

  render() {
    let persons = null;

    // フラグによってpersonsを表示するか制御する
    if ( this.state.showPersons ) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler}/>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
          {persons}
        </div>
    );
  }
}

export default App;