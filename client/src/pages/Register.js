import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory()

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  // const [errors, setErrors] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  const handleUserData = (e) => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    // const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    // setErrors(newErrors)
  }

  //* Submit form as post request to backend
  const submitForm = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      console.log(formData)
      history.push('/login')
      console.log('Registration Success')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='register-wrap'>
        <form onSubmit={submitForm} className='register-form'>
          <top>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='email'>
                username
              </label>
              <input
                className='main-input'
                type='text'
                name='username'
                placeholder='enter username'
                value={formData.username}
                onChange={handleUserData}
                required
              />
            </div>
          </top>

          <bottom>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='email'>
                email
              </label>
              <input
                className='main-input'
                type='email'
                name='email'
                placeholder='enter email'
                value={formData.email}
                onChange={handleUserData}
                required
              />
            </div>
          </bottom>
          <top>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='password'>
                password
              </label>
              <input
                className='main-input'
                type='password'
                name='password'
                placeholder='enter password'
                value={formData.password}
                onChange={handleUserData}
                required
              />
            </div>
          </top>

          <bottom>
            <div className='form-group-register'>
              <label className='frm-label' htmlFor='password_confirmation'>
                password confirmation
              </label>
              <input
                className='main-input'
                type='password'
                name='password_confirmation'
                placeholder='confirm password'
                value={formData.password_confirmation}
                onChange={handleUserData}
                required
              />
            </div>
          </bottom>

          <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default Register
