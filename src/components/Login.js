import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    name === "username" ? setUsername(value) : setPassword(value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log("I tried to login")
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={ onSubmitHandler }>
      <input type="text" onChange={ onChangeHandler } name="username" value={ username } placeholder="Username" />
      <input type="password" onChange={ onChangeHandler } name="password" value={ password } placeholder="Password" />
      <input type="submit" value="Log In" />
    </form>
  )
}

export default Login
