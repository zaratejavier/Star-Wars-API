import React, { useState, useEffect } from "react"
import axios from "axios"
import Character from "./Character"
import StarWars from '../images/starwars.png'

// import { Card } from "semantic-ui-react"


const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters();
  }, [])
  
  const getCharacters = ()=> {
    // axios.get('https://swapi.dev/api/people')
    axios.get('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => {
        setCharacters(res.data)
        console.log(res.data)
        debugger
      }).catch((err) => {
       console.log(err) 
      }
    )
  }

  const renderNames = () => {
    return characters.map(character => (
      <Character
        key={character.id}
        {...character}
      />
    ))
  }

  return (
    
    <div className="haha" >
       <img className="starwars-image" src={StarWars} alt="logo" />;

      {/* <h1 className="title">Star Wars Characters</h1> */}
      <div className='render-names'>
        {renderNames()}
      </div>
    </div>
  )
}

export default Home