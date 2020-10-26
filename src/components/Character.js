import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Types from './Types';

const Character = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({name: pokemon.name, loaded: false});

    useEffect(() => {
        axios
            .get(pokemon.url)
            .then(({data}) => {
                setPokemonData({
                    name: pokemon.name,
                    loaded: true,
                    imgUrl: data.sprites.front_default,
                    types: data.types,
                    id: data.id,
                    height: data.height,
                    weight: data.weight
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [pokemon]);

    return (
        <Card>
            <div>
                <span>#{pokemonData.id}</span>
                <Name>{capitalize(pokemonData.name)}</Name>
            </div>
            {(pokemonData.loaded) ? (
                <div>
                    <Image src={pokemonData.imgUrl} />
                    <Types types={pokemonData.types} />
                    <div>
                        <Metric>Height: {(pokemonData.height * 0.1).toFixed(1)}m</Metric>
                        <Metric>Weight: {(pokemonData.weight * 0.1).toFixed(1)}kg</Metric>
                    </div>
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
    width: 250px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: skyblue;
`;

const Name = styled.h3`
    display: inline;
    margin: 3px 10px;
`;

const Image = styled.img`

`;

const Metric = styled.p`
    display: inline;
    margin: 5px;
`;

export {Character as default, capitalize};
