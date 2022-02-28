import React from 'react'
import { Link } from 'react-router-dom'

const StoryCard = ({ id, title, description, genre }) => {
  return (
    // <Link to={`/story/${_id}`}>
    <>
      <Link to={`/story/${id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>{description}</h3>
      <h4>{genre.title}</h4>
    </>
    // </Link>
  )
}

export default StoryCard
