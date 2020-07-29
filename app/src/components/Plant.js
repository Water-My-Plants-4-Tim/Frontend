import React from 'react';

const Plant = props => {
    return (
        <div>
            <h2>Nickname: {props.plant.nickname}</h2>
            <h3>Species: {props.plant.species}</h3>
            <h3>H2O Frequency: {props.plant.h2oFrequency}</h3>
        </div>
    )
};

export default Plant;