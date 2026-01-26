import React, { useState } from 'react'
import './App.css'
import UncontrolledField from './UncontrolledField/UncontrolledField';
import HookForm from './components/HookForm/HookForm';
import ProductManagement from './components/ProuductManagement/ProductManagement';
import FamilyTree from './components/FamilyTree/FamilyTree';

function App() {
  // const [password, setPassword] = useState('secret');
  // const [error, setError] = useState('');

  // const handleOnChangePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);

  //   if(password.length < 6){
  //     setError('Password must be at least 6 characters long');
  //   } else {
  //     setError('');
  //   }
  // }

  const handleFormAction = (e) => {
    e.preventDefault();
  }

  return (
    <>
      {/* <form onSubmit={handleFormAction} >
        <input type="text" name="name" placeholder="Username" height="40px" className=''/>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" defaultValue={password} onChange={handleOnChangePassword}/>
        <button type="submit">Login</button>
      </form>
      <p style={{color:'red'}}>
        <small>{error}</small>
      </p> */}
      <h1>Controlled Component</h1>
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
      <FamilyTree></FamilyTree>
      {/* <ProductManagement></ProductManagement> */}
    </>
  )
}

export default App
