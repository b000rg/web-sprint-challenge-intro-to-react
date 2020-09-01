import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Collapsible from './Collapsible';

const CharacterCard = styled.div`
    color: black;
    margin: 10px;
    padding: 10px;
    background-color: turquoise;
    border-radius: 15px;
    width: 25%;
    transition: height 0.5s;
`;

const Character = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({});
    
    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => {
                setPokemonData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [pokemon.url]);

    return (
        <CharacterCard>
            {console.log(pokemonData)}
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemonData.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} />
            {pokemonData.stats ? <Collapsible name="Stats" content={pokemonData.stats} /> : null}
        </CharacterCard>
    );
};

export default Character;