import React, { useState, useEffect } from "react"
import axios from "axios"


const Home = () => {
  const [starWars, setStarWars] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setStarWars(res.data.results)
    })
  },[])

  const renderNames = () => {
    return starWars.map(star => (
      <h1>{star.name}</h1>
    ))
  }

  return (
    <div>
      {renderNames()}
    </div>
  )
}

export default Home