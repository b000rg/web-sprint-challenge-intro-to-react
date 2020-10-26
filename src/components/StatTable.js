import React from 'react';
import styled from 'styled-components';

const StatTable = ({stats}) => {    
    return (
        <Table>
            <thead>
                <tr>
                    <th colspan="6">Stats</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {stats.map(stat => <th span="col" key={stat.stat.name}_stat>{stat.stat.name}</th>)}
                </tr>
                <tr>
                    {stats.map(stat => <td key={stat.stat.name}_value>{stat.base_stat}</td>)}
                </tr>
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    
`;

export default StatTable;
