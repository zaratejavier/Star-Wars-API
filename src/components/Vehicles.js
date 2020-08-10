import React, { useState, useEffect } from "react"
import Axios from "axios"
import Vehicle from "./Vehicle"

const Vehicles = () => {
  const [Vehicles, setVehicles] = useState([])

  useEffect(() => {
    getVehicles()
  }, [])
  
  const getVehicles = () => {
    Axios.get('https://swapi.dev/api/vehicles')
      .then(res => {
        setVehicles(res.data.results)
        console.log(res.data)
    })
  }

  const renderVehicles = () => {
    return Vehicles.map(vehicle => (
      <Vehicle
        key={vehicle.url}
        {...vehicle}
      />
    ))
  }

  return(
  <div>
      <h1>Vehicles</h1>
      {renderVehicles()}
  </div >
  )
}

export default Vehicles