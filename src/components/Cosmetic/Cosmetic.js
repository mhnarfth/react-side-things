import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {

    const {_id, name, age, company, gender} = props.cosmetic;
    const handlePurchase = id => {
        addToDb(id);
    }

    const handleRemove = (id) => {
        deleteFromDb(id);
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Company: {company}</h2>
            <h2>Gender: {gender}</h2>
            <button onClick={()=>handlePurchase(_id)}> Purchase</button>
            <button onClick={() =>handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;