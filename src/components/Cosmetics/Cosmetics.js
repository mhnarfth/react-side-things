import React, { useEffect, useState } from 'react';
import { add as additionalOperation, sub } from '../../utilities/utilities';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data));
    },[])

    return (
        <div>
            <h1>Shop my Cosmetic</h1>
            {
                cosmetics.map(cosmetic=> <Cosmetic 
                    key={cosmetic._id}
                    cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;




// const cosmetics = [
//     {id: '1', name: 'Alta', price:'2029'},
//     {id: '2', name: 'Nail Polish', price:'7435'},
//     {id: '3', name: 'Face Mask', price:'435'},
//     {id: '4', name: 'Maskara', price:'4523'},
// ]