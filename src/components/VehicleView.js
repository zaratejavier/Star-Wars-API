import React, { useState, useEffect } from "react"
import Axios from "axios"

const VehicleView = (props) => {
  const [vehicle, setVehicle] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])
  
  const getVehicle = () => {
    Axios.get(`https://swapi.dev/api/vehicles/${props.match.params.id}`)
      .then(res => {
      setVehicle(res.data)
    })
  }

  return (
    <div>
      {vehicle.name}
    </div>
  )
}

export default VehicleView