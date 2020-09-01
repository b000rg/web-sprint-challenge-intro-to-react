import React, {useState} from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.svg';

const CollapsibleSection = styled.div`
    color: black;

`;
const ArrowImg = styled.img`
    transition: transform 0.5s;
    transform: ${props => props.collapsed ? 'rotate(-90deg)' : null};
    width: 20px;
`;

const Collapsible = ({name, content}) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <CollapsibleSection>
            <div className="collapsible-header">
                <h3>{name}</h3>
                <ArrowImg className="arrow" src={arrow} alt="expand" onClick={toggle} collapsed={collapsed} />
            </div>
            <div>
                {collapsed ? null : <ul>{content.map((stat, i) => <li key={i}>{stat.stat.name} - {stat.base_stat}</li>)}</ul>}
            </div>
        </CollapsibleSection>
    );
};

export default Collapsible;
