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

  const switchHandler = () => {
    console.log("was clicked");
    setPersonData({
      persons: [
        {name: "Maxxx", age : 28},
        {name: "Manu", age : 26},
        {name: "Deep", age : 22}
      ]
    })
  }

  return (
    <div className="App">
      <h1>react app</h1>
      <button onClick={switchHandler}>switch Name</button>
      <Person name= {personData.persons[0].name} age={personData.persons[0].age}/>
      <Person name={personData.persons[1].name} age={personData.persons[1].age}>This is child</Person>
      <Person name={personData.persons[2].name} age={personData.persons[2].age}/>
    </div>
  );
}

export default App;
