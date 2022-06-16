import React from 'react';

const Cosmetic = (props) => {

    const {name, age, company, gender} = props.cosmetic;

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Company: {company}</h2>
            <h2>Gender: {gender}</h2>
        </div>
    );
};

export default Cosmetic;