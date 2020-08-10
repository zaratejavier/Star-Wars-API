import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Planet.css"



const PlanetView = (props) => {
  const [planet, setPlanet] = useState({})

  useEffect(() => {
    getPlanet()  
  }, [])

  const getPlanet = () => {
    axios.get(`https://swapi.dev/api/planets/${props.match.params.id}`)
      .then(res => {
        setPlanet(res.data)
        console.log(res.data)
      }).catch((err) => {
       console.log(err) 
      }
    )
  }
  
  return (
    <div>
        <h1 className="planet-view-title">{planet.name}</h1>
      <div className='info-planet'>

        <div><b>Population:</b> {planet.population}</div>
        <div>Climate: {planet.climate}</div>
        <div>Diameter: {planet.diameter}</div>
        <div>Rotation Period: {planet.rotation_period}</div>

        
      </div>
    </div>
  )
}

export default PlanetView