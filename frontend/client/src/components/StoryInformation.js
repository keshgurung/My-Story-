/* eslint-disable camelcase */
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { getToken } from '../helpers/auth'

const StoryInformation = ({
  id,
  title,
  description,
  genre,
  rating_set,
  comment_set,
}) => {
  console.log(id)

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   // We consider the user "logged in" whenever the token is present…
  //   if (getToken()) {
  //     setIsLoggedIn(true)
  //   } else {
  //     setIsLoggedIn(false)
  //   }
  // }, [])

  // const sortedRecommendations = recommendations.sort((a, b) =>
  //   a.averageRating > b.averageRating ? -1 : 1
  // )
  // console.log(sortedRecommendations)

  return (
    <div className='StoryInformation'>
      <div className='top-section'>
        <h2>{title} </h2>
        <h3>{description}</h3>
        <p>{genre.title}</p>
        <p>{comment_set.text}</p>
        <p>{rating_set.rating}</p>
      </div>
    </div>
  )
}

export default StoryInformation
