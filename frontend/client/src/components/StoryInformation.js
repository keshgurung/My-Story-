import React, { useState, useEffect } from 'react'
import Hotspot from './Hotspot'
import HotspotNoCoins from './HotspotNoCoins'
import SingleHotspot from './SingleHotspot'
import { Link } from 'react-router-dom'
import { getToken } from '../helpers/auth'

const StoryInformation = ({
  _id,
  title,
  description,
  genre,
  rating,
  comment,
}) => {
  console.log(_id)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // We consider the user "logged in" whenever the token is present…
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const sortedRecommendations = recommendations.sort((a, b) =>
    a.averageRating > b.averageRating ? -1 : 1
  )
  console.log(sortedRecommendations)

  return (
    <>
      <div className='StoryInformation'>
        <div className='top-section'>
          <h2>{title} </h2>
          <h3>{description}</h3>

          {/* <div className='top-data'>
    <h6><Link to={`/cities/${_id}/recommendations/${sortedRecommendations[0].type}`}>{sortedRecommendations[0].title}</Link></h6>
     <p>{sortedRecommendations[0].location}</p>
     <div className='owner-info'>
      <p>Average Rating: {sortedRecommendations[0].averageRating}</p>
      <p className='owner'>Submitted by <Link to={`/profiles/${sortedRecommendations[0].owner._id}`}>{sortedRecommendations[0].owner.username}</Link></p>
     </div> */}
        </div>
      </div>

      <div className='user-suggestion-section'>
        <div className='user-suggestion'>
          <div className='user-top-row'>
            <h3>User Suggestions:</h3>
          </div>
        </div>
        {isLoggedIn ? (
          <div className='add-suggestion'>
            <h4>
              Got a recommendation?
              <Link to={`/cities/${_id}/recommendations`}>Add it here</Link>{' '}
            </h4>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default StoryInformation
