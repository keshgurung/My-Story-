import React from 'react'
import { getUserName, getStories } from '../helpers/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import StoryCard from '../components/StoryCard'
import { getUserId } from '../helpers/auth'

const Profile = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  console.log(id)

  const [stories, setstories] = useState([])
  useEffect(() => {
    getUserName(id).then(setUser)
    const getStoryData = async () => {
      const allStories = await getStories()
      const newStories = allStories.filter(
        (story) => story.owner.id === parseInt(getUserId())
      )
      setstories(newStories)
    }
    getStoryData()
  }, [id])

  // useEffect(() => {
  //   const getStoryData = async () => {
  //     const allStories = await getStories()
  //     const newStories = allStories.filter(
  //       (story) => story.owner.username === 'admin'
  //     )
  //     setstories(newStories)
  //   }
  //   getStoryData()
  // }, [id])

  return (
    <section>
      {user ? (
        <div className='user-page'>
          <div className='user-info-welcome'>
            <h3> {user.username}</h3>
            <h3>{user.email}</h3>
            <h2>Hello {user.username}, Welcome to mystory</h2>
          </div>
          <div className='user-info'>
            <h3>
              <Link to='/story/add'>Add a Story</Link>
            </h3>
          </div>
          <section className='story-list'>
            <h2> {user.username} Story List</h2>
            <ul>
              {stories.map((story) => (
                <li key={story.id}>
                  <StoryCard {...story} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
}

export default Profile
