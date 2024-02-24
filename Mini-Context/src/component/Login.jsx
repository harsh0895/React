import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault() // we use this for hmara data kahi na jaaye!!!!!!!!
        setUser({username, password})
    }

  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Login</h2>
      <input type="text" placeholder='username' value={username} 
        onChange={(e) => setUsername(e.target.value)} style={styles.input}/> <br />
      <input type="text" placeholder='password' value={password} 
        onChange={(e) => setPassword(e.target.value)} style={styles.input}/>
      <button onClick={handleSubmit} style={styles.button} >Submit</button>
    </div>
  )
}

const styles = {
    container: {
      maxWidth: '300px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '8px 0',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  };
  

export default Login
