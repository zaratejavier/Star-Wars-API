import React, { useEffect, useState } from "react"
import axios from "axios"
import "./CharacterView.css"

const CharacterView = (props) => {
  const [character, setCharacter] = useState({})
  
  useEffect(() => {
    getCharacter();
  }, [])
  
   const getCharacter = ()=> {
    axios.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${props.match.params.id}.json`)
      .then(res => {
        setCharacter(res.data)
        console.log(res.data)
      }).catch((err) => {
       console.log(err) 
      }
    )
   }

  return (
    <div key={character.id}>
      <h1 className="view-header">{character.name}</h1>
      <img className='view-image' alt={character.name} src={character.image} />
      <div style={{color:"rgba(241, 210, 86, 0.899)"}}>Home World: {character.homeworld}</div>
      <div>Species: {character.species}</div>
      <div>Gender: {character.gender}</div>
      <div>Hair Color: {character.hairColor}</div>
      <div>Masters: {character.masters}</div>
      <div>Height: {character.height}</div>
      <div>Born Location: {character.bornLocation}</div>





    </div>
  )
}

export default CharacterView

