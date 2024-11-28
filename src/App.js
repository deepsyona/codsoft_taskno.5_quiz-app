import React, { useState } from 'react'
import Quiz from './Components/Quiz/Quiz'
import Login from './Components/Login'

const App = () => {

const [user, setUser] = useState(null)

const handleLogin = (email, password)=> {
  if(email == 'd@b.com' && password=='123'){
    setUser('admin')
  }
  else{
    alert("Invalid Credentials")
  }
}


  return (
    (!user ? <Login handleLogin={handleLogin}/> : <Quiz/>)
  )
}

export default App