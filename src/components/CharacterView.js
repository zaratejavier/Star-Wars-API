import React, { useEffect, useState } from "react"
import axios from "axios"

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
    <div>
      <h4>{character.name}</h4>
      <img className='Image' src={character.image} />
    </div>
  )
}

export default CharacterView

