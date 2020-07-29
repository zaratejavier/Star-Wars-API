import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "semantic-ui-react"


const Home = () => {
  const [starWars, setStarWars] = useState([])


  useEffect(() => {
    getStarWarsData();
  }, [])
  
  const getStarWarsData = ()=> {
    // axios.get('https://swapi.dev/api/people')
    axios.get('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => {
        console.log(res.data)
        setStarWars(res.data)
        console.log(res.data)
    })
  }

  const renderNames = () => {
    return starWars.map(star => (
      // <Card>
      //   <Card.Header>{star}</Card.Header>
      // </Card>
      <div>
        {star.name}
        Length: {star.length}

      </div>
    ))
  }

  return (
    <div>
      <h3>Star Wars</h3>
      {renderNames()}
    </div>
  )
}

export default Home