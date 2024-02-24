import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0); // this setCount takes a call back funtion for updating a value of counte

    // for increament value and you can increament upto 20
    function addValue() {
        if( count == 20){
            alert("You can not increament");
            return;
        }
        else{
            setCount(count + 1);
            // setCount((count) => count + 1);
        }
    }

    // for decreament value
    function subValue() {
        if( count > 0){
            setCount(count - 1);
        }
        else{
            alert("you can not decrease value:")
            return;
        }
    }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Counter Application</h1>
      <h2 style={styles.value}>Value: {count}</h2>
      <button style={styles.button} onClick={addValue} >Increament</button>
      <button style={styles.button} onClick={subValue} >decreament</button>
    </div>
  )
}

const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
    },
    heading: {
      color: 'white',
    },
    value: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      margin: '5px',
      cursor: 'pointer',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
    },
  };

export default Counter
