import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';




class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Bob', age: 22},
      {id: 'asfa2', name: 'Amnah', age: 27},
      {id: 'asfa3', name: 'Manu', age: 100}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  //Only want to pass a reference of the switchNameHandler, not the actual function, on the function will eecute right away.

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }


    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      passing: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}/>
              );
          })}
        </div>
      );
    //   style.backgroundColor = 'red';
    //   style[':hover'] = {
    //     backgroundColor: 'salmon',
    //     color: 'black'
    //   };
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');  //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');  //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1> Hi, Im a react app </h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}> Toggle Persons</StyledButton>
        {persons}
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;






// import React, { useState} from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// const app = props => {
//   const [personsState, setPersonsState] = useState ({
//     persons: [
//       {name: 'Bob', age: 22},
//       {name: 'Amnah', age: 27},
//       {name: 'Manu', age: 100}
//     ]
//   });
//
//   const [otherState, setOtherState] = useState('Some other value');
//
//
//   console.log(personsState, otherState);
//
//   const switchNameHandler = () => {
//       //DONt use this either, it's mutating and will give errors::  ->  this.state.person[0].name = 'Bobbina';
//       // console.log('Was Clicked');
//       setPersonsState({
//         persons: [
//           {name: 'Bobbina', age: 22},
//           {name: 'Amnah', age: 27},
//           {name: 'Manu', age: 55}
//       ]
//     // otherState: personsState.otherState})
//   });
// };
//
//     return (
//       <div className="app">
//         <h1> Hi, Im a react app </h1>
//         <button onClick={switchNameHandler}> Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> I like to play soccer </Person>
//       </div>
//
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//     );
//
// }
//
// export default app;
