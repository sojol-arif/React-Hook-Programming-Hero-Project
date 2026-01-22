import React, { memo } from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = memo(() => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Username" height="40px" className='' defaultValue={name} onChange={nameOnChange}/>
                <input type="email" name="email" placeholder="Email" onChange={emailOnChange} />
                <input type="password" onChange={passwordOnChange}/>
                <input type="submit"/>
                dsf
            </form>
        </div>
    );
});

export default HookForm;