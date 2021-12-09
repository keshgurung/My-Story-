import React from 'react'
import { getUserName, getStories } from '../helpers/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import StoryCard from '../components/StoryCard'

const Profile = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  console.log(id)

  useEffect(() => {
    getUserName(id).then(setUser)
  }, [id])

  const [stories, setstories] = useState([])

  useEffect(() => {
    const getStoryData = async () => {
      const allstories = await getStories()
      //allstories.filter((story) => story.owner.username === user.username)
      // console.log(allstories.owner.username)
      // console.log(user.username)
      setstories(allstories)
    }
    getStoryData()
  }, [id])

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
