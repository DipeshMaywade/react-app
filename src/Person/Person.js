import React  from 'react';
// import {}'./App.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a person my name is {props.name} and age is {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
