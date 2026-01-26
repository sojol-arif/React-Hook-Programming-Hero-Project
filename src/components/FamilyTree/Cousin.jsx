import React, { memo } from 'react';

const Cousin = memo(({name}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
});

export default Cousin;