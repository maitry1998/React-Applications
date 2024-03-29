import { useState } from "react";
import AnimalShow  from "./AnimalShow";
import './css/App.css'
const getRandomAnimal = () => {
    const animals = ['bird', 'cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random()* animals.length)]
}




function App(){
const [animals,setAnimals] = useState([]);
const renderanimals = animals.map((animal,index)=> {
   return <AnimalShow type={animal} key={index}></AnimalShow>
})
  var handleClick = () =>{
    setAnimals([...animals,getRandomAnimal()])
  }
    return (
        <div className="app">
           <button onClick={handleClick}>Add Animal</button>
           <div className="animal-list">{renderanimals}</div>
        </div>
    )
}

export default App;