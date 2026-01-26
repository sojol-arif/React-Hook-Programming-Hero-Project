import React, { memo } from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = memo(() => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
});

export default Dad;