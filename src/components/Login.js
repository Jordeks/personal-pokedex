import React, { useState } from 'react'
import { login } from '../services/user';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    name === "username" ? setUsername(value) : setPassword(value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    let credentials = { username: username, password: password }
    login(credentials)
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          alert("You're logged in!")
          // history.push('/')
        }
      })
      .catch(console.log)
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
