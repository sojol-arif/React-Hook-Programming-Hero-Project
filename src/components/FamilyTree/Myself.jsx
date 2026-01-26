import React, { memo } from 'react';
import Special from './Special';
import Friend from './Friend';

const Myself = memo(() => {
    return (
        <div>
            <h2>Myself</h2>
            <Friend></Friend>
            <section>
                <Special></Special>
            </section>
        </div>
    );
});

export default Myself;