import React from "react";

export default function Child(props) {
  const { name, age, setName, setAge } = props;

  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={setName}
        placeholder="Enter your name here"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={setAge}
        placeholder="Enter your age here"
      />
      Hello My name is {name} and my age is {age}
    </>
  );
}
