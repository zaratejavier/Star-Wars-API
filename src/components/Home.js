import React, { useState, useEffect } from "react"
import axios from "axios"


const Home = () => {
  const [starWars, setStarWars] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
      console.log(res.data)
    })
  })

  // <h1>Home</h1>
  return (
    <div>
    <h1>Home</h1>
    </div>
  )
}

export default Home