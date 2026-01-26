import React, { useContext } from 'react';
import { AssestContext } from './FamilyTree';

const Special = ({ asset }) => {
    const newAsset = useContext(AssestContext);
    console.log('newAsset is:', newAsset);
    return (
        <div>
            <h3>Special</h3>
            <p>Asset: {newAsset}</p>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Special;