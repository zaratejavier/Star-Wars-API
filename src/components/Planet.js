import React from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./Planet.css"


const Planet = (props) => {
  return (
    
    <div key={props.id}>
        <Button
          as={Link}
          to={{pathname: `/Planet/1`}}
        >
          {props.name}
        </Button>
      </div>
    
    // <div className="planet-card">
    // <p>Name: {props.name}</p>
    // </div>
  )

  
}

export default Planet