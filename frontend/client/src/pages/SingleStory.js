import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StoryInformation from '../components/StoryInformation'
import { getStory } from '../helpers/api'
// import axios from 'axios'

const SingleStory = () => {
  const [story, setStory] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getStory(id).then(setStory)
  }, [id])

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(`/api/story/${id}`) // * <-- replace with your endpoint
  //     console.log(res.data)
  //     setStory(res.data)
  //   }
  //   getData()
  // }, [id])

  console.log('single story page loaded', story)
  return (
    <section>
      {story ? (
        <StoryInformation {...story} isHorizontal={true} />
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
}

export default SingleStory
