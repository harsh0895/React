import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { setUser } = useContext(UserContext);

    const changeUser = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }


  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'
        value={username} onChange={changeUser} />
        <input type="text" placeholder='password'
        value={password} onChange={changePassword} />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
