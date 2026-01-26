import React, { memo } from 'react';
import { MoneyContext } from './FamilyTree';
import { use } from 'react';

const Brother = memo(() => {
    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h2>Brother</h2>
            <button onClick={()=>setMoney(money+ 1000)}>Add 1000</button>
        </div>
    );
});

export default Brother;