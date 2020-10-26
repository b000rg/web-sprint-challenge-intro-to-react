import React from 'react';
import styled from 'styled-components';
import {capitalize} from './Character';

const Types = ({types}) => {
    return (
        <TypesContainer>
            {(types) ? types.map(type =>
                <Type type={type.type.name} key={type.slot}>{capitalize(type.type.name)}</Type>
            ) : null}
        </TypesContainer>
    );
};

const TypesContainer = styled.div`
    margin: 3px 0 6px 0;
`;

const Type = styled.span`
    margin: 0 3px;
    padding: 3px 6px;
    border-radius: 10px;
    background-color: ${({type}) => {
        return typeColors[type];
    }};
`;

const typeColors = {
    normal: '#A8A77A',
    fire:  '#EE8130',
    water:  '#6390F0',
    electric:  '#F7D02C',
    grass:  '#7AC74C',
    ice:  '#96D9D6',
    fighting:  '#C22E28',
    poison:  '#A33EA1',
    ground:  '#E2BF65',
    flying:  '#A98FF3',
    psychic:  '#F95587',
    bug:  '#A6B91A',
    rock:  '#B6A136',
    ghost:  '#735797',
    dragon:  '#6F35FC',
    dark:  '#705746',
    steel:  '#B7B7CE',
    fairy:  '#D685AD'
};

export default Types;
