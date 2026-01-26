import React, { memo } from 'react';
import { MoneyContext } from './FamilyTree';
import { use } from 'react';

const Friend = memo(() => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Friend's Money: {money}</p>
        </div>
    );
});

export default Friend;