import React from 'react'
// import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken, removeUserId, getUserId } from '../helpers/auth'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  // const [show, setShow] = useState(false)

  // const handleClose = () => setShow(false)

  const handleLogout = () => {
    removeToken()
    removeUserId()
    setIsLoggedIn(false)
    history.push('/')
  }

  return (
    <header>
      <div className='menu'>
        {/* <div className='logo-div'><img src={logo} className ='logo' alt="One Day In logo"/></div> */}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/story'>Stories</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to={`/users/${getUserId()}`}>Profile</Link>
              </li>
              <li>
                <Link to='/story'>Stories</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
