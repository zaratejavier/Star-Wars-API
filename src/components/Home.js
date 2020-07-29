import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "semantic-ui-react"
import "./Home.css"


const Home = () => {
  const [starWars, setStarWars] = useState([])

  useEffect(() => {
    getStarWarsData();
  }, [])
  
  const getStarWarsData = ()=> {
    // axios.get('https://swapi.dev/api/people')
    axios.get('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => {
        setStarWars(res.data)
        console.log(res.data)
      }).catch((err) => {
       console.log(err) 
      }
    )
  }

  const renderNames = () => {
    return starWars.map(star => (
      // <Card>
      //   <Card.Header>{star}</Card.Header>
      // </Card>
      <div className="Character-name">
        {star.name}
        <img className='Image' src={star.image}/>
      </div>
    ))
  }

  return (
    <>
      <h3 className="title">Star Wars Characters</h3>
      <div className='haa'>
        {renderNames()}
      </div>
    </>
  )
}

export default Home