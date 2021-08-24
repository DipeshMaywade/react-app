import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';


function App() {

  const [personData, setPersonData] = useState({
    persons: [
      {name: "Max", age : 28},
      {name: "Manu", age : 26},
      {name: "Deep", age : 22}
    ],
    showPersons: false
  })

  const switchHandler = (arg) => {
    console.log("was clicked");
    setPersonData({
      persons: [
        {name: arg, age : 28},
        {name: "Manu_update", age : 26},
        {name: "Deep_update",age : 22}
      ],

    })
  }

  const nameChangeHandler = (event) => {
    //console.log("was clicked");
    setPersonData({
      persons: [
        {name: "Max", age : 28},
        {name: event.target.value, age: 26},
        {name: "Deep_update",age : 22}
      ]
    })
  }

  const togglePersonHandler = () => {
    const currentValue = personData.showPersons;
    setPersonData({...personData, showPersons: !currentValue})
  }
  return (
    <div className="App">
      <h1>react app</h1>
      <button onClick={togglePersonHandler}>switch Name</button>
      {personData.showPersons ?
      <div>
      <Person  
          name= {personData.persons[0].name} 
          age={personData.persons[0].age}
          click = {switchHandler.bind(this, "Max_Using_bind")}/>
        <Person 
          name={personData.persons[1].name} 
          age={personData.persons[1].age}
          changed = {nameChangeHandler}>This is child</Person>
        <Person 
          name={personData.persons[2].name} 
          age={personData.persons[2].age}/>
      </div>
      : null }
    </div>
  );
}

export default App;
