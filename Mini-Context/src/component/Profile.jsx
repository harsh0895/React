import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if( !user ) return <div style={{fontSize: 30}}>PLEASE LOGIN</div>

    return (
        <div style={{fontSize: 30}}>
            Welcome {user.username.toUpperCase()}
        </div>
  )
}

export default Profile
