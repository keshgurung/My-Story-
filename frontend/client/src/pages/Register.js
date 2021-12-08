// import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { register } from '../helpers/api'
import FormInput from '../components/FormInput'

const Register = () => {
  // State variables to track user form input
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  // We need the routing history hook in order to send the user to the next page
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    register(data).then(handleSuccessfulRegister).catch(handleError)
  }

  const handleSuccessfulRegister = () => {
    // Set the App state variable isLoggedIn to true
    setIsError(false)
    // And finally, redirect the user
    history.push('/login')
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <FormInput
          placeholder='username'
          type='text'
          name='username'
          {...formInputProps}
        />
        <FormInput
          placeholder='email@email.com'
          type='email'
          name='email'
          {...formInputProps}
        />
        <FormInput
          placeholder='password'
          type='password'
          name='password'
          {...formInputProps}
        />
        <FormInput
          placeholder='password again'
          type='password'
          name='passwordConfirmation'
          {...formInputProps}
        />
        <div className='submit-section'>
          <input type='submit' value='Register' />
        </div>
        {isError ? (
          <div className='error'>
            <p>Error in registering Please try again.</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Register
