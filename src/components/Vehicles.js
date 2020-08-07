import React, { useState, useEffect } from "react"
import Axios from "axios"

const Vehicles = () => {
  const [Vehicles, setVehicles] = useState([])

  useEffect(() => {

  }, [])
  
  const getVehicles = () => {
    Axios.get('https://swapi.dev/api/vehicles')
      .then(res => {
        debugger
      console.log(res.data)
    })
  }

  return(
  <div>
      <h1>This is the Vehicles page</h1>
      {getVehicles()}
  </div >
  )
}

export default Vehicles