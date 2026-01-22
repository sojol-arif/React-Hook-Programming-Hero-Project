import React, { memo } from 'react';
import { useRef } from 'react';

const UncontrolledField = memo(() => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', 'myEmail', emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Username" height="40px" className='' />
                <input ref={emailRef} type="email" name="email" placeholder="Email" />
                <input ref={passwordRef} type="password" />
                <input type="submit"/>
            </form>
        </>
    );
});

export default UncontrolledField;