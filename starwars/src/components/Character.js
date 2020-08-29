import React from 'react';
import styled from 'styled-components';
import Collapsible from './Collapsible';

const CharacterCard = styled.div`
    color: black;
    margin: 10px;
    padding: 10px;
    background-color: turquoise;
    border-radius: 15px;
`;

const Character = ({pokemon}) => {
    return (
        <CharacterCard>
            <h2>{pokemon.name}</h2>
            <Collapsible name="Names" content={pokemon.names} />
            <Collapsible name="Egg Groups" content={pokemon.egg_groups} />
        </CharacterCard>
    );
};

export default Character;