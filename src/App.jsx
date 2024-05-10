import { useState } from 'react'
import './App.css'
import SignUp from '../components/SignUp'
import Authenticate from '../components/Authenticate'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUp token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />

    </>
  );
}

export default App
