import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };
    
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );  
}

export default App;