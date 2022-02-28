import React, { useState, useEffect, useRef } from 'react'

const options = [
  {
    name: 'Disable body scrolling',
    scroll: false,
    backdrop: true,
  },
]

function OCExample({ isLoggedIn, setIsLoggedIn, user, setUser, ...options }) {
  return <></>
}

function Example({ isLoggedIn, setIsLoggedIn, user, setUser }) {
  return (
    <>
      {options.map((options, idx) => (
        <OCExample
          key={idx}
          {...options}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          user={user}
          setUser={setUser}
        />
      ))}
    </>
  )
}

export default Example
