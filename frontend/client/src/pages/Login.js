import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { setToken, setUserId } from '../helpers/auth'

const Login = ({ setIsLoggedIn }) => {
  const history = useHistory()

  const [loginData, setloginData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const newLoginData = {
      ...loginData,
      [event.target.name]: event.target.value,
    }
    setloginData(newLoginData)
  }
  // console.log('newLoginData', newLoginData)
  // const setTokenToLocalStorage = (token) => {
  //   window.localStorage.setItem('token', token)
  //   console.log('TOKEN', token)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', loginData)
      setToken(data.token)
      console.log('data', data)
      const num = data.id[0].toString()
      console.log('new nunm', num)
      console.log(loginData)
      setUserId(num)
      setIsLoggedIn(true)
      history.push('/story')
    } catch (err) {
      console.log(err)
    }
  }
  console.log('hi this is data')
  console.log(window.localStorage.getItem('token'))
  console.log(window.localStorage.getItem('num'))

  return (
    <>
      <div className='login-wrap'>
        <form onSubmit={handleSubmit} className='register-form'>
          <>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='username'>
                username
              </label>
              <input
                className='main-input'
                type='username'
                name='username'
                placeholder='enter username'
                value={loginData.username}
                onChange={handleChange}
                required
              />
            </div>
          </>

          <>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='password'>
                password
              </label>
              <input
                className='main-input'
                type='password'
                name='password'
                placeholder='enter password'
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
          </>

          <>
            <button>submit</button>
          </>
        </form>
      </div>
    </>
  )
}

export default Login
