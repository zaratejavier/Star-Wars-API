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
    <div key={character.id} >
      <h1 className="view-header">{character.name}</h1>
      <div className="all-characterview">
        <div>
          <img className='view-image' alt={character.name} src={character.image} /> 
        </div>

        <div>
          <div><b>Home World:</b> {character.homeworld}</div>
          <div><b>Species:</b> {character.species}</div>
          <div><b>Gender:</b> {character.gender}</div>
          <div><b>Hair Color:</b> {character.hairColor}</div>
          <div><b>Masters:</b> {character.masters}</div>
          <div><b>Height:</b> {character.height}</div>
          <div><b>Born Location:</b> {character.bornLocation}</div>
        </div>
        
       </div>
    </div>
  )
}

export default CharacterView

