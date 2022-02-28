import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken, removeUserId, getUserId } from '../helpers/auth'
import { Squash as Hamburger } from 'hamburger-react'
import { Offcanvas } from 'react-bootstrap'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleLogout = () => {
    removeToken()
    removeUserId()
    setIsLoggedIn(false)
    history.push('/')
  }

  const options = [
    {
      name: 'Disable body scrolling',
      scroll: false,
      backdrop: true,
      // eslint-disable-next-line comma-dangle
    },
  ]

  return (
    <nav>
      <Hamburger color='#2196F3' toggled={show} toggle={setShow} {...options} />
      <Offcanvas show={show}>
        {/* <div className='logo-div'><img src={logo} className ='logo' alt="One Day In logo"/></div> */}
        <ul>
          <li>
            <Link onClick={handleClose} to='/'>
              Home
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link onClick={handleClose} to={`/users/${getUserId()}`}>
                  Profile
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to='/story'>
                  Stories
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link onClick={handleClose} to='/register'>
                  Register
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to='/login'>
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </Offcanvas>
    </nav>
  )
}

export default Nav
