import React from 'react'
// import { Link } from 'react-router-dom'

const StoryCard = ({ title, description, genre }) => {
  return (
    // <Link to={`/story/${_id}`}>
    <>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h4>{genre.title}</h4>
    </>
    // </Link>
  )
}

export default StoryCard
