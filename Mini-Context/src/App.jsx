import './App.css'
import ContextProvider from './context/ContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <ContextProvider>
      <Profile/>     
      <Login/>
    </ContextProvider>
  )
}

export default App
