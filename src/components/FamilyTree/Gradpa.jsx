import React, { memo } from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Gradpa = memo(() => {
    return (
        <div>
            <h3>Gradpa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
});

export default Gradpa;