import React, { createContext, memo, useState } from 'react';
import Gradpa from './Gradpa';
import './FamilyTree.css';

export const AssestContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = memo(() => {
    const [money, setMoney] = useState(0);
    const asset = 'diamond ring';
    const newAsset = 'gold ring';
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <p> Family Total Money {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssestContext.Provider value={newAsset}>
                    <Gradpa asset={asset}></Gradpa>
                </AssestContext.Provider>
            </MoneyContext>
        </div>
    );
});

export default FamilyTree;