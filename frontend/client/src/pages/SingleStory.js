import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StoryInformation from '../components/StoryInformation'
import { getStory } from '../helpers/api'

const SingleStory = () => {
  const [story, setStory] = useState(null)
  const { id } = useParams()
  //   const history = useHistory()

  useEffect(() => {
    getStory(id).then(setStory)
  }, [id])

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
