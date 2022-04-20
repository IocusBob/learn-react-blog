import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Mr. Newman's Amazing Website</h1>
        <h4>Prepare to be amazed</h4>
        <p>You HAVE to check out this <Link to="/blogs">blog page</Link></p>
    </div>
  )
}

export default Home