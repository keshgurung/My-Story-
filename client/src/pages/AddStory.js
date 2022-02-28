import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
// import { addStory } from '../helpers/api'
import { getToken } from '../helpers/auth'
import FormInput from '../components/FormInput'

const AddStory = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    genre: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const history = useHistory()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const config = {
        method: 'post',
        url: '/api/story/',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data,
      }
      const response = await axios(config)
      setIsError(false)
      history.push('/story')
      return response.data
    } catch (err) {
      handleError
      console.log(err)
    }
  }

  const handleFormChange = (event) => {
    const { name, value, type } = event.target
    setData({
      ...data,
      [name]: type === 'number' ? parseInt(value) : value,
    })
  }
  console.log(data)

  const formInputProps = {
    data,
    errorInfo,
    handleFormChange,
  }

  return (
    <>
      <div>
        <h1>ADD A STORY</h1>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='title'
            type='text'
            placeholder='title'
            {...formInputProps}
          />
          <FormInput
            name='description'
            type='text'
            placeholder='description'
            {...formInputProps}
          />
          <select
            className='select-type'
            id='number'
            name='genre'
            onChange={handleFormChange}
          >
            <option type='number' value='1'>
              romantic
            </option>
            <option type='number' value='2'>
              horror
            </option>
            <option type='number' value='3'>
              comedy
            </option>
            <option type='number' value='4'>
              fiction
            </option>
            <option type='number' value='5'>
              drama
            </option>
          </select>
          <div>
            <input type='submit' value='Add Story' />
          </div>
          {isError ? (
            <div className='error'>
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </section>
    </>
  )
}

export default AddStory
