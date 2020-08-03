import React, { useState, useEffect } from "react"
import Axios from "axios"
import Planet from "./Planet"

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
      <Planet
        key={planet.id}
        {...planet}
      />
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

