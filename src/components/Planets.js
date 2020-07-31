import React, { useState, useEffect } from "react"
import Axios from "axios"

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets()
  }, [])

  const getPlanets = () => {
    Axios.get('https://swapi.dev/api/planets/')
      .then(res => {
        console.log(res.data)
        setPlanets(res.data.results)

      })
  }

  const renderPlanets = () => {
    return planets.map(planet => (
      <p>{planet.name}</p>
    ))
  }

  return (
    <>
      <h1>Planets</h1>
      {renderPlanets()}
    </>
  )
}

export default Planets