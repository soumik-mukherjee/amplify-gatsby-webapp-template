import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { AuthContext } from '../../api/AuthContext'

const Home = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h1>Home</h1>
      <p>{`Hello ${auth.attributes.email}`}</p>
      <p>
        You are now logged in! <Link to="/app/profile">View profile</Link>
      </p>

      <p
        onClick={() => {
          auth.signOut()
        }}
      >
        Click here to sign-out
      </p>
    </div>
  )
}

export default Home
