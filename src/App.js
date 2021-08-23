import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';


function App() {

  const [personData, setPersonData] = useState({
    persons: [
      {name: "Max", age : 28},
      {name: "Manu", age : 26},
      {name: "Deep", age : 22}
    ]
  })

  const switchHandler = (arg) => {
    console.log("was clicked");
    setPersonData({
      persons: [
        {name: arg, age : 28},
        {name: "Manu_update", age : 26},
        {name: "Deep_update",age : 22}
      ]
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

  return (
    <div className="App">
      <h1>react app</h1>
      <button onClick={() => switchHandler("Max_Using_callback")}>switch Name</button>
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
  );
}

export default App;
