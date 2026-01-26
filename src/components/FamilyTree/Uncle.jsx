import React, { memo } from 'react';
import Cousin from './Cousin';

const Uncle = memo(() => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name="Rafsan"></Cousin>
                <Cousin name="JapSha"></Cousin>
            </section>
        </div>
    );
});

export default Uncle;