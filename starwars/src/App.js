import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'

const CharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
          let charList = [];
          res.data.results.forEach(pokemon => {
            charList.push(pokemon);
          })
          setCharacterList(charList);
        })
        .catch(err => {
          console.log(err);
        });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList>
        {characterList.map(pokemon => {
          return <Character key={pokemon.name} pokemon={pokemon} />
        })}
      </CharacterList>
    </div>
  );
};

export default App;
