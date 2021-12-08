import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { getToken } from './helpers/auth'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import AllStoriesList from './pages/AllStoryList'

// function App() {
//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get('/api/story') // * <-- replace with your endpoint
//       console.log(res.data)
//     }
//     getData()
//   })

//   return <h1>Hello World</h1>
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // We consider the user "logged in" whenever the token is present…
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <Router>
      <header className='App-header'>
        <Nav
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          user={user}
          setUser={setUser}
        />
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/story' component={AllStoriesList} />
          <Route
            path='/login'
            component={(props) => (
              <Login {...props} setIsLoggedIn={setIsLoggedIn} />
            )}
          />
          <Route path='/register' component={Register} />
          {/* <Route path='/users/:id' component={Profile} />
          <Route path='/profiles/:id' component={OtherProfiles} /> */}

          {/* By not specifying a path, we catch all. */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className='app-footer'>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
