import React, {useState} from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.svg';
import StatTable from './StatTable';

const CharacterDetails = ({pokemonData, speciesData}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDetails = () => {
        let arrowRotation = [
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(-90deg)'}
        ];

        document.querySelector(`.${pokemonData.name} .arrow`).animate(arrowRotation, {
            direction: (expanded) ? 'reverse' : 'normal',
            fill: 'forwards',
            duration: 125
        });
        
        setExpanded(!expanded);
    };
    
    return (
        <Details>
            <ExpandDetails onClick={toggleDetails}>
                <span>Details</span>
                <Arrow className="arrow" src={arrow} />
            </ExpandDetails>
            {(expanded) ? (
                <div>
                    <Metric>Height: {(pokemonData.height * 0.1).toFixed(1)}m</Metric>
                    <Metric>Weight: {(pokemonData.weight * 0.1).toFixed(1)}kg</Metric>
                    <StatTable stats={pokemonData.stats} />
                </div>
            ) : null }
        </Details>
    );
};

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpandDetails = styled.p`
    display: flex;
    justify-content: space-between;
    width: 75px;
`;

const Arrow = styled.img`
    height: 16px;
`;

const Metric = styled.p`
    display: inline;
    margin: 5px;
`;

export default CharacterDetails;
