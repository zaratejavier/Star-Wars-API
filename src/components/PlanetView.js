import React, { useState, useEffect } from "react"
import axios from "axios"


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
        debugger
      }).catch((err) => {
       console.log(err) 
      }
    )
  }
  
  return (
    <div>
      <h1>PlanetView</h1>
      {planet.name}
    </div>

  )
}

export default PlanetView