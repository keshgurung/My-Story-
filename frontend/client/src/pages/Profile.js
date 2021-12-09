import React from 'react'
import { getUserName } from '../helpers/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProfileEditForm from '../components/ProfileEditForm'

const Profile = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()
  //   const history = useHistory()
  console.log(id)
  useEffect(() => {
    getUserName(id).then(setUser)
  }, [id])

  return (
    <section>
      {user ? (
        <div className='user-page'>
          <div className='user-info-welcome'>
            <h3>Hello {user.username}</h3>
          </div>
          <div className='user-info'>
            <h4>Account Details:</h4>
            <ProfileEditForm {...user} />
          </div>
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
