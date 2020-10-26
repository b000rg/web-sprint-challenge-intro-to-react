import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Types from './Types';
import CharacterDetails from './CharacterDetails';

const Character = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({name: pokemon.name, loaded: false});
    const [speciesData, setSpeciesData] = useState({});

    useEffect(() => {
        axios
            .get(pokemon.url)
            .then(({data}) => {
                setPokemonData({
                    name: pokemon.name,
                    loaded: true,
                    speciesUrl: data.species.url,
                    imgUrl: data.sprites.front_default,
                    types: data.types,
                    id: data.id,
                    height: data.height,
                    weight: data.weight,
                    stats: data.stats
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [pokemon]);

    useEffect(() => {
        axios
            .get(pokemonData.speciesUrl)
            .then(({data}) => {
                setSpeciesData({
                    pokedexNumber: data.pokedex_numbers.find(entry => entry.pokedex.name === 'national').entry_number,
                    legendary: data.is_legendary || data.is_mythical
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [pokemonData])

    return (
        <Card className={pokemonData.name}>
            <div>
                <span>#{speciesData.pokedexNumber}</span>
                <Name>{capitalize(pokemonData.name)}</Name>
                {(speciesData.legendary) ? <span>✨</span> : null}
            </div>
            {(pokemonData.loaded) ? (
                <div>
                    <Image src={pokemonData.imgUrl} />
                    <Types types={pokemonData.types} />
                    <CharacterDetails pokemonData={pokemonData} speciesData={speciesData} />
                </div>
            ) : null}
        </Card>
    );
};

const capitalize = str => str[0].toUpperCase() + str.substring(1);

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    width: 300px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: skyblue;
`;

const Name = styled.h3`
    display: inline;
    margin: 3px 0 3px 10px;
`;

const Image = styled.img`

`;

export {Character as default, capitalize};
