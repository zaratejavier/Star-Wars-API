import React, { useState, useEffect } from "react"
import axios from "axios"


const PlanetView = (props) => {
  const [planet, setPlanet] = useState({})

  useEffect(() => {
    getPlanet()  
  }, [])

  const getPlanet = () => {
    axios.get(`http https://swapi.dev/api/planets/1`)
      .then(res => {
        setPlanet(res.data)
        console.log(res.data)
      }).catch((err) => {
       console.log(err) 
      }
    )
  }
  
  return (
    <h1>PlanetView</h1>
  )
}

export default PlanetView