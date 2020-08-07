import React, { useState, useEffect } from "react"
import Axios from "axios"

const Vehicles = () => {
  const [Vehicles, setVehicles] = useState([])

  useEffect(() => {
    getVehicles()
  }, [])
  
  const getVehicles = () => {
    Axios.get('https://swapi.dev/api/vehicles')
      .then(res => {
        debugger
        setVehicles(res.data.results)
        console.log(res.data)
    })
  }

  const renderVehicles = () => {
    return Vehicles.map(vehicle => (
      <h3>{vehicle.name}</h3>
    ))
  }

  return(
  <div>
      <h1>This is the Vehicles page</h1>
      {renderVehicles()}
  </div >
  )
}

export default Vehicles