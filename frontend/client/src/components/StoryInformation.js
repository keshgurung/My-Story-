/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserId } from '../helpers/auth'
import { getToken } from '../helpers/auth'

const StoryInformation = ({
  id,
  title,
  description,
  genre,
  rating_set,
  comment_set,
  owner,
}) => {
  console.log(id)

  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <div className='StoryInformation'>
      <div className='top-section'>
        <h2>{title} </h2>
        <p>genre: {genre.title}</p>
        written by:
        {!parseInt(getUserId()) !== owner.id ? (
          <Link to={`/user/${owner.id}`}>{owner.username} </Link>
        ) : (
          owner.username
        )}
        <h3>{description}</h3>
        <p>{comment_set.text}</p>
        <p>{rating_set.rating}</p>
      </div>
      {getUserId() === owner.username ? (
        <>
          <p>edit</p>
          <p>delete</p>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default StoryInformation
