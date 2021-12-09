import React from 'react'
import { useState, useEffect } from 'react'
import StoryCard from '../components/StoryCard'
import { getStories } from '../helpers/api'

const AllStoriesList = () => {
  const [stories, setstories] = useState([])

  useEffect(() => {
    const getStoryData = async () => {
      const allstories = await getStories()
      allstories.sort((a, b) => (a.name > b.name ? 1 : -1))
      setstories(allstories)
    }
    getStoryData()
  }, [])

  // useEffect(() => {
  //   getstories().then(setstories)
  //   console.log(selected)
  // }, [])

  return (
    <section className='story-list'>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <StoryCard {...story} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AllStoriesList
