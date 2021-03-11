import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target
    name === "username" ? setUsername(value) : setPassword(value)
  }
  console.log(username, password)
  return (
    <form>
      <input type="text" onChange={ onChange } name="username" value={ username } placeholder="Username" />
      <input type="password" onChange={ onChange } name="password" value={ password } placeholder="Password" />
      <button type="submit" >Login</button>
    </form>
  )
}

export default Login
