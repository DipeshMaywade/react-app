import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';
import Radium from 'radium';


function App() {

  const [personData, setPersonData] = useState({
    persons: [
      {id: "fdsfsd", name: "Max", age : 28},
      {id: "sffsd",name: "Manu", age : 26},
      {id: "2sfsd", name: "name", age : 22}
    ],
    showPersons: false
  })

  // const switchHandler = (arg) => {
  //   setPersonData({...personData,
  //     persons: [
  //       {name: arg, age : 28},
  //       {name: "Manu_update", age : 26},
  //       {name: "Deep_update",age : 22}
  //     ]
  //   })
  // }

  const nameChangeHandler = (event, id) => {
    const personIndex = personData.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...personData.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...personData.persons]

    persons[personIndex] = person;

    setPersonData({ ...personData, persons:persons })
  }

  const deletePerson = (index) => {
    const persons = [...personData.persons];
    persons.splice(index, 1);
    setPersonData({...personData, persons: persons});
  }


  const togglePersonHandler = () => {
    const currentValue = personData.showPersons;
    setPersonData({...personData, showPersons: !currentValue})
  }

  const style = {
    backgroundColor:'green',
    font: 'inherit',
    border: '5px solid black',
    padding: '5px',
    cursor: 'pointer',
    ':hover':{
      backgroundColor: 'lightgreen',
      color: 'balck'
    }
  }

  let persons = null; 

  if (personData.showPersons ) {
    persons = (
      <div>
        {personData.persons.map((person, index) => {
          return <Person
          click= {() => deletePerson(index)}
          name = {person.name} 
          age={person.age}
          key= {person.id}
          changed= {(event) => nameChangeHandler(event, person.id)}
          />
        })}
      </div>
    );
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }


  let classes = [];
  if (personData.persons.length <= 2){
    classes.push('red');
  }
  if (personData.persons.length <= 1){
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>react app</h1>
      <p className={classes.join(' ')} > Delete Element Warnings </p>
      <button
        style = {style}
        onClick={togglePersonHandler}>Toggle Persons</button> 
      {persons}
    </div>
  );
}

export default Radium(App);
