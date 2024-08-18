import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
  const animals = ["dog", "cat", "horse", "cow", "gator"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // Event handler fn
  // const handleClick =()=> {
  //     console.log('Button was clicked');
  // };
  //   const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };
  const [animals, setAnimals] = useState([]);
  const handleClickAnimal = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      {/* <button onClick={()=> console.log('Button was clicked')}>Add Animals</button> */}
      {/* <div>
        <button onClick={handleClick}>Add Animals</button>
        Number of animals = {count}
      </div> */}
      <div className="app">
        <button onClick={handleClickAnimal}> Add Animals</button>
        <div className="animal-list"> {renderAnimals}</div>
      </div>
    </div>
  );
}

export default App;
