import React from 'react';
import { add as additionalOperation, sub } from '../../utilities/utilities';

const Cosmetics = () => {

    const first =  6;
    const second = 2;

    const addition = additionalOperation(first, second);
    const subtraction = sub(first, second); 

    return (
        <div>
            <h1>Mahin Arafath</h1>
        </div>
    );
};

export default Cosmetics;